import { mix, each, directionEnabled } from '../util/common';
import { getLimitRange, getFieldRange } from './helper';
import Interaction from './base';
import Chart from '../chart/chart'; // import * as FilterPlugin from '../plugin/filter';

import UpdateScaleMixin from './mixin/update-scale';

class Pinch extends Interaction {
  getDefaultCfg() {
    var defaultCfg = super.getDefaultCfg();
    return mix({}, defaultCfg, {
      startEvent: 'pinchstart',
      processEvent: 'pinch',
      endEvent: 'pinchend',
      resetEvent: 'touchend',
      pressThreshold: 9,
      // Minimal movement that is allowed while pressing
      pressTime: 251,
      // Minimal press time in ms
      mode: 'x',
      currentPinchScaling: null,
      originValues: null,
      minScale: null,
      maxScale: null,
      limitRange: {},
      sensitivity: 1,
      _pinchCumulativeDelta: 0,
      _timestamp: 0
    });
  }

  constructor(cfg, chart) {
    super(cfg, chart);
    var self = this;
    var {
      hammer
    } = self;
    hammer.get('pinch').set({
      // open pinch recognizer
      enable: true
    });
    chart.set('limitInPlot', true); // chart.registerPlugins([ FilterPlugin, {
    //   changeData() {
    //     self.limitRange = {};
    //     self.originTicks = null;
    //   },
    //   clear() {
    //     self.limitRange = {};
    //     self.originTicks = null;
    //   }
    // }]);

    mix(self, UpdateScaleMixin);
  }

  start() {
    if (this.pressed) return;
    this.currentPinchScaling = 1;
  }

  process(e) {
    if (this.pressed) return;

    this._handlePinch(e);
  }

  end(e) {
    if (this.pressed) return;

    this._handlePinch(e);

    this.currentPinchScaling = null; // reset

    this.pinchCumulativeDelta = 0;
  }

  _handlePinch(e) {
    var currentPinchScaling = this.currentPinchScaling;
    var diff = 1 / currentPinchScaling * e.scale;
    var rect = e.target.getBoundingClientRect();
    var offsetX = e.center.x - rect.left;
    var offsetY = e.center.y - rect.top;
    var center = {
      x: offsetX,
      y: offsetY
    }; // fingers position difference

    var x = Math.abs(e.pointers[0].clientX - e.pointers[1].clientX);
    var y = Math.abs(e.pointers[0].clientY - e.pointers[1].clientY); // diagonal fingers will change both (xy) axes

    var p = x / y;
    var xy;

    if (p > 0.3 && p < 1.7) {
      xy = 'xy';
    } else if (x > y) {
      xy = 'x';
    } else {
      xy = 'y';
    }

    var lastTimestamp = this._timestamp;
    var now = +new Date();

    if (now - lastTimestamp > 16) {
      this._doZoom(diff, center, xy);

      this._timestamp = now;
    } // Keep track of overall scale


    this.currentPinchScaling = e.scale;
  }

  _doZoom(diff, center, whichAxes) {
    var self = this;
    var {
      mode,
      chart,
      limitRange
    } = self; // Which axe should be modified when figers were used.

    var _whichAxes;

    if (mode === 'xy' && whichAxes !== undefined) {
      // based on fingers positions
      _whichAxes = whichAxes;
    } else {
      _whichAxes = 'xy';
    }

    var data = chart.get('data');

    if (directionEnabled(mode, 'x') && directionEnabled(_whichAxes, 'x')) {
      // x
      var xScale = chart.getXScale();
      var xField = xScale.field;

      if (!limitRange[xField]) {
        limitRange[xField] = getLimitRange(data, xScale);
      }

      if (xScale.isCategory) {
        // 横轴为分类类型
        self._zoomCatScale(xScale, diff, center);
      } else if (xScale.isLinear) {
        self._zoomLinearScale(xScale, diff, center, 'x');
      }

      this.xRange = getFieldRange(xScale, limitRange[xField], xScale.type);
    }

    if (directionEnabled(mode, 'y') && directionEnabled(_whichAxes, 'y')) {
      // y
      var yScales = chart.getYScales();
      each(yScales, function (yScale) {
        var yField = yScale.field;

        if (!limitRange[yField]) {
          limitRange[yField] = getLimitRange(data, yScale);
        }

        yScale.isLinear && self._zoomLinearScale(yScale, diff, center, 'y');
      });
      var scale = yScales[0];
      this.yRange = getFieldRange(scale, limitRange[scale.field], scale.type);
    }

    chart.repaint();
  }

  _zoomLinearScale(scale, zoom, center, flag) {
    var chart = this.chart;
    var {
      min,
      max,
      field
    } = scale;
    var valueRange = max - min;
    var limitRange = this.limitRange;
    var originRange = limitRange[field].max - limitRange[field].min;
    var coord = chart.get('coord');
    var newDiff = valueRange * (zoom - 1);

    if (this.minScale && zoom < 1) {
      // zoom in
      var maxRange = originRange / this.minScale;
      newDiff = Math.max(valueRange - maxRange, newDiff);
    }

    if (this.maxScale && zoom >= 1) {
      // zoom out
      var minRange = originRange / this.maxScale;
      newDiff = Math.min(valueRange - minRange, newDiff);
    }

    var offsetPoint = coord.invertPoint(center);
    var percent = flag === 'x' ? offsetPoint.x : offsetPoint.y;
    var minDelta = newDiff * percent;
    var maxDelta = newDiff * (1 - percent);
    var newMax = max - maxDelta;
    var newMin = min + minDelta;
    this.updateLinearScale(field, newMin, newMax);
  } // 针对分类类型


  _zoomCatScale(scale, zoom, center) {
    var pinchCumulativeDelta = this._pinchCumulativeDelta;
    var sensitivity = this.sensitivity;
    pinchCumulativeDelta = zoom > 1 ? pinchCumulativeDelta + 1 : pinchCumulativeDelta - 1;
    this._pinchCumulativeDelta = pinchCumulativeDelta;
    var {
      field,
      values
    } = scale;
    var chart = this.chart;
    var coord = chart.get('coord');

    if (!this.originTicks) {
      this.originTicks = scale.ticks;
    }

    var originValues = this.limitRange[field];
    var originValuesLen = originValues.length;
    var minScale = this.minScale || 1;
    var maxScale = this.maxScale || 5;
    var minCount = parseInt(originValuesLen / maxScale);
    var maxCount = parseInt(originValuesLen / minScale);
    var currentLen = values.length;

    if (pinchCumulativeDelta > 0 && currentLen <= minCount) {
      return null;
    }

    if (pinchCumulativeDelta < 0 && currentLen >= maxCount) {
      return null;
    }

    var lastLabelIndex = originValuesLen - 1;
    var firstValue = values[0];
    var lastValue = values[currentLen - 1];
    var minIndex = originValues.indexOf(firstValue);
    var maxIndex = originValues.indexOf(lastValue);
    var chartCenter = (coord.start.x + coord.end.x) / 2;
    var centerPointer = center.x;

    if (Math.abs(pinchCumulativeDelta) > sensitivity) {
      var deltaCount = Math.max(1, parseInt(currentLen * Math.abs(zoom - 1)));

      if (pinchCumulativeDelta < 0) {
        if (centerPointer >= chartCenter) {
          if (minIndex <= 0) {
            maxIndex = Math.min(lastLabelIndex, maxIndex + deltaCount);
          } else {
            minIndex = Math.max(0, minIndex - deltaCount);
          }
        } else if (centerPointer < chartCenter) {
          if (maxIndex >= lastLabelIndex) {
            minIndex = Math.max(0, minIndex - deltaCount);
          } else {
            maxIndex = Math.min(lastLabelIndex, maxIndex + deltaCount);
          }
        }

        this._pinchCumulativeDelta = 0;
      } else if (pinchCumulativeDelta > 0) {
        if (centerPointer >= chartCenter) {
          minIndex = minIndex < maxIndex ? minIndex = Math.min(maxIndex, minIndex + deltaCount) : minIndex;
        } else if (centerPointer < chartCenter) {
          maxIndex = maxIndex > minIndex ? maxIndex = Math.max(minIndex, maxIndex - deltaCount) : maxIndex;
        }

        this._pinchCumulativeDelta = 0;
      }

      var newValues = originValues.slice(minIndex, maxIndex + 1);
      this.updateCatScale(field, newValues, this.originTicks, originValues, minIndex, maxIndex);
    }
  }

}

Chart.registerInteraction('pinch', Pinch);
export default Pinch;