"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
  firstName: 'John',
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg'
};
(0, _react2.storiesOf)('Components|Modal', module).add('VHModal with title', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    open: true,
    header: "VanHack",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('VHModal without title', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    open: true,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hideBtnClose: false,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('VHModal without Close Icon', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    open: true,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hideBtnClose: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('VHModal with component', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    open: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    content: _react.default.createElement("div", null, "teste")
  }));
});