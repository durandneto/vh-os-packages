"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../../Components/Cards/Base"));

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _Button = _interopRequireDefault(require("../../Components/Button"));

var _UserCompanyPositonExperience = _interopRequireDefault(require("../../Components/UserCompanyPositonExperience"));

var _ModalExperience = _interopRequireDefault(require("../../Components/ModalExperience"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHUserCompanyExperienceSection = function VHUserCompanyExperienceSection(props) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openModal = _React$useState2[0],
      setOpenModal = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      newExperience = _React$useState4[0],
      _setNewExperience = _React$useState4[1];

  var experience = props.experience.experiences ? props.experience.experiences : [];

  var _React$useState5 = _react.default.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentItem = _React$useState6[0],
      setCurrentItem = _React$useState6[1];

  return _react.default.createElement(_react.default.Fragment, null, openModal && _react.default.createElement(_ModalExperience.default, {
    openModal: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    modalExperience: props.modalExperience,
    currentItem: currentItem,
    controls: props.controls,
    onEvent: props.onEvent,
    newExperience: newExperience,
    countries: props.countries,
    companyList: props.companyList,
    industryList: props.industryList,
    positions: props.positions
  }), _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Experience ".concat(props.yearsOfExperience),
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, experience.map(function (userPosition) {
    return _react.default.createElement(_Grid.Row, {
      marginBottom: 10
    }, _react.default.createElement(_UserCompanyPositonExperience.default, {
      item: userPosition,
      companyList: props.companyList,
      industryList: props.industryList,
      onOpen: function onOpen() {
        setOpenModal(true);
      },
      onEvent: props.onEvent
    }));
  }), _react.default.createElement(_Grid.Row, {
    row: true
  }, _react.default.createElement(_Grid.Row, {
    paddingRight8: true,
    autoWidth: true
  }, _react.default.createElement(_Button.default, {
    nowrap: true,
    primary: true,
    onEvent: props.onEvent,
    data: "AddExperience",
    label: "Add Experience",
    closeModal: props.closeModal,
    onOpen: function onOpen() {
      setOpenModal(true);
    },
    setNewExperience: function setNewExperience() {
      _setNewExperience(true);
    }
  })), _react.default.createElement(_Grid.Row, {
    row: true
  }, _react.default.createElement(_Button.default, {
    outline: true,
    primary: true,
    onEvent: props.onEvent,
    data: "RequestProfileReview",
    label: "Request Profile Review"
  }))))));
};

VHUserCompanyExperienceSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHUserCompanyExperienceSection;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1NlY3Rpb25zL1VzZXJDb21wYW55RXhwZXJpZW5jZS9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhVc2VyQ29tcGFueUV4cGVyaWVuY2VTZWN0aW9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJ5ZWFyc09mRXhwZXJpZW5jZSIsInVzZXJFeHBlcmllbmNlIiwibWFwIiwidXNlclBvc2l0aW9uIiwib25FdmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJ0aXRsZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkYXRhIiwib25lT2ZUeXBlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxJQUFNQSw4QkFBOEIsR0FBRyxTQUFqQ0EsOEJBQWlDLENBQUFDLEtBQUssRUFBSTtBQUM5QyxTQUNFLDREQUNFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFlBQVksRUFBRTtBQUFuQixLQUNFLDZCQUFDLGFBQUQ7QUFDRSxJQUFBLFNBQVMsb0NBQTZCQSxLQUFLLENBQUNDLFNBQU4sR0FBa0JELEtBQUssQ0FBQ0MsU0FBeEIsR0FBb0MsRUFBakUsQ0FEWDtBQUVFLElBQUEsSUFBSSx1QkFBZ0JELEtBQUssQ0FBQ0UsaUJBQXRCLENBRk47QUFHRSxJQUFBLEtBQUssRUFBQyxVQUhSO0FBSUUsSUFBQSxPQUFPLEVBQUM7QUFKVixJQURGLENBREYsRUFTRSw2QkFBQyxTQUFELFFBQ0UsNkJBQUMsYUFBRDtBQUNFLElBQUEsU0FBUyxtQ0FBNEJGLEtBQUssQ0FBQ0MsU0FBTixHQUFrQkQsS0FBSyxDQUFDQyxTQUF4QixHQUFvQyxFQUFoRTtBQURYLEtBSUlELEtBQUssQ0FBQ0csY0FBTixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQUMsWUFBWSxFQUFJO0FBQ3ZDLFdBQ0UsNkJBQUMsU0FBRDtBQUFLLE1BQUEsWUFBWSxFQUFFO0FBQW5CLE9BQ0UsNkJBQUMscUNBQUQsRUFDTUEsWUFETixDQURGLENBREY7QUFPRCxHQVJELENBSkosRUFjRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxHQUFHO0FBQVIsS0FDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxhQUFhLE1BQWxCO0FBQW1CLElBQUEsU0FBUztBQUE1QixLQUNFLDZCQUFDLGVBQUQ7QUFDRSxJQUFBLE1BQU0sTUFEUjtBQUVFLElBQUEsT0FBTyxNQUZUO0FBR0UsSUFBQSxPQUFPLEVBQUVMLEtBQUssQ0FBQ00sT0FIakI7QUFJRSxJQUFBLElBQUksRUFBRSxlQUpSO0FBS0UsSUFBQSxLQUFLLEVBQUM7QUFMUixJQURGLENBREYsRUFVRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxHQUFHO0FBQVIsS0FDRSw2QkFBQyxlQUFEO0FBQ0UsSUFBQSxPQUFPLE1BRFQ7QUFFRSxJQUFBLE9BQU8sTUFGVDtBQUdFLElBQUEsT0FBTyxFQUFFTixLQUFLLENBQUNNLE9BSGpCO0FBSUUsSUFBQSxJQUFJLEVBQUUsc0JBSlI7QUFLRSxJQUFBLEtBQUssRUFBQztBQUxSLElBREYsQ0FWRixDQWRGLENBREYsQ0FURixDQURGO0FBaURELENBbEREOztBQW9EQVAsOEJBQThCLENBQUNRLFNBQS9CLEdBQTJDO0FBQ3ZDRCxFQUFBQSxPQUFPLEVBQUVFLG1CQUFVQyxJQURvQjtBQUV2Q0MsRUFBQUEsS0FBSyxFQUFFRixtQkFBVUcsTUFBVixDQUFpQkMsVUFGZTtBQUd2Q0MsRUFBQUEsSUFBSSxFQUFFTCxtQkFBVU0sU0FBVixDQUFvQixDQUFDTixtQkFBVUcsTUFBWCxFQUFtQkgsbUJBQVVPLE1BQTdCLENBQXBCLENBSGlDO0FBSXZDZCxFQUFBQSxTQUFTLEVBQUVPLG1CQUFVRztBQUprQixDQUEzQztlQU9lWiw4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBWSENhcmRCYXNlIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0NhcmRzL0Jhc2VcIjtcbmltcG9ydCBWSFRleHQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvVGV4dFwiO1xuaW1wb3J0IFZIQnV0dG9uIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IFZIVXNlckNvbXBhbnlQb3NpdGlvbkV4cGVyaWVuY2UgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvVXNlckNvbXBhbnlQb3NpdG9uRXhwZXJpZW5jZVwiO1xuXG5cbmNvbnN0IFZIVXNlckNvbXBhbnlFeHBlcmllbmNlU2VjdGlvbiA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdyBtYXJnaW5Cb3R0b209ezV9PlxuICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgdmgtc2tpbGxzLXNlY3Rpb24tdGl0bGUgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgIHRleHQ9e2BFeHBlcmllbmNlICR7cHJvcHMueWVhcnNPZkV4cGVyaWVuY2V9YH1cbiAgICAgICAgICBjb2xvcj1cImJsYWNrLTUwXCJcbiAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAvPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8VkhDYXJkQmFzZVxuICAgICAgICAgIGNsYXNzTmFtZT17YHZoLXNraWxscy1zZWN0aW9uLWNhcmQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvcHMudXNlckV4cGVyaWVuY2UubWFwKHVzZXJQb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b209ezEwfT5cbiAgICAgICAgICAgICAgICAgIDxWSFVzZXJDb21wYW55UG9zaXRpb25FeHBlcmllbmNlXG4gICAgICAgICAgICAgICAgICAgIHsuLi51c2VyUG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxSb3cgcm93PlxuICAgICAgICAgICAgPFJvdyBwYWRkaW5nUmlnaHQ4IGF1dG9XaWR0aD5cbiAgICAgICAgICAgICAgPFZIQnV0dG9uXG4gICAgICAgICAgICAgICAgbm93cmFwXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgZGF0YT17XCJBZGRFeHBlcmllbmNlXCJ9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJBZGQgRXhwZXJpZW5jZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3cgcm93PlxuICAgICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgZGF0YT17XCJSZXF1ZXN0UHJvZmlsZVJldmlld1wifVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVxdWVzdCBQcm9maWxlIFJldmlld1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9WSENhcmRCYXNlPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn1cblxuVkhVc2VyQ29tcGFueUV4cGVyaWVuY2VTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhVc2VyQ29tcGFueUV4cGVyaWVuY2VTZWN0aW9uO1xuIl19