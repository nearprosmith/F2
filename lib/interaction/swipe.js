"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _common = require("../util/common");

var _base = _interopRequireDefault(require("./base"));

var _chart = _interopRequireDefault(require("../chart/chart"));

var _move = _interopRequireDefault(require("./mixin/move"));

var _updateScale = _interopRequireDefault(require("./mixin/update-scale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Swipe = /*#__PURE__*/function (_Interaction) {
  _inheritsLoose(Swipe, _Interaction);

  var _proto = Swipe.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var defaultCfg = _Interaction.prototype.getDefaultCfg.call(this);

    defaultCfg = (0, _common.mix)({}, defaultCfg, {
      startEvent: 'touchstart',
      processEvent: 'swipe',
      endEvent: 'touchend',
      currentDeltaX: null,
      threshold: 10,
      // Minimal distance required before recognizing.
      velocity: 0.3,
      // Minimal velocity required before recognizing, unit is in px per ms.
      limitRange: {},
      _timestamp: 0,
      _panCumulativeDelta: 0,
      speed: 5
    });
    return defaultCfg;
  };

  function Swipe(cfg, chart) {
    var _this;

    _this = _Interaction.call(this, cfg, chart) || this;

    var self = _assertThisInitialized(_this);

    var hammer = self.hammer,
        threshold = self.threshold,
        velocity = self.velocity;
    chart.set('limitInPlot', true);

    if (hammer) {
      hammer.get('swipe').set({
        direction: 6,
        // only support horizontal
        threshold: threshold,
        velocity: velocity
      });
    } // chart.registerPlugins([ FilterPlugin, {
    //   changeData() {
    //     self.limitRange = {};
    //   },
    //   clear() {
    //     self.limitRange = {};
    //   }
    // }]);


    self.mode = 'x';
    (0, _common.mix)(self, _updateScale["default"], _move["default"]);
    return _this;
  }

  _proto.process = function process(e) {
    this.currentDeltaX = 0;

    this._handleMove(e);
  };

  _proto.end = function end() {
    this.currentDeltaX = null;
    this._panCumulativeDelta = 0;
  };

  return Swipe;
}(_base["default"]);

_chart["default"].registerInteraction('swipe', Swipe);

var _default = Swipe;
exports["default"] = _default;