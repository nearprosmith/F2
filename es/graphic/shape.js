import { isNil } from '../util/common';
import Element from './element';

class Shape extends Element {
  _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false,
      isShape: true,
      attrs: {}
    };
  }

  getType() {
    return this._attrs.type;
  }

  drawInner(context) {
    var self = this;
    var attrs = self.get('attrs');
    self.createPath(context);
    var originOpacity = context.globalAlpha;

    if (self.hasFill()) {
      var fillOpacity = attrs.fillOpacity;

      if (!isNil(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
        context.fill();
        context.globalAlpha = originOpacity;
      } else {
        context.fill();
      }
    }

    if (self.hasStroke()) {
      var lineWidth = attrs.lineWidth;

      if (lineWidth > 0) {
        var strokeOpacity = attrs.strokeOpacity;

        if (!isNil(strokeOpacity) && strokeOpacity !== 1) {
          context.globalAlpha = strokeOpacity;
        }

        context.stroke();
      }
    }
  }

  getBBox() {
    var bbox = this._attrs.bbox;

    if (!bbox) {
      bbox = this.calculateBox();

      if (bbox) {
        bbox.x = bbox.minX;
        bbox.y = bbox.minY;
        bbox.width = bbox.maxX - bbox.minX;
        bbox.height = bbox.maxY - bbox.minY;
      }

      this._attrs.bbox = bbox;
    }

    return bbox;
  }

  calculateBox() {
    return null;
  }

  createPath() {}

}

export default Shape;