"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Text/index"));

var _index2 = _interopRequireDefault(require("../Cards/Base/index"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHTimer = function VHTimer(props) {
  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      seconds = _React$useState2[0],
      setSeconds = _React$useState2[1];

  var _React$useState3 = _react.default.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      minutes = _React$useState4[0],
      setMinutes = _React$useState4[1];

  var _React$useState5 = _react.default.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      hours = _React$useState6[0],
      setHours = _React$useState6[1];

  var _React$useState7 = _react.default.useState(0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      days = _React$useState8[0],
      setDays = _React$useState8[1];

  var _React$useState9 = _react.default.useState(0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      months = _React$useState10[0],
      setMonths = _React$useState10[1];

  var _React$useState11 = _react.default.useState(0),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      currentDate = _React$useState12[0],
      setCurrent = _React$useState12[1];

  var start = function start(endDate) {
    requestAnimationFrame(function () {
      var now = new Date();
      var currentDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

      if (currentDate >= endDate) {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);
        setMonths(0);
        props.onEndTime();
      } else {
        setCurrent(currentDate);
        var diffSeconds = Math.abs(currentDate.getSeconds() - 60);

        if (diffSeconds === 60) {
          diffSeconds = 0;
        }

        var diffMinutes = endDate.getMinutes() - (currentDate.getMinutes() - 60);

        if (currentDate.getMinutes() < endDate.getMinutes()) {
          diffMinutes = parseInt(endDate.getMinutes()) - currentDate.getMinutes();
        } // let diffHours = endDate.getHours() - currentDate.getHours()


        if (diffMinutes > 0) {
          diffMinutes -= 1;
        }

        if (diffMinutes >= 60) {
          diffMinutes = 0;
        }

        var ONE_DAY = 1000 * 60 * 60;
        var date_ini_ms = currentDate.getTime();
        var date_fim_ms = endDate.getTime();
        var diferenca = date_fim_ms - date_ini_ms;
        var diffHours = Math.abs(Math.round(diferenca / ONE_DAY));
        var diffDays = endDate.getDate() - currentDate.getDate(); // diffHours = parseInt(diffHours) + (parseInt(diffDays) * 24)

        var diffMonths = endDate.getMonth() - currentDate.getMonth();

        if (diffHours > 0) {
          diffHours -= 1;
        }

        if (props.debugger) {
          console.log({
            "Seconds": diffSeconds,
            "Minutes": diffMinutes,
            "Hours": diffHours,
            "Days": diffDays,
            "Months": diffMonths
          });
        }

        setSeconds(diffSeconds);
        setMinutes(diffMinutes);
        setHours(diffHours);
        setDays(diffDays);
        setMonths(diffMonths);
        start(endDate);
      }
    });
  };

  _react.default.useEffect(function () {
    console.log(props.endDate);
    start(new Date(props.endDate));
  }, []);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.TimerContainer, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 1,
    marginLeft: 2
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    height: 1,
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "h4",
    color: "black-90",
    text: days
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "caption",
    color: "gray-40",
    text: "Days"
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 1
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    height: 1,
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "h4",
    color: "black-90",
    text: hours
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "caption",
    color: "gray-40",
    text: "Hours"
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 1
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    height: 1,
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "h4",
    color: "black-90",
    text: minutes
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "caption",
    color: "gray-40",
    text: "Min"
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 3
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    height: 1,
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "h4",
    color: "black-90",
    text: seconds
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "caption",
    color: "gray-40",
    text: "Sec"
  })))))));
};

var _default = VHTimer;
exports.default = _default;