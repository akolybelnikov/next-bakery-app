(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/SVG/BurgerIcon.js":
/*!**************************************!*\
  !*** ./components/SVG/BurgerIcon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var commonStyles = {
  strokeWidth: 20,
  strokeLinecap: "round",
  stroke: "#52082d",
  fill: "none",
  transition: "all 0.5s ease-in-out"
};

var BurgerIcon = function BurgerIcon(props) {
  var arrayMiddle = props.isActive ? "0px 220px" : "240px 240px";
  var offsetTopBottom = props.isActive ? "-650px" : 0;
  var offsetMiddle = props.isActive ? "-120px" : "0";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 800 600",
    width: props.width,
    height: props.height,
    onClick: props.onToggleMenu
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    style: _objectSpread({
      strokeDashoffset: offsetTopBottom,
      strokeDasharray: "240px 910px"
    }, commonStyles),
    d: "M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "burger-icon-middlebar",
    style: _objectSpread({
      strokeDasharray: arrayMiddle,
      strokeDashoffset: offsetMiddle
    }, commonStyles),
    d: "M300,320 L540,320"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "burger-icon-bottombar",
    style: _objectSpread({
      strokeDashoffset: offsetTopBottom,
      strokeDasharray: '240px 910px'
    }, commonStyles),
    d: "M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190",
    transform: "translate(480, 320) scale(1, -1) translate(-480, -318)"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BurgerIcon);

/***/ })

}]);
//# sourceMappingURL=1.js.map