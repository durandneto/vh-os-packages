"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../../Sections/Premium/Intro/index"));

var _index2 = _interopRequireDefault(require("../../Sections/Premium/Services/index"));

var _index3 = _interopRequireDefault(require("../../Sections/Premium/Pricing/index"));

var _index4 = _interopRequireDefault(require("../../Sections/Premium/SuccessCases/index"));

var _index5 = _interopRequireDefault(require("../../Sections/Premium/Hired/index"));

var _index6 = _interopRequireDefault(require("../../Sections/Premium/Faq/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var VHPremiumTemplate = function VHPremiumTemplate(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      backgroundColor: "#f2f8fc",
      height: "100vh",
      padding: "20px 0 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    title: props.intro.items.title,
    highlight: props.intro.items.highlight,
    description: props.intro.items.description,
    label: props.intro.items.label,
    image: props.intro.items.image,
    features: props.intro.features,
    onEvent: props.onEvent
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      backgroundColor: "#fffffff",
      padding: "270px 0 150px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    sectionTitle: "How Does Premium Work",
    title: props.services.interviewClass.title,
    highlight: props.services.interviewClass.highlight,
    description: props.services.interviewClass.description,
    imgSvg: props.services.interviewClass.imgSvg,
    label: props.services.interviewClass.label,
    to: props.services.interviewClass.to,
    icon: props.services.interviewClass.icon,
    premiumOtherServices: props.services.otherServices
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      backgroundColor: "rgba(203, 248, 251, 0.44)",
      height: "100vh",
      padding: "50px 0 20px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
    sectionTitle: "Pricing",
    icon: "medal",
    title: "30 Days Money Back Guarantee",
    description: "If you're not getting incredible value and feeling more prepared than ever to get a job in Canada or Europe in the first 30 days, just talk to us and we'll refund 100% of your purchase, no questions asked.",
    cardItems: props.pricing.cardItems,
    onEvent: props.onEvent
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      backgroundColor: "#ffffff",
      padding: "50px 0 150px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_index4.default, {
    sectionTitle: props.success.items.sectionTitle,
    title: props.success.items.title,
    highlight: props.success.items.highlight,
    imgBackgroundCards: props.success.items.imgBackgroundCards,
    cardLeftTitle: props.success.items.cardLeft.title,
    cardLeftDescription: props.success.items.cardLeft.description,
    cardRightTitle: props.success.items.cardRight.title,
    cardRightDescription: props.success.items.cardRight.description,
    imgVideo: props.success.items.imgVideo,
    iconVideo: props.success.items.iconVideo,
    videoDescription: props.success.items.videoDescription,
    label: props.success.items.label,
    to: props.success.items.to,
    iconLink: props.success.items.iconLink,
    onEvent: props.onEvent
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      backgroundColor: "#ffffff",
      height: "100vh",
      padding: "50px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_index5.default, {
    sectionTitle: "Premium Vanhackers hired",
    btnLabel: "JOIN VANHACK PREMIUM",
    candidates: props.hired.candidates,
    onEvent: props.onEvent
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      backgroundColor: "#f2f6f9",
      height: "100vh",
      padding: "50px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_index6.default, {
    sectionTitle: "Frequently Asking Questions",
    title: "Have questions about VanHack Premium?",
    description: "Give us your email and we\u2019ll get in touch.",
    imgSvg: "meeting",
    faqs: props.faq.faqs,
    onEvent: props.onEvent
  })));
};

VHPremiumTemplate.defaultProps = {};
VHPremiumTemplate.propTypes = {};
var _default = VHPremiumTemplate;
exports.default = _default;