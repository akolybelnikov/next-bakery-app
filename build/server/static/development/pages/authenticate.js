module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/authenticate.js":
/*!*******************************!*\
  !*** ./pages/authenticate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws_amplify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-amplify-react */ "aws-amplify-react");
/* harmony import */ var aws_amplify_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_amplify_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils */ "./styles/utils.js");
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withData */ "./withData.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 // import '../node_modules/@aws-amplify/ui/dist/style.css';

var Authenticate =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Authenticate, _React$PureComponent);

  function Authenticate() {
    _classCallCheck(this, Authenticate);

    return _possibleConstructorReturn(this, _getPrototypeOf(Authenticate).apply(this, arguments));
  }

  _createClass(Authenticate, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["Section"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(aws_amplify_react__WEBPACK_IMPORTED_MODULE_0__["Authenticator"], {
        theme: _styles_utils__WEBPACK_IMPORTED_MODULE_3__["AwsTheme"]
      }));
    }
  }]);

  return Authenticate;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withData__WEBPACK_IMPORTED_MODULE_4__["default"])(Authenticate));

/***/ }),

/***/ "./styles/utils.js":
/*!*************************!*\
  !*** ./styles/utils.js ***!
  \*************************/
/*! exports provided: theme, AwsTheme, maxMedia, minMedia, WideScreen, Desktop, Laptop, Tablet, HandsetLandscape, LargeHandset, Handset, SmallHandset, Default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsTheme", function() { return AwsTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxMedia", function() { return maxMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minMedia", function() { return minMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WideScreen", function() { return WideScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Desktop", function() { return Desktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Laptop", function() { return Laptop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tablet", function() { return Tablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandsetLandscape", function() { return HandsetLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeHandset", function() { return LargeHandset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handset", function() { return Handset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallHandset", function() { return SmallHandset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Default", function() { return Default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
var _AwsTheme;



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var theme = {
  primary: '#52082d',
  info: '#331507',
  success: '#eaccb2',
  primaryShadow: 'rgba(82, 8, 45, 0.3)',
  infoShadow: 'rgba(51, 21, 7, 0.5)',
  successShadow: 'rgba(234, 204, 178, 0.3)'
};
var AwsTheme = (_AwsTheme = {
  button: {
    backgroundColor: theme.primary
  },
  navButton: {
    backgroundColor: theme.primary
  },
  a: {
    color: theme.success
  },
  sectionBody: {
    color: theme.info
  },
  container: {
    color: theme.info
  },
  formContainer: {
    color: theme.info
  },
  formSection: {
    color: theme.info
  },
  formField: {
    color: theme.info
  },
  sectionHeader: {
    color: theme.info
  }
}, _defineProperty(_AwsTheme, "sectionBody", {
  color: theme.info
}), _defineProperty(_AwsTheme, "sectionFooter", {
  color: theme.info
}), _defineProperty(_AwsTheme, "sectionFooterPrimaryContent", {
  color: theme.info
}), _defineProperty(_AwsTheme, "sectionFooterSecondaryContent", {
  color: theme.info
}), _defineProperty(_AwsTheme, "input", {
  color: theme.info
}), _defineProperty(_AwsTheme, "hint", {
  color: theme.info
}), _AwsTheme);
var maxWidth = {
  smallhandset: 359,
  handset: 599,
  largehandset: 719,
  tablet: 1023,
  laptop: 1439,
  desktop: 1919
};
var minWidth = {
  handset: 360,
  largehandset: 600,
  tablet: 720,
  laptop: 960,
  desktop: 1440,
  widescreen: 1920
};
var maxMedia = Object.keys(maxWidth).reduce(function (acc, label) {
  var emSize = maxWidth[label] / 16;

  acc[label] = function () {
    var _css, _css2;

    return {
      styles: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3601533382",
        css: "@media screen and (max-width:".concat(emSize, "em){.__jsx-style-dynamic-selector{").concat((_css = css).resolve.apply(_css, arguments), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmV5XFxEb3dubG9hZHNcXG5leHQtYmFrZXJ5LWFwcFxcc3R5bGVzXFx1dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRnNDLEFBR3VDLDZCQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXEFuZHJleVxcRG93bmxvYWRzXFxuZXh0LWJha2VyeS1hcHBcXHN0eWxlc1xcdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcbmltcG9ydCBSZXNwb25zaXZlIGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG5cdHByaW1hcnk6ICcjNTIwODJkJyxcblx0aW5mbzogJyMzMzE1MDcnLFxuXHRzdWNjZXNzOiAnI2VhY2NiMicsXG5cdHByaW1hcnlTaGFkb3c6ICdyZ2JhKDgyLCA4LCA0NSwgMC4zKScsXG5cdGluZm9TaGFkb3c6ICdyZ2JhKDUxLCAyMSwgNywgMC41KScsXG5cdHN1Y2Nlc3NTaGFkb3c6ICdyZ2JhKDIzNCwgMjA0LCAxNzgsIDAuMyknLFxufTtcblxuZXhwb3J0IGNvbnN0IEF3c1RoZW1lID0ge1xuXHRidXR0b246IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByaW1hcnksXG5cdH0sXG5cdG5hdkJ1dHRvbjoge1xuXHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcblx0fSxcblx0YToge1xuXHRcdGNvbG9yOiB0aGVtZS5zdWNjZXNzLFxuXHR9LFxuXHRzZWN0aW9uQm9keToge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRjb250YWluZXI6IHtcblx0XHRjb2xvcjogdGhlbWUuaW5mbyxcblx0fSxcblx0Zm9ybUNvbnRhaW5lcjoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRmb3JtU2VjdGlvbjoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRmb3JtRmllbGQ6IHtcblx0XHRjb2xvcjogdGhlbWUuaW5mbyxcblx0fSxcblx0c2VjdGlvbkhlYWRlcjoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRzZWN0aW9uQm9keToge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRzZWN0aW9uRm9vdGVyOiB7XG5cdFx0Y29sb3I6IHRoZW1lLmluZm8sXG5cdH0sXG5cdHNlY3Rpb25Gb290ZXJQcmltYXJ5Q29udGVudDoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRzZWN0aW9uRm9vdGVyU2Vjb25kYXJ5Q29udGVudDoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRpbnB1dDoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRoaW50OiB7XG5cdFx0Y29sb3I6IHRoZW1lLmluZm8sXG5cdH0sXG59O1xuXG5jb25zdCBtYXhXaWR0aCA9IHtcblx0c21hbGxoYW5kc2V0OiAzNTksXG5cdGhhbmRzZXQ6IDU5OSxcblx0bGFyZ2VoYW5kc2V0OiA3MTksXG5cdHRhYmxldDogMTAyMyxcblx0bGFwdG9wOiAxNDM5LFxuXHRkZXNrdG9wOiAxOTE5LFxufTtcblxuY29uc3QgbWluV2lkdGggPSB7XG5cdGhhbmRzZXQ6IDM2MCxcblx0bGFyZ2VoYW5kc2V0OiA2MDAsXG5cdHRhYmxldDogNzIwLFxuXHRsYXB0b3A6IDk2MCxcblx0ZGVza3RvcDogMTQ0MCxcblx0d2lkZXNjcmVlbjogMTkyMCxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXhNZWRpYSA9IE9iamVjdC5rZXlzKG1heFdpZHRoKS5yZWR1Y2UoKGFjYywgbGFiZWwpID0+IHtcblx0Y29uc3QgZW1TaXplID0gbWF4V2lkdGhbbGFiZWxdIC8gMTY7XG5cdGFjY1tsYWJlbF0gPSAoLi4uYXJncykgPT4gY3NzLnJlc29sdmVgXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke2VtU2l6ZX1lbSkge1xuICAgICAgICAgICR7Y3NzLnJlc29sdmUoLi4uYXJncyl9O1xuICAgICAgfVxuICAgIGA7XG5cdHJldHVybiBhY2M7XG59LCB7fSk7XG5cbmV4cG9ydCBjb25zdCBtaW5NZWRpYSA9IE9iamVjdC5rZXlzKG1pbldpZHRoKS5yZWR1Y2UoKGFjYywgbGFiZWwpID0+IHtcblx0Y29uc3QgZW1TaXplID0gbWluV2lkdGhbbGFiZWxdIC8gMTY7XG5cdGFjY1tsYWJlbF0gPSAoLi4uYXJncykgPT4gY3NzLnJlc29sdmVgXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2VtU2l6ZX1lbSkge1xuICAgICAgICAgICR7Y3NzLnJlc29sdmUoLi4uYXJncyl9O1xuICAgICAgfVxuICAgIGA7XG5cdHJldHVybiBhY2M7XG59LCB7fSk7XG5cbmV4cG9ydCBjb25zdCBXaWRlU2NyZWVuID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17MTkyMH0gLz47XG5leHBvcnQgY29uc3QgRGVza3RvcCA9IHByb3BzID0+IChcblx0PFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17MTQ0MH0gbWF4V2lkdGg9ezE5MTl9IC8+XG4pO1xuZXhwb3J0IGNvbnN0IExhcHRvcCA9IHByb3BzID0+IChcblx0PFJlc3BvbnNpdmVcblx0XHR7Li4ucHJvcHN9XG5cdFx0bWluV2lkdGg9ezk2MH1cblx0XHRtYXhXaWR0aD17MTQzOX1cblx0XHRvcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiXG5cdC8+XG4pO1xuZXhwb3J0IGNvbnN0IFRhYmxldCA9IHByb3BzID0+IChcblx0PFJlc3BvbnNpdmVcblx0XHR7Li4ucHJvcHN9XG5cdFx0bWluV2lkdGg9ezcyMH1cblx0XHRtYXhXaWR0aD17MTAyM31cblx0XHRvcmllbnRhdGlvbj1cInBvcnRyYWl0XCJcblx0Lz5cbik7XG5leHBvcnQgY29uc3QgSGFuZHNldExhbmRzY2FwZSA9IHByb3BzID0+IChcblx0PFJlc3BvbnNpdmVcblx0XHR7Li4ucHJvcHN9XG5cdFx0bWluV2lkdGg9ezQ4MH1cblx0XHRtYXhXaWR0aD17OTU5fVxuXHRcdG9yaWVudGF0aW9uPVwibGFuZHNjYXBlXCJcblx0Lz5cbik7XG5leHBvcnQgY29uc3QgTGFyZ2VIYW5kc2V0ID0gcHJvcHMgPT4gKFxuXHQ8UmVzcG9uc2l2ZVxuXHRcdHsuLi5wcm9wc31cblx0XHRtaW5XaWR0aD17NjAwfVxuXHRcdG1heFdpZHRoPXs3MTl9XG5cdFx0b3JpZW50YXRpb249XCJwb3J0cmFpdFwiXG5cdC8+XG4pO1xuZXhwb3J0IGNvbnN0IEhhbmRzZXQgPSBwcm9wcyA9PiAoXG5cdDxSZXNwb25zaXZlIHsuLi5wcm9wc30gbWluV2lkdGg9ezM2MH0gbWF4V2lkdGg9ezU5OX0gLz5cbik7XG5leHBvcnQgY29uc3QgU21hbGxIYW5kc2V0ID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtYXhXaWR0aD17MzU5fSAvPjtcbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17NjAwfSAvPjtcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Andrey\\Downloads\\next-bakery-app\\styles\\utils.js */"),
        dynamic: [emSize, (_css2 = css).resolve.apply(_css2, arguments)]
      }),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3601533382", [emSize, (_css2 = css).resolve.apply(_css2, arguments)]]])
    };
  };

  return acc;
}, {});
var minMedia = Object.keys(minWidth).reduce(function (acc, label) {
  var emSize = minWidth[label] / 16;

  acc[label] = function () {
    var _css3, _css4;

    return {
      styles: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3499177448",
        css: "@media screen and (min-width:".concat(emSize, "em){.__jsx-style-dynamic-selector{").concat((_css3 = css).resolve.apply(_css3, arguments), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmV5XFxEb3dubG9hZHNcXG5leHQtYmFrZXJ5LWFwcFxcc3R5bGVzXFx1dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRnNDLEFBR3VDLDZCQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXEFuZHJleVxcRG93bmxvYWRzXFxuZXh0LWJha2VyeS1hcHBcXHN0eWxlc1xcdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcbmltcG9ydCBSZXNwb25zaXZlIGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG5cdHByaW1hcnk6ICcjNTIwODJkJyxcblx0aW5mbzogJyMzMzE1MDcnLFxuXHRzdWNjZXNzOiAnI2VhY2NiMicsXG5cdHByaW1hcnlTaGFkb3c6ICdyZ2JhKDgyLCA4LCA0NSwgMC4zKScsXG5cdGluZm9TaGFkb3c6ICdyZ2JhKDUxLCAyMSwgNywgMC41KScsXG5cdHN1Y2Nlc3NTaGFkb3c6ICdyZ2JhKDIzNCwgMjA0LCAxNzgsIDAuMyknLFxufTtcblxuZXhwb3J0IGNvbnN0IEF3c1RoZW1lID0ge1xuXHRidXR0b246IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByaW1hcnksXG5cdH0sXG5cdG5hdkJ1dHRvbjoge1xuXHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcblx0fSxcblx0YToge1xuXHRcdGNvbG9yOiB0aGVtZS5zdWNjZXNzLFxuXHR9LFxuXHRzZWN0aW9uQm9keToge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRjb250YWluZXI6IHtcblx0XHRjb2xvcjogdGhlbWUuaW5mbyxcblx0fSxcblx0Zm9ybUNvbnRhaW5lcjoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRmb3JtU2VjdGlvbjoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRmb3JtRmllbGQ6IHtcblx0XHRjb2xvcjogdGhlbWUuaW5mbyxcblx0fSxcblx0c2VjdGlvbkhlYWRlcjoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRzZWN0aW9uQm9keToge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRzZWN0aW9uRm9vdGVyOiB7XG5cdFx0Y29sb3I6IHRoZW1lLmluZm8sXG5cdH0sXG5cdHNlY3Rpb25Gb290ZXJQcmltYXJ5Q29udGVudDoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRzZWN0aW9uRm9vdGVyU2Vjb25kYXJ5Q29udGVudDoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRpbnB1dDoge1xuXHRcdGNvbG9yOiB0aGVtZS5pbmZvLFxuXHR9LFxuXHRoaW50OiB7XG5cdFx0Y29sb3I6IHRoZW1lLmluZm8sXG5cdH0sXG59O1xuXG5jb25zdCBtYXhXaWR0aCA9IHtcblx0c21hbGxoYW5kc2V0OiAzNTksXG5cdGhhbmRzZXQ6IDU5OSxcblx0bGFyZ2VoYW5kc2V0OiA3MTksXG5cdHRhYmxldDogMTAyMyxcblx0bGFwdG9wOiAxNDM5LFxuXHRkZXNrdG9wOiAxOTE5LFxufTtcblxuY29uc3QgbWluV2lkdGggPSB7XG5cdGhhbmRzZXQ6IDM2MCxcblx0bGFyZ2VoYW5kc2V0OiA2MDAsXG5cdHRhYmxldDogNzIwLFxuXHRsYXB0b3A6IDk2MCxcblx0ZGVza3RvcDogMTQ0MCxcblx0d2lkZXNjcmVlbjogMTkyMCxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXhNZWRpYSA9IE9iamVjdC5rZXlzKG1heFdpZHRoKS5yZWR1Y2UoKGFjYywgbGFiZWwpID0+IHtcblx0Y29uc3QgZW1TaXplID0gbWF4V2lkdGhbbGFiZWxdIC8gMTY7XG5cdGFjY1tsYWJlbF0gPSAoLi4uYXJncykgPT4gY3NzLnJlc29sdmVgXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke2VtU2l6ZX1lbSkge1xuICAgICAgICAgICR7Y3NzLnJlc29sdmUoLi4uYXJncyl9O1xuICAgICAgfVxuICAgIGA7XG5cdHJldHVybiBhY2M7XG59LCB7fSk7XG5cbmV4cG9ydCBjb25zdCBtaW5NZWRpYSA9IE9iamVjdC5rZXlzKG1pbldpZHRoKS5yZWR1Y2UoKGFjYywgbGFiZWwpID0+IHtcblx0Y29uc3QgZW1TaXplID0gbWluV2lkdGhbbGFiZWxdIC8gMTY7XG5cdGFjY1tsYWJlbF0gPSAoLi4uYXJncykgPT4gY3NzLnJlc29sdmVgXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2VtU2l6ZX1lbSkge1xuICAgICAgICAgICR7Y3NzLnJlc29sdmUoLi4uYXJncyl9O1xuICAgICAgfVxuICAgIGA7XG5cdHJldHVybiBhY2M7XG59LCB7fSk7XG5cbmV4cG9ydCBjb25zdCBXaWRlU2NyZWVuID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17MTkyMH0gLz47XG5leHBvcnQgY29uc3QgRGVza3RvcCA9IHByb3BzID0+IChcblx0PFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17MTQ0MH0gbWF4V2lkdGg9ezE5MTl9IC8+XG4pO1xuZXhwb3J0IGNvbnN0IExhcHRvcCA9IHByb3BzID0+IChcblx0PFJlc3BvbnNpdmVcblx0XHR7Li4ucHJvcHN9XG5cdFx0bWluV2lkdGg9ezk2MH1cblx0XHRtYXhXaWR0aD17MTQzOX1cblx0XHRvcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiXG5cdC8+XG4pO1xuZXhwb3J0IGNvbnN0IFRhYmxldCA9IHByb3BzID0+IChcblx0PFJlc3BvbnNpdmVcblx0XHR7Li4ucHJvcHN9XG5cdFx0bWluV2lkdGg9ezcyMH1cblx0XHRtYXhXaWR0aD17MTAyM31cblx0XHRvcmllbnRhdGlvbj1cInBvcnRyYWl0XCJcblx0Lz5cbik7XG5leHBvcnQgY29uc3QgSGFuZHNldExhbmRzY2FwZSA9IHByb3BzID0+IChcblx0PFJlc3BvbnNpdmVcblx0XHR7Li4ucHJvcHN9XG5cdFx0bWluV2lkdGg9ezQ4MH1cblx0XHRtYXhXaWR0aD17OTU5fVxuXHRcdG9yaWVudGF0aW9uPVwibGFuZHNjYXBlXCJcblx0Lz5cbik7XG5leHBvcnQgY29uc3QgTGFyZ2VIYW5kc2V0ID0gcHJvcHMgPT4gKFxuXHQ8UmVzcG9uc2l2ZVxuXHRcdHsuLi5wcm9wc31cblx0XHRtaW5XaWR0aD17NjAwfVxuXHRcdG1heFdpZHRoPXs3MTl9XG5cdFx0b3JpZW50YXRpb249XCJwb3J0cmFpdFwiXG5cdC8+XG4pO1xuZXhwb3J0IGNvbnN0IEhhbmRzZXQgPSBwcm9wcyA9PiAoXG5cdDxSZXNwb25zaXZlIHsuLi5wcm9wc30gbWluV2lkdGg9ezM2MH0gbWF4V2lkdGg9ezU5OX0gLz5cbik7XG5leHBvcnQgY29uc3QgU21hbGxIYW5kc2V0ID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtYXhXaWR0aD17MzU5fSAvPjtcbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17NjAwfSAvPjtcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Andrey\\Downloads\\next-bakery-app\\styles\\utils.js */"),
        dynamic: [emSize, (_css4 = css).resolve.apply(_css4, arguments)]
      }),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3499177448", [emSize, (_css4 = css).resolve.apply(_css4, arguments)]]])
    };
  };

  return acc;
}, {});
var WideScreen = function WideScreen(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    minWidth: 1920
  }));
};
var Desktop = function Desktop(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    minWidth: 1440,
    maxWidth: 1919
  }));
};
var Laptop = function Laptop(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    minWidth: 960,
    maxWidth: 1439,
    orientation: "landscape"
  }));
};
var Tablet = function Tablet(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    minWidth: 720,
    maxWidth: 1023,
    orientation: "portrait"
  }));
};
var HandsetLandscape = function HandsetLandscape(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    minWidth: 480,
    maxWidth: 959,
    orientation: "landscape"
  }));
};
var LargeHandset = function LargeHandset(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    minWidth: 600,
    maxWidth: 719,
    orientation: "portrait"
  }));
};
var Handset = function Handset(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    minWidth: 360,
    maxWidth: 599
  }));
};
var SmallHandset = function SmallHandset(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    maxWidth: 359
  }));
};
var Default = function Default(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    minWidth: 600
  }));
};

/***/ }),

/***/ "./withData.js":
/*!*********************!*\
  !*** ./withData.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo_appsync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo-appsync */ "next-apollo-appsync");
/* harmony import */ var next_apollo_appsync__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo_appsync__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "aws-amplify");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aws_appsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-appsync */ "aws-appsync");
/* harmony import */ var aws_appsync__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_appsync__WEBPACK_IMPORTED_MODULE_3__);





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

aws_amplify__WEBPACK_IMPORTED_MODULE_2___default.a.configure({
  Auth: {
    identityPoolId: publicRuntimeConfig.identityPoolId,
    region: publicRuntimeConfig.region,
    userPoolId: publicRuntimeConfig.userPoolId,
    userPoolWebClientId: publicRuntimeConfig.userPoolWebClientId,
    mandatorySignIn: false
  }
});
var config = {
  url: publicRuntimeConfig.graphqlEndpoint,
  region: publicRuntimeConfig.region,
  auth: {
    type: publicRuntimeConfig.authenticationType,
    credentials: function credentials() {
      return aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].currentCredentials();
    }
  },
  complexObjectsCredentials: function complexObjectsCredentials() {
    return aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].currentCredentials();
  },
  offlineConfig: {
    callback: function callback(err, succ) {
      if (err) {
        // eslint-disable-next-line no-unused-vars
        var mutation = err.mutation,
            variables = err.variables;
        console.warn("Error for ".concat(mutation), err);
      } else {
        // eslint-disable-next-line no-unused-vars
        var _mutation = succ.mutation,
            _variables = succ.variables;
        console.info("Success for ".concat(_mutation), succ);
      }
    }
  },
  cacheOptions: {
    dataIdFromObject: function dataIdFromObject(obj) {
      var id = Object(aws_appsync__WEBPACK_IMPORTED_MODULE_3__["defaultDataIdFromObject"])(obj);

      if (!id) {
        var typename = obj.__typename;

        switch (typename) {
          case 'UserConnection':
            return "".concat(typename, ":").concat(obj, ".id");

          case 'OfferConnection':
            return "".concat(typename, ":").concat(obj, ".id");

          case 'NewsConnection':
            return "".concat(typename, ":").concat(obj, ".id");

          default:
            return id;
        }
      }

      return id;
    },
    addTypename: true
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo_appsync__WEBPACK_IMPORTED_MODULE_0__["withAppSyncData"])(config));

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/authenticate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/authenticate.js */"./pages/authenticate.js");


/***/ }),

/***/ "aws-amplify":
/*!******************************!*\
  !*** external "aws-amplify" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "aws-amplify-react":
/*!************************************!*\
  !*** external "aws-amplify-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-amplify-react");

/***/ }),

/***/ "aws-appsync":
/*!******************************!*\
  !*** external "aws-appsync" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-appsync");

/***/ }),

/***/ "bloomer":
/*!**************************!*\
  !*** external "bloomer" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bloomer");

/***/ }),

/***/ "next-apollo-appsync":
/*!**************************************!*\
  !*** external "next-apollo-appsync" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-apollo-appsync");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=authenticate.js.map