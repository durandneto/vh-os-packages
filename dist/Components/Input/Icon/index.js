"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Simple = _interopRequireDefault(require("../Simple"));

var _Img = _interopRequireDefault(require("../../Img"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../../../../assets/icons/icon-github.svg' */
var GitHubIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzVDNkJDMCIgZD0iTTkuOTk5LjIwOEM0LjQ3Ny4yMDggMCA0LjcwMyAwIDEwLjI0OGMwIDQuNDM1IDIuODY1IDguMTk4IDYuODQgOS41MjcuNS4wOTIuNjgzLS4yMTguNjgzLS40ODQgMC0uMjM5LS4wMS0uODctLjAxNC0xLjcwOC0yLjc4Mi42MDctMy4zNjktMS4zNDYtMy4zNjktMS4zNDYtLjQ1NC0xLjE2LTEuMTEtMS40NjktMS4xMS0xLjQ2OS0uOTA5LS42MjIuMDY4LS42MS4wNjgtLjYxIDEuMDAzLjA3MiAxLjUzIDEuMDM1IDEuNTMgMS4wMzUuODkzIDEuNTM0IDIuMzQyIDEuMDkyIDIuOTEyLjgzNC4wOS0uNjQ5LjM0OS0xLjA5MS42MzUtMS4zNDMtMi4yMi0uMjUzLTQuNTU1LTEuMTE0LTQuNTU1LTQuOTYgMC0xLjA5Ny4zOS0xLjk5MyAxLjAzLTIuNjk2LS4xMDQtLjI1My0uNDQ2LTEuMjc1LjA5Ny0yLjY1NiAwIDAgLjg0LS4yNyAyLjc1IDEuMDI5YTkuNTQgOS41NCAwIDAgMSAyLjUwNC0uMzM4IDkuNTYzIDkuNTYzIDAgMCAxIDIuNTA0LjMzOWMxLjkwOS0xLjI5OSAyLjc0Ny0xLjAyOSAyLjc0Ny0xLjAyOS41NDUgMS4zODMuMjAzIDIuNDAzLjEgMi42NTYuNjQyLjcwMyAxLjAyOCAxLjYgMS4wMjggMi42OTYgMCAzLjg1Ni0yLjMzNyA0LjcwNS00LjU2NSA0Ljk1My4zNTkuMzEuNjc5LjkyMy42NzkgMS44NTkgMCAxLjM0My0uMDEzIDIuNDI1LS4wMTMgMi43NTQgMCAuMjY4LjE4LjU4MS42ODguNDgyQTEwLjA0IDEwLjA0IDAgMCAwIDIwIDEwLjI0OEMyMCA0LjcwMyAxNS41MjMuMjA4IDkuOTk5LjIwOHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjB2MjBIMFYweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=";

/* babel-plugin-inline-import '../../../../assets/icons/icon-likedin-login.svg' */
var LinkedInIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmZmIi8+CiAgICA8cGF0aCBmaWxsPSIjMDA3QUI5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy42MTIgMTYuNzEydi0zLjkwNGMwLTIuMDkxLTEuMTE2LTMuMDY1LTIuNjA1LTMuMDY1LTEuMjAxIDAtMS43NC42NjEtMi4wNCAxLjEyNXYtLjk2NWgtMi4yNjNjLjAzLjY0IDAgNi44MSAwIDYuODFoMi4yNjNWMTIuOTFjMC0uMjAzLjAxNS0uNDA3LjA3NS0uNTUyLjE2My0uNDA3LjUzNi0uODI4IDEuMTYtLjgyOC44MiAwIDEuMTQ3LjYyNSAxLjE0NyAxLjU0djMuNjQzaDIuMjYzek04LjMyIDguOTc0Yy43ODkgMCAxLjI4LS41MjMgMS4yOC0xLjE3Ny0uMDE0LS42NjgtLjQ5MS0xLjE3Ni0xLjI2NS0xLjE3Ni0uNzc0IDAtMS4yOC41MDgtMS4yOCAxLjE3NiAwIC42NTQuNDkgMS4xNzcgMS4yNSAxLjE3N2guMDE1ek0xMiAyMkM2LjQ3NyAyMiAyIDE3LjUyMyAyIDEyUzYuNDc3IDIgMTIgMnMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHptLTIuNTQ5LTUuMjg4VjkuOTAzSDcuMTg4djYuODFoMi4yNjN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==";

/* babel-plugin-inline-import '../../../../assets/icons/icon-globe.svg' */
var WebSiteIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMwNjc1Q0UiIGQ9Ik0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyem02LjkzIDZoLTIuOTVhMTUuNjUgMTUuNjUgMCAwIDAtMS4zOC0zLjU2QTguMDMgOC4wMyAwIDAgMSAxOC45MiA4ek0xMiA0LjA0Yy44MyAxLjIgMS40OCAyLjUzIDEuOTEgMy45NmgtMy44MmMuNDMtMS40MyAxLjA4LTIuNzYgMS45MS0zLjk2ek00LjI2IDE0QzQuMSAxMy4zNiA0IDEyLjY5IDQgMTJzLjEtMS4zNi4yNi0yaDMuMzhjLS4wOC42Ni0uMTQgMS4zMi0uMTQgMiAwIC42OC4wNiAxLjM0LjE0IDJINC4yNnptLjgyIDJoMi45NWMuMzIgMS4yNS43OCAyLjQ1IDEuMzggMy41NkE3Ljk4NyA3Ljk4NyAwIDAgMSA1LjA4IDE2em0yLjk1LThINS4wOGE3Ljk4NyA3Ljk4NyAwIDAgMSA0LjMzLTMuNTZBMTUuNjUgMTUuNjUgMCAwIDAgOC4wMyA4ek0xMiAxOS45NmMtLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODJjLS40MyAxLjQzLTEuMDggMi43Ni0xLjkxIDMuOTZ6TTE0LjM0IDE0SDkuNjZjLS4wOS0uNjYtLjE2LTEuMzItLjE2LTIgMC0uNjguMDctMS4zNS4xNi0yaDQuNjhjLjA5LjY1LjE2IDEuMzIuMTYgMiAwIC42OC0uMDcgMS4zNC0uMTYgMnptLjI1IDUuNTZjLjYtMS4xMSAxLjA2LTIuMzEgMS4zOC0zLjU2aDIuOTVhOC4wMyA4LjAzIDAgMCAxLTQuMzMgMy41NnpNMTYuMzYgMTRjLjA4LS42Ni4xNC0xLjMyLjE0LTIgMC0uNjgtLjA2LTEuMzQtLjE0LTJoMy4zOGMuMTYuNjQuMjYgMS4zMS4yNiAycy0uMSAxLjM2LS4yNiAyaC0zLjM4eiIvPgo8L3N2Zz4K";

/* babel-plugin-inline-import '../../../../assets/icons/mdi_search.svg' */
var SearchIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDE2Ij4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0I2QjJCMiIgZD0iTTE1LjUgMTBoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA1LjUgNi41IDYuNSAwIDEgMCA5LjUgMTJjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxNWwtNC45OS01em0tNiAwQzcuMDEgMTAgNSA3Ljk5IDUgNS41UzcuMDEgMSA5LjUgMSAxNCAzLjAxIDE0IDUuNSAxMS45OSAxMCA5LjUgMTB6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImEiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djE1LjAxNkgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=";

var VHInputIcon = function VHInputIcon(props) {
  var checkIcon = function checkIcon() {
    switch (props.icon) {
      case 'github':
        return GitHubIcon;

      case 'world':
        return WebSiteIcon;

      case 'linkedin':
        return LinkedInIcon;

      case 'search':
        return SearchIcon;

      default:
        return WebSiteIcon;
    }
  };

  var Icon = checkIcon();
  return _react.default.createElement(S.Wrapper, {
    className: "vh-icon-input ".concat(props.className ? props.className : ''),
    loading: props.loading,
    error: props.error
  }, !props.loading && _react.default.createElement(_Img.default, {
    className: "vh-icon-with-input-icon",
    source: Icon,
    title: props.icon,
    sm: true
  }), _react.default.createElement(_Simple.default, {
    disabled: props.disabled,
    error: props.error,
    loading: props.loading,
    placeholder: props.placeholder,
    data: props.data,
    value: props.value,
    onEvent: props.onEvent,
    noBorder: !props.loading
  }));
};

VHInputIcon.defaultProps = {
  iconColor: "black-100",
  textColor: "black-100",
  textVariant: "platform1",
  onEvent: null,
  data: null,
  placeholder: "",
  value: "",
  icon: WebSiteIcon,
  className: ''
};
VHInputIcon.propTypes = {
  iconColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  textVariant: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onEvent: _propTypes.default.func.isRequired,
  data: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  icon: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHInputIcon;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvSWNvbi9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhJbnB1dEljb24iLCJwcm9wcyIsImNoZWNrSWNvbiIsImljb24iLCJHaXRIdWJJY29uIiwiV2ViU2l0ZUljb24iLCJMaW5rZWRJbkljb24iLCJTZWFyY2hJY29uIiwiSWNvbiIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJlcnJvciIsImRpc2FibGVkIiwicGxhY2Vob2xkZXIiLCJkYXRhIiwidmFsdWUiLCJvbkV2ZW50IiwiZGVmYXVsdFByb3BzIiwiaWNvbkNvbG9yIiwidGV4dENvbG9yIiwidGV4dFZhcmlhbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUMzQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFlBQVFELEtBQUssQ0FBQ0UsSUFBZDtBQUNFLFdBQUssUUFBTDtBQUNFLGVBQVFDLFVBQVI7O0FBQ0YsV0FBSyxPQUFMO0FBQ0UsZUFBUUMsV0FBUjs7QUFDRixXQUFLLFVBQUw7QUFDRSxlQUFRQyxZQUFSOztBQUNGLFdBQUssUUFBTDtBQUNFLGVBQVFDLFVBQVI7O0FBQ0Y7QUFDRSxlQUFPRixXQUFQO0FBVko7QUFZRCxHQWJEOztBQWVBLE1BQU1HLElBQUksR0FBR04sU0FBUyxFQUF0QjtBQUVBLFNBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUg7QUFDRSxJQUFBLFNBQVMsMEJBQW1CRCxLQUFLLENBQUNRLFNBQU4sR0FBa0JSLEtBQUssQ0FBQ1EsU0FBeEIsR0FBb0MsRUFBdkQsQ0FEWDtBQUVFLElBQUEsT0FBTyxFQUFFUixLQUFLLENBQUNTLE9BRmpCO0FBR0UsSUFBQSxLQUFLLEVBQUVULEtBQUssQ0FBQ1U7QUFIZixLQU1JLENBQUNWLEtBQUssQ0FBQ1MsT0FBUCxJQUNFLDZCQUFDLFlBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBQyx5QkFEWjtBQUVFLElBQUEsTUFBTSxFQUFFRixJQUZWO0FBR0UsSUFBQSxLQUFLLEVBQUVQLEtBQUssQ0FBQ0UsSUFIZjtBQUlFLElBQUEsRUFBRTtBQUpKLElBUE4sRUFlRSw2QkFBQyxlQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUVGLEtBQUssQ0FBQ1csUUFEbEI7QUFFRSxJQUFBLEtBQUssRUFBRVgsS0FBSyxDQUFDVSxLQUZmO0FBR0UsSUFBQSxPQUFPLEVBQUVWLEtBQUssQ0FBQ1MsT0FIakI7QUFJRSxJQUFBLFdBQVcsRUFBRVQsS0FBSyxDQUFDWSxXQUpyQjtBQUtFLElBQUEsSUFBSSxFQUFFWixLQUFLLENBQUNhLElBTGQ7QUFNRSxJQUFBLEtBQUssRUFBRWIsS0FBSyxDQUFDYyxLQU5mO0FBT0UsSUFBQSxPQUFPLEVBQUVkLEtBQUssQ0FBQ2UsT0FQakI7QUFRRSxJQUFBLFFBQVEsRUFBRSxDQUFDZixLQUFLLENBQUNTO0FBUm5CLElBZkYsQ0FERjtBQTJCRCxDQTdDRDs7QUErQ0FWLFdBQVcsQ0FBQ2lCLFlBQVosR0FBMkI7QUFDekJDLEVBQUFBLFNBQVMsRUFBRSxXQURjO0FBRXpCQyxFQUFBQSxTQUFTLEVBQUUsV0FGYztBQUd6QkMsRUFBQUEsV0FBVyxFQUFFLFdBSFk7QUFJekJKLEVBQUFBLE9BQU8sRUFBRSxJQUpnQjtBQUt6QkYsRUFBQUEsSUFBSSxFQUFFLElBTG1CO0FBTXpCRCxFQUFBQSxXQUFXLEVBQUUsRUFOWTtBQU96QkUsRUFBQUEsS0FBSyxFQUFFLEVBUGtCO0FBUXpCWixFQUFBQSxJQUFJLEVBQUVFLFdBUm1CO0FBU3pCSSxFQUFBQSxTQUFTLEVBQUU7QUFUYyxDQUEzQjtBQVlBVCxXQUFXLENBQUNxQixTQUFaLEdBQXdCO0FBQ3RCSCxFQUFBQSxTQUFTLEVBQUdJLG1CQUFVQyxNQURBO0FBRXRCSixFQUFBQSxTQUFTLEVBQUdHLG1CQUFVQyxNQUZBO0FBR3RCSCxFQUFBQSxXQUFXLEVBQUVFLG1CQUFVQyxNQUhEO0FBSXRCWCxFQUFBQSxRQUFRLEVBQUVVLG1CQUFVRSxJQUpFO0FBS3RCUixFQUFBQSxPQUFPLEVBQUVNLG1CQUFVRyxJQUFWLENBQWVDLFVBTEY7QUFNdEJaLEVBQUFBLElBQUksRUFBRVEsbUJBQVVDLE1BTk07QUFPdEJWLEVBQUFBLFdBQVcsRUFBRVMsbUJBQVVDLE1BUEQ7QUFRdEJSLEVBQUFBLEtBQUssRUFBRU8sbUJBQVVDLE1BUks7QUFTdEJwQixFQUFBQSxJQUFJLEVBQUVtQixtQkFBVUMsTUFUTTtBQVV0QmQsRUFBQUEsU0FBUyxFQUFFYSxtQkFBVUM7QUFWQyxDQUF4QjtlQWFldkIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCJcbmltcG9ydCBWSElucHV0IGZyb20gJy4uL1NpbXBsZSdcbmltcG9ydCBWSEltZyBmcm9tICcuLi8uLi9JbWcnXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbi1naXRodWIuc3ZnJ1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbi1saWtlZGluLWxvZ2luLnN2ZydcbmltcG9ydCBXZWJTaXRlSWNvbiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbi1nbG9iZS5zdmcnXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvbWRpX3NlYXJjaC5zdmcnXG5cbmNvbnN0IFZISW5wdXRJY29uID0gcHJvcHMgPT4ge1xuICBjb25zdCBjaGVja0ljb24gPSAoKSA9PiB7XG4gICAgc3dpdGNoIChwcm9wcy5pY29uKSB7XG4gICAgICBjYXNlICdnaXRodWInOlxuICAgICAgICByZXR1cm4gIEdpdEh1Ykljb25cbiAgICAgIGNhc2UgJ3dvcmxkJzpcbiAgICAgICAgcmV0dXJuICBXZWJTaXRlSWNvblxuICAgICAgY2FzZSAnbGlua2VkaW4nOlxuICAgICAgICByZXR1cm4gIExpbmtlZEluSWNvblxuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgcmV0dXJuICBTZWFyY2hJY29uXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gV2ViU2l0ZUljb247XG4gICAgfVxuICB9XG5cbiAgY29uc3QgSWNvbiA9IGNoZWNrSWNvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8Uy5XcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2B2aC1pY29uLWlucHV0ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgIGxvYWRpbmc9e3Byb3BzLmxvYWRpbmd9XG4gICAgICBlcnJvcj17cHJvcHMuZXJyb3J9XG4gICAgPlxuICAgICAge1xuICAgICAgICAhcHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgICAgPFZISW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aC1pY29uLXdpdGgtaW5wdXQtaWNvblwiXG4gICAgICAgICAgICBzb3VyY2U9e0ljb259XG4gICAgICAgICAgICB0aXRsZT17cHJvcHMuaWNvbn1cbiAgICAgICAgICAgIHNtXG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPFZISW5wdXRcbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICBlcnJvcj17cHJvcHMuZXJyb3J9XG4gICAgICAgIGxvYWRpbmc9e3Byb3BzLmxvYWRpbmd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICBub0JvcmRlcj17IXByb3BzLmxvYWRpbmd9IC8+XG4gICAgPC9TLldyYXBwZXI+XG4gIClcbn1cblxuVkhJbnB1dEljb24uZGVmYXVsdFByb3BzID0ge1xuICBpY29uQ29sb3I6IFwiYmxhY2stMTAwXCIsXG4gIHRleHRDb2xvcjogXCJibGFjay0xMDBcIixcbiAgdGV4dFZhcmlhbnQ6IFwicGxhdGZvcm0xXCIsXG4gIG9uRXZlbnQ6IG51bGwsXG4gIGRhdGE6IG51bGwsXG4gIHBsYWNlaG9sZGVyOiBcIlwiLFxuICB2YWx1ZTogXCJcIixcbiAgaWNvbjogV2ViU2l0ZUljb24sXG4gIGNsYXNzTmFtZTogJycsXG59XG5cblZISW5wdXRJY29uLnByb3BUeXBlcyA9IHtcbiAgaWNvbkNvbG9yOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dENvbG9yOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dFZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZISW5wdXRJY29uXG4iXX0=