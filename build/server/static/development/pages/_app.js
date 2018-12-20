module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\_app.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _graphql_queries_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/queries/user */ "./graphql/queries/user.js");
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/utils */ "./styles/utils.js");
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../withData */ "./withData.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var LogoSVG = function LogoSVG(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", null, "\u0412\u0441\u0435 \u0431\u0443\u043B\u043E\u0447\u043A\u0438 \u0442\u0443\u0442_\u043B\u043E\u0433\u043E\u0442\u0438\u043F"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
    fill: "#f0a11c",
    d: "M203.08 151.18c-2.23-3.4-4.4-6.42-6.27-9.62a59.9 59.9 0 0 1-7.46-20.25 73.49 73.49 0 0 1-1.1-16.27 60.81 60.81 0 0 1 3-16 48.26 48.26 0 0 1 17-23.84 51.91 51.91 0 0 1 24.09-10.13 61.66 61.66 0 0 1 19.63.43 28.32 28.32 0 0 1 9 3.06 7.5 7.5 0 0 0 7 .54 47.45 47.45 0 0 1 19.66-3.17 55.09 55.09 0 0 1 25.59 7 47.52 47.52 0 0 1 18.23 17.22 49.13 49.13 0 0 1 6 16.76c1.48 8.07.62 15.88-1.24 23.59a76.25 76.25 0 0 1-13.2 28.48 4.08 4.08 0 0 0-.33 1.16c1.2.38 2.35.77 3.51 1.11a9.15 9.15 0 0 1 6.87 8.93 9.31 9.31 0 0 1-3.85 8.56 8.73 8.73 0 0 1-6.69 1.78c-5.48-.82-10.91-2-16.33-3.15a5.73 5.73 0 0 0-4.51.62 62.77 62.77 0 0 1-19.9 7.51 87.06 87.06 0 0 1-31.12 1.12 89.88 89.88 0 0 1-12.59-2.65 83.67 83.67 0 0 1-12.18-5c-2.35-1.16-4.43-1.74-7-1-4.55 1.36-9.19 2.49-13.82 3.57a9.69 9.69 0 0 1-11.53-8.61c-.53-6.19 2.3-9.91 9.54-11.75zm15.24.85c3.52-.91 6.68-2.28 9.93-3.42a102.09 102.09 0 0 0 12-5.28c3.5-1.76 6.8-3.88 10.18-5.87a1.82 1.82 0 0 0 .33-.35l-1.21-1.4a145.94 145.94 0 0 1-21.73 11.82c-3.17 1.36-6.4 2.46-9.56 3.84a8.29 8.29 0 0 1-2.56.47 2.84 2.84 0 0 0 2.62.19zm90.69-12.72a4.7 4.7 0 0 0 1.37-.76 57.36 57.36 0 0 0 9.83-16.51 37.1 37.1 0 0 0 2.34-8.83 50.32 50.32 0 0 0 .28-13.21 29.08 29.08 0 0 0-7.37-16c-3.56-4-8.33-6.06-13.2-7.92a7.44 7.44 0 0 0-2.08 0c2.8 1.44 5.25 2.56 7.55 3.93a25.88 25.88 0 0 1 12.73 19.16 47 47 0 0 1-5.07 29c-2 3.8-4.2 7.48-6.32 11.21l-.24.46zm-107.25.43c-1.41-3.31-2.84-6.62-4.34-9.89a43.69 43.69 0 0 1-3.49-14.11 58.93 58.93 0 0 1 3.55-27.42 45.55 45.55 0 0 1 22.29-24.86 15.26 15.26 0 0 0 2.6-1.37 7.59 7.59 0 0 1 2.14-.8l-.15-.51c-.64.26-1.3.38-1.94.63-4 .54-7.33 2.93-10.57 5.11a46 46 0 0 0-12.46 13.22 47.32 47.32 0 0 0-7.32 19.88c-1 7.49-1.07 15.18 1.13 22.63a65 65 0 0 0 2.9 9c1.64 3.53 3 6.9 5.57 10.38 1 1.59.62 1.89 2.18 2zm44.83-64.47a9.92 9.92 0 0 0-1.23-.45 11 11 0 0 0-1.68-.24 35.43 35.43 0 0 0-16.92 2.85c-11.41 5-16.86 14.37-18.4 26.1a44.25 44.25 0 0 0 3.65 23.94 46.16 46.16 0 0 0 13.12 17.13 89.93 89.93 0 0 0 22.76-11.86c-10.51-19-11.95-37.93-1.3-57.47zm53.08 69.29c2.8-1.81 6.36-5.84 8.82-9.62a62.49 62.49 0 0 0 9.54-25.5 27.33 27.33 0 0 0-6.87-22.93c-4.37-4.92-10.06-7.8-16.47-9.52-4.38-1.17-8.67-1-13.59-1 1 2.06 1.93 3.61 2.56 5.28a54.26 54.26 0 0 1 3.68 23.58 49 49 0 0 1-7 22.11c-1.22 2-2.4 4-3.54 5.93 2.85 3.59 12.39 8.39 22.88 11.68zm-36.91-27.69c6.34-8.45 6-23.54.77-30.09-5.74 7.96-5.38 21.82-.77 30.1zm-13.91 39.1c11.66 2.24 20 2.25 26.2.17l-13.4-8.29zm-22.39 9.55c7.13 3.93 14.07 6.91 21.88 7.18a63.23 63.23 0 0 1-19.92-8.66zm59-106.37c-3.6-1.06-10.14.73-15.28 2.63-.53.19-.88.84-1.38 1.34 1.76.78 2 .88 3.21.23a36.75 36.75 0 0 1 13.42-4.19zM250.3 72.29s19.08 4.19 20.18 23.88c1.09 19.4-5 24.24-5 24.24s-.51 1.27-.09 1.84.71.71 1.69-.42 12.43-23.46.58-39.19c-8.57-11.4-17.36-10.35-17.36-10.35zm-1.16 5.45s-8.85 16.83-6 30.59 10.62 32.3 30.9 42.87 20.06 9.82 20.06 9.82-36.2-16.24-43.57-35.34-5.69-30.55-2.39-38.95 4.27-9.52 2.9-10.38c-1.03-.69-1.9 1.39-1.9 1.39z"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ellipse", {
    fill: "#7e3131",
    cx: "263.14",
    cy: "254.35",
    rx: "107.38",
    ry: "2.86"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
    fill: "#7e3131",
    d: "M62.48 208.12c5.14-5 8.11-10.61 8.11-14.93 0-7.7-5.54-13.11-18.79-13.11-14.53 0-24.46 7.16-24.46 14.73 0 2.43 1.08 4 2.91 4a3.77 3.77 0 0 0 1.55-.34c2.5-5 8.24-6.89 14.12-7.64-1.35 9.05-4.6 21-8 28.18-5.27.47-7.63 1.15-7.63 3.72 0 4.19 2.7 6.82 4.39 6.82s3-.95 5.88-3.24c6.69 4.39 10.88 5.68 15.61 5.68 9.8 0 14.53-5.2 14.53-12.37.03-2.98-1.52-7.98-8.22-11.5zm-8.78-17.38c4.59.81 6.08 2.91 6.08 5.88a20 20 0 0 1-3.24 9.66 27 27 0 0 0-3.24-.2 16.36 16.36 0 0 0-2.84.2c1.01-3.77 2.09-8.7 3.24-15.54zm4.12 33.24c-2.57 0-7.91-1.69-13.25-3.51a31 31 0 0 0 4.44-9.44c8.85 3.79 11.83 6.62 11.83 10.14a2.82 2.82 0 0 1-3.02 2.83zM120.26 212.85c-3.85 5.88-9.8 9.8-14.39 9.8-2.64 0-3.24-1.69-3.24-4.73 9.26-2.1 12.57-6.49 12.57-12.17 0-4.73-2.57-7-7.23-7-6.32 0-14.25 9.67-14.81 19.51-2.79 2.59-5.76 4.14-8.16 4.14-2.64 0-3.65-1.49-3.65-5.2 0-6.83 2.37-11.15 3.65-11.15.4 0 .88.47.88 1.42a18.89 18.89 0 0 1-.68 4.26 3.16 3.16 0 0 0 2.91 1.28c3.24 0 6.28-3.45 6.28-7.77 0-4.12-2.3-6.55-6.89-6.55-7.23 0-15.54 10.27-15.54 20.68 0 7.3 2.84 11.42 9.46 11.42 4.07 0 8.75-2.73 12.43-6 1.26 3.9 4.16 6 8.92 6 8.78 0 20.07-10.74 20.07-15.74a2.43 2.43 0 0 0-2.58-2.2zm-14-7c.81 0 1.35.81 1.35 2.23 0 2-.81 4.12-4.59 4.8.48-4.69 2.31-6.98 3.25-6.98zM163.1 199.68c-3 0-6.49 1.42-10.27 5.95.88-4.46 1.76-10.95 2.16-14.86 4.73.61 8.24 1.42 13 1.42 7.77 0 10.88-4 10.88-7.77a6.72 6.72 0 0 0-.81-3.18c-11 1.62-19.8-.95-30.54-.95-11.69 0-17.16 6.08-17.16 12.77 0 3.31 1.82 6.62 5.34 6.62a3.41 3.41 0 0 0 2.77-1.28 28.8 28.8 0 0 1-.47-4.26c0-3.92 1.76-4.6 4.26-4.6 1.55 0 4.06.13 5.61.27-1.62 9.26-3.18 16.69-5.68 25.95-1.69 6.28-2.7 9.6-4.86 9.6-1.28 0-2.7-.95-4.12-2.5a5.47 5.47 0 0 0-4.73 5.34c0 4.06 2.91 6.76 7.57 6.76 3.77 0 6.62-1.75 9.11-5.79 1 2.17 3.74 3.9 7.91 3.9 9.73 0 17.7-11.29 17.7-23.85.03-5.96-2.4-9.54-7.67-9.54zm-8.18 26.76c-2.08 0-4.76-2.37-7.05-2.82a108.58 108.58 0 0 0 3.74-11.88c2.91-2.23 4.39-2.84 6.08-2.84 2.1 0 3.18 1.69 3.18 5s-1.56 12.54-5.95 12.54zM345.48 213.19c-4.32 6.08-7.57 8.78-9.12 8.78-.54 0-.95-.2-.95-1.08 0-1.28 2.84-7.57 4.26-11.42a14.79 14.79 0 0 0 1.28-5.27c0-2.77-2.77-5.47-6.55-5.47a3.61 3.61 0 0 0-2.84 1.28 67.71 67.71 0 0 1-3.55 17.84c-1.35 1.42-3.51 3-4.66 3-.94 0-1.35-.67-1.35-1.76a25.45 25.45 0 0 1 1.08-5.54c3.45-5.61 5.2-9.66 5.2-11.83s-1.15-2.7-3.24-2.7c-4.73 0-11.22 7.57-11.22 11.76a8.67 8.67 0 0 0 .88 4.19c-.33.82-.63 1.62-.9 2.4-2.61 3.67-4.25 5-5.59 5-2 0-3.51-2.3-6.15-8.38a61.49 61.49 0 0 1 11.69-8.79 4.91 4.91 0 0 0 1-3 3.67 3.67 0 0 0-3.58-4c-3.18 0-7 3.45-16.08 15 1.55-3.72 2.91-8.78 2.91-11.42 0-2-.67-2.84-2.43-2.84-4.19 0-10.2 7.1-10.2 11.08a11.11 11.11 0 0 0 .68 4.19c-.38 1-.74 2-1.05 3-2.88 3.43-5.8 5.7-7.19 5.7-.88 0-1.15-.68-1.15-1.62 0-1.69 1.15-5 2.64-8.11 3.38-6.89 4.06-8.58 4.06-10.41 0-3.31-3.38-6.35-6.35-6.35-1.35 0-1.76.61-2.3 2.23-2.3 7.3-3 8.31-5.54 8 1.55-6.08-.95-8.45-3.72-8.45-3.58 0-5.27 3.45-5.27 6.15a7.11 7.11 0 0 0 2.91 5.74 37.91 37.91 0 0 1-4.18 6.65 2.58 2.58 0 0 0-.42 1.07 3.86 3.86 0 0 1-1.4.28 2 2 0 0 1-1.35-.47 25.16 25.16 0 0 0 2.09-9.6c0-3-1.35-6.69-4.12-6.69a2.93 2.93 0 0 0-2.37.95c-.07-2.23-2.23-3-4-3-6.81 0-13.85 9.4-14.53 20-1.76 2.09-3.1 3.14-4.12 3.14-.4 0-.74-.2-.74-.88a68.88 68.88 0 0 1 .95-7.1c.81-4.53 1.69-9.46 1.69-11.69 0-3-1.35-4.53-4.53-4.53-5.68 0-9.19 2.91-12.16 9.46-3.24 7.23-4.46 13.58-6.56 15.41a65.08 65.08 0 0 1 1.28-9.8c-.13-.95-1.35-1.55-2.57-1.55-3.2 0-6.15 4-6.9 8.47a37.72 37.72 0 0 1-4 3.29c.34-4.06 2.3-8.65 4.26-14a14.79 14.79 0 0 0 1.28-5.27c0-2.77-2.77-5.47-6.55-5.47a3.61 3.61 0 0 0-2.84 1.28 58 58 0 0 1-3.18 16.62c-1.35 1.42-3.24 2.84-4.8 2.84-.95 0-1.35-.68-1.35-1.76a13.77 13.77 0 0 1 .81-4.12c3.45-5.61 5.2-9.66 5.2-11.83s-1.15-2.7-3.25-2.7c-4.73 0-11.22 7.57-11.22 11.76a8.67 8.67 0 0 0 .88 4.19 17.21 17.21 0 0 0-1.22 6.56 5.55 5.55 0 0 0 5.95 5.68c2.64 0 5.2-1.62 7.43-4.53-.2.81-.07 2.43-.34 4.73-6.15 2.16-10.54 3.31-13.58 4.59-3.24 1.35-4.46 3.31-4.46 5.95 0 5.34 5.81 9.8 12.16 9.8 9 0 14.8-6 14.8-18.31a21.25 21.25 0 0 0 4.39-2.93 5.49 5.49 0 0 0 5.74 4.21c5.54 0 8.11-3.92 12.7-17.91 1-3.11 2.1-5.47 3.72-6.28-1.49 5.47-3.65 14.93-3.65 18.58 0 3.92 1.42 5.95 6.08 5.95 3.37 0 6.78-2.34 9.56-5.26a7.9 7.9 0 0 0 7.66 4.85c4.73 0 8.31-2.43 11.55-6.83a4.59 4.59 0 0 0 2.7.68c5.74 0 10.27-6.35 10.27-9.19a2.09 2.09 0 0 0-.19-.85c.43-.76.87-1.56 1.34-2.46a7.69 7.69 0 0 0 3.72.27c-2.16 5.2-4.8 9.73-4.8 13.58 0 3.65 1.82 5.68 6.42 5.68 3.15 0 7.83-3.08 11.7-6.68.63 3.37 2.7 5.73 6.14 5.73a3.86 3.86 0 0 0 2.83-1.11 61.78 61.78 0 0 1 1.38-11.8c1.89 9.66 3.79 14.12 8.38 14.12 2.93 0 6.31-2.25 9.24-5.14.23 3.17 1.39 4.94 4.89 4.94 3 0 7.16-2.84 10.41-9a19.14 19.14 0 0 0-.41 3.51c0 3.52 1.69 4.39 4.46 4.39s6.42-2.16 9.6-5c3.92-3.45 7.3-7.84 7.3-10.27-.01-1.22-1.36-2.1-2.78-2.1zM186.14 233.8c0 4.8-.67 7.91-2.23 7.91-3.11 0-6.76-2.43-6.76-4.32 0-1.62 3-2.84 9-5.14zm63.11-15.74c-1.22 3-2.84 4.59-4.46 4.59-1.22 0-2.43-.95-2.43-4.26 0-5.54 3.44-12.1 7.63-14.06a20.25 20.25 0 0 0-1.49 7.84 23.42 23.42 0 0 0 .75 5.89zM498.32 213.19c-4.66 6.62-9 10.14-10.2 10.14-.61 0-.95-.27-.95-1 0-1.69 2.7-7.57 3.92-10.54a18.91 18.91 0 0 0 1.82-7c0-2.63-1.49-5-4.59-5s-6.69 2.91-12.23 11.22a12.46 12.46 0 0 0 1.69-6.55 3.76 3.76 0 0 0-4-4c-3 0-6.35 2-11.29 10.48 1.62-3.58 2.09-5.95 2.09-7.64 0-2-.95-2.84-2.91-2.84-4.19 0-9.6 5-9.6 9a11.09 11.09 0 0 0 .68 4.19 33.94 33.94 0 0 0-1 3.35 38.5 38.5 0 0 1-7.07 6.45c.34-4.06 2.3-8.65 4.26-14a14.79 14.79 0 0 0 1.28-5.27c0-2.77-2.77-5.47-6.55-5.47a3.61 3.61 0 0 0-2.84 1.28 58 58 0 0 1-3.18 16.62c-1.35 1.42-3.24 2.84-4.8 2.84-.95 0-1.35-.68-1.35-1.76a13.77 13.77 0 0 1 .81-4.12c3.45-5.61 5.2-9.66 5.2-11.83s-1.15-2.7-3.25-2.7c-4.73 0-11.22 7.57-11.22 11.76a8.67 8.67 0 0 0 .88 4.19c-.1.26-.19.52-.27.77-4.29 5.49-7.77 7.74-10.06 7.74-.54 0-.81-.34-.81-1.49 0-4.87 9.73-22.5 9.73-30.88 0-5.61-2.91-7.84-7.23-7.84-3.92 0-7.16 1.42-12.84 10.14.88-9.19-2.91-11.82-7-11.82-4.26 0-7.1 2.57-12.1 10.67 1.35-6.89 1.15-12-6.35-12-8.31 0-21.15 11.82-21.15 21.49 0 5.88 4.93 9.39 10.81 9.39.61 0 1.49-.07 2.1-.13l-.47 2.16c-2.57 4.06-4.46 7.77-4.46 10.68 0 4.53 3.92 7.16 7.57 7.16a6 6 0 0 0 3.52-1l5.47-25.41c5.61-9.53 6.62-12 9.12-12 1.08 0 2 .74 2 3.72 0 2.36-.61 6.22-2.23 12.37-5 7.36-7.71 12.3-7.71 15.54 0 4.53 3 7.5 6.49 7.5 4.32 0 7.5-4.39 12.3-28.38 3.92-6.28 6.49-8.58 8-8.58.95 0 2 .61 2 2.37 0 2.63-2.84 8.65-4.32 12.57-3.45 9.06-4.93 11.55-4.93 15.95 0 3.85 1.62 6.15 6 6.15 5.79 0 11.82-3.93 16-8.11a5.46 5.46 0 0 0 5.51 3.45c2.64 0 5.2-1.62 7.43-4.53-.2.81-.07 2.43-.34 4.73-6.15 2.16-10.54 3.31-13.58 4.59-3.24 1.35-4.46 3.31-4.46 5.95 0 5.34 5.81 9.8 12.16 9.8 9 0 14.8-6 14.8-18.31a23.85 23.85 0 0 0 5.54-3.92l.91-.83c.74 3.22 3.2 5.76 6.39 5.76 1.55 0 2-.2 2.7-.88a94.54 94.54 0 0 1 1.85-13.5c2.64-3.65 4.26-4.66 4.87-4.66s.81.2.81.81a17.67 17.67 0 0 1-1.15 3.72c-1.22 3.24-2.3 7.23-2.3 9.8.07 4.06 2.64 5.61 6.42 5.61a3.24 3.24 0 0 0 2.7-1 95.47 95.47 0 0 1 1.78-13.57c2.64-3.65 5-5.07 5.61-5.07a.72.72 0 0 1 .81.81c0 1.49-4 9.53-4 14 0 3.72 1.35 5.47 5.34 5.47 6.22 0 18-12.23 18-16.49a2.48 2.48 0 0 0-2.58-2.27zm-127.91-8.24c-4.06-1.28-5.88-2.7-5.88-5.54 0-4.6 5.95-10.27 7.84-10.27.81 0 1.22.54 1.22 1.76-.01 1.75-1.16 7.09-3.18 14.05zm65.27 28.85c0 4.8-.67 7.91-2.23 7.91-3.11 0-6.76-2.43-6.76-4.32 0-1.62 3-2.84 9-5.14zM437.33 157.99l-103.32-7.12a20.63 20.63 0 0 1 2.62 14.06zM190.01 157.84a10.76 10.76 0 0 1 4.9-7.13l-105.97 7.28 101.6 7a14.08 14.08 0 0 1-.53-7.15zM251.54 19.42a5.94 5.94 0 0 0-4.28 2 6.21 6.21 0 0 0-1.61 4.66 6.35 6.35 0 0 0 2 4.54 6.13 6.13 0 0 0 8.73-.35 6.37 6.37 0 0 0 1.63-4.73 6.21 6.21 0 0 0-2-4.5 5.85 5.85 0 0 0-4.47-1.62zM318.15 35.41c-.38 1.52.5 3.13 2.57 3.64a4.2 4.2 0 0 0 3.81-.88 6.38 6.38 0 0 0 2.26-3.5l.16-.66-.89-.22c-4.72-1.17-7.35-.62-7.91 1.62zM342.9 35.02c-.66 1.87.26 3.6 2.37 4.35l2.84 1 2.2-6.19-2.95-1c-2.12-.8-3.79-.03-4.46 1.84zM182.37 34.2a5.08 5.08 0 0 0-3.13 6.77c1.1 3.22 3.87 4.53 6.59 3.6s4.1-3.61 3-6.8-3.82-4.49-6.46-3.57z"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
    fill: "#7e3131",
    d: "M260.62 0c-92.9 0-151.24 54-151.24 54l20.89 13 7.92 22.33s56.17-46.12 131.82-46.12 117.36 46.81 117.36 46.81l9.36-23.77 20.16-12.24S353.52 0 260.62 0zM156.28 55.61a6 6 0 0 1-4.36 1.78 6.09 6.09 0 0 1-6.19-6.19 6.17 6.17 0 0 1 6.19-6.19 6.25 6.25 0 0 1 6.19 6.19 6 6 0 0 1-1.83 4.41zm35.57-12.42a8.67 8.67 0 0 1-5.13 4.19c-6.08 2.07-9.79-2-11.72-7.63a16.89 16.89 0 0 1-1.13-7.38 9.17 9.17 0 0 1 3.14-5.55l3.17-2.92c1.35-1.21 1.6-1.67 1.34-2.45l-.27-.81 3.16-1.08.5 1.48a3.11 3.11 0 0 1 0 2.51 10.21 10.21 0 0 1-2.23 2.37L179.27 29a6.57 6.57 0 0 0-1.95 7.38 7 7 0 0 1 4.84-5.17 7.21 7.21 0 0 1 6 .36 8.2 8.2 0 0 1 4 5 8.16 8.16 0 0 1-.31 6.62zm20.75-18.85a1.18 1.18 0 0 0-.94 1l-2.86 18.69a6.23 6.23 0 0 1-4.7 5.45 6 6 0 0 1-4-.45l-.55-.31.81-2.74a3.59 3.59 0 0 0 2.85.64c1.35-.32 2.16-1.38 2.48-3.25l.35-2.09-9.21-12.54a1.13 1.13 0 0 0-1.24-.44l-.45.11-.67-2.87 2-.46a2.3 2.3 0 0 1 2.94 1.17l6.26 8.92 1.12 2h.07a18.5 18.5 0 0 1 .09-2.25l1.35-10.71c.12-1.49.69-2 2.11-2.36l2-.47.6 2.86zm21.75 11.84c-1.58.22-2.38-.35-2.6-1.93l-1.67-11.85a.68.68 0 0 0-.88-.66l-4.08.57.2 1.41c.13.88.21 1.73.26 2.62a21.92 21.92 0 0 1-.36 6.07c-.6 2.88-2.16 5.54-5.44 5.93l-.43-3c1.51-.25 2.5-1.89 2.78-4.19a26.34 26.34 0 0 0-.09-7l-.18-1.41-2.21.31-.41-2.92 11.5-1.62c1.58-.22 2.34.35 2.57 1.93l1.7 11.89a.68.68 0 0 0 .88.66l1.44-.2.41 2.92zm24.66-3.93a10.05 10.05 0 0 1-13.7.6 9 9 0 0 1-3.1-6.62 8.82 8.82 0 0 1 2.51-6.83 10.2 10.2 0 0 1 13.73-.6 8.82 8.82 0 0 1 3.1 6.58 9 9 0 0 1-2.54 6.87zm23.75 3l-3.44-.17.32-6.49.09-1.13a8.94 8.94 0 0 1-5.1 1.14c-3.72-.18-5.65-2.16-5.48-5.67l.13-2.59c0-.53-.24-.79-.78-.82l-1.28-.06.14-2.94 3.23.16c1.67.08 2.19.93 2.12 2.38l-.15 3.09c-.1 2.09.65 3.41 3.24 3.53a7 7 0 0 0 4.07-1.08l.37-7.45 3.44.17zm26.19 3.39l-3.34-.49c-1.58-.23-2.15-1-1.92-2.58l.79-5.41-9-1.32-1.12 7.66-3.41-.5 2.06-14.08a.68.68 0 0 0-.66-.88l-1.44-.21.43-2.91 3.37.49c1.58.23 2.15 1 1.92 2.58l-.74 5 9 1.32 1.06-7.27 3.4.5-2.06 14.08a.68.68 0 0 0 .66.89l1.41.21zm20.75 2l1.41.35-.71 2.86-3.17-.79c-1.41-.35-2-1.19-1.64-2.53l.29-1h-.07a6.24 6.24 0 0 1-6.48 2 6.5 6.5 0 0 1-3.79-2.41 4.82 4.82 0 0 1-.78-4.22q1.53-6.1 12.07-3.46l.76.19.06-.24c.73-2.93-.11-4.38-2.83-5.07a6.5 6.5 0 0 0-2-.17 1.09 1.09 0 0 0-1.19.8l-.25 1-3.17-.79.44-1.76a3.1 3.1 0 0 1 3.09-2.08 12.7 12.7 0 0 1 3.69.34c5.38 1.34 6.64 4.33 5.56 8.64l-1.85 7.41a.68.68 0 0 0 .52.92zm25.83-4l-2.11-.75-5 14.15-3.25-1.15 2.12-6.15-1.87-.67c-.9-.32-1.2-.24-2.21.49l-3.7 2.56a4.5 4.5 0 0 1-1.74.85 4.41 4.41 0 0 1-1.83-.35l-1.54-.55 1-2.78.53.19a1.91 1.91 0 0 0 1.81-.11l2.85-2a3.82 3.82 0 0 1 1.18-.56v-.07a4.91 4.91 0 0 1-2.05-6c1.1-3.08 4.18-4.32 7.52-3.13l9.23 3.29zm23.24 19a6 6 0 0 1-4.36 1.78 6.09 6.09 0 0 1-6.19-6.19 6.17 6.17 0 0 1 6.19-6.19 6.25 6.25 0 0 1 6.19 6.19 6 6 0 0 1-1.88 4.38zM494.45 267.4h5.16a29.46 29.46 0 0 1 8.32-8.36v-5.18a33.91 33.91 0 0 0-13.48 13.54zM31.83 116.11h-5.16a29.46 29.46 0 0 1-8.32 8.37v5.18a33.91 33.91 0 0 0 13.48-13.55zM18.35 253.86v5.18a29.46 29.46 0 0 1 8.32 8.36h5.16a33.91 33.91 0 0 0-13.48-13.54zM499.61 116.11h-5.16a33.91 33.91 0 0 0 13.48 13.54v-5.18a29.45 29.45 0 0 1-8.32-8.36zM490.46 281.18H35.82c-.06-.91-.16-1.8-.29-2.69h-4.52a29.29 29.29 0 0 1 .42 4.91v2.22h463.39v-2.22a29.29 29.29 0 0 1 .42-4.91h-4.5c-.12.89-.22 1.79-.28 2.69zM524.01 129.35a29.27 29.27 0 0 1-5-.44v4.5c.93.14 1.86.25 2.81.31V249.8c-.95.06-1.89.17-2.81.31v4.5a29.27 29.27 0 0 1 5-.44h2.22V129.35zM490.46 102.33c.06.91.16 1.8.29 2.69h4.5a29.28 29.28 0 0 1-.42-4.91v-2.22H341.2c0 1.33.05 2.81.06 4.44zM35.82 102.33h149.32c.07-1.49.17-3 .28-4.44h-154v2.22a29.28 29.28 0 0 1-.42 4.91h4.5c.16-.89.26-1.78.32-2.69zM.01 129.35v124.82h2.21a29.27 29.27 0 0 1 5 .44v-4.5c-.93-.14-1.86-.25-2.81-.31V133.74c.95-.06 1.89-.17 2.81-.31v-4.5a29.27 29.27 0 0 1-5 .44z"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
    fill: "#7e3131",
    d: "M500.38 108.35H341.16c-.09 1.67-.23 3.14-.4 4.44h159.62a10.89 10.89 0 0 1 10.88 10.88v136.18a10.89 10.89 0 0 1-10.88 10.89H25.9a10.89 10.89 0 0 1-10.89-10.89V123.67a10.89 10.89 0 0 1 10.89-10.93h159.25c-.07-1.4-.12-2.89-.13-4.44H25.9a15.34 15.34 0 0 0-15.32 15.32v136.23a15.34 15.34 0 0 0 15.32 15.32h474.48a15.34 15.34 0 0 0 15.32-15.32V123.67a15.34 15.34 0 0 0-15.32-15.32z"
  }));
};

LogoSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 526.28 285.62"
};


var BurgerIcon = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/SVG/BurgerIcon */ "./components/SVG/BurgerIcon.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/SVG/BurgerIcon */ "./components/SVG/BurgerIcon.js")];
    },
    modules: ['../components/SVG/BurgerIcon']
  }
});
var Direction = {
  Up: 'up',
  Down: 'down'
};

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollUpSubscription", new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollDownSubscription", new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggleMenu", function () {
      _this.setState({
        isMenuActive: !_this.state.isMenuActive
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCloseMenu", function () {
      if (_this.state.isMenuActive) _this.setState({
        isMenuActive: false
      });
    });

    _this.state = {
      isMenuActive: false,
      isScrolledUp: true
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["throttleTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function () {
        return window.pageYOffset;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            y1 = _ref2[0],
            y2 = _ref2[1];

        return y2 < y1 ? Direction.Up : Direction.Down;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["share"])());
      var scrollUp$ = scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (direction) {
        return direction === Direction.Up;
      }));
      var scrollDown$ = scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (direction) {
        return direction === Direction.Down;
      }));
      this.scrollUpSubscription = scrollUp$.subscribe(function () {
        return _this2.setState({
          isScrolledUp: true
        });
      });
      this.scrollDownSubscription = scrollDown$.subscribe(function () {
        return _this2.setState({
          isScrolledUp: false
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scrollUpSubscription.unsubscribe();
      this.scrollDownSubscription.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isAuthenticated = _this$props.isAuthenticated,
          username = _this$props.username;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("nav", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1443457614", [this.state.isScrolledUp ? 0 : -7.25]]]) + " " + "navbar is-fixed-top"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
        isHidden: "desktop"
      }, isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(User, {
        id: username
      }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Login, null)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
        className: "logo",
        isHidden: "desktop"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        prefetch: true,
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarLink"], {
        className: "is-arrowless"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(LogoSVG, {
        className: "logoSVG"
      })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
        className: "burgericon",
        isHidden: "desktop"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_utils__WEBPACK_IMPORTED_MODULE_9__["SmallHandset"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BurgerIcon, {
        height: 60,
        width: 60,
        isActive: this.state.isMenuActive,
        onToggleMenu: this.onToggleMenu
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_utils__WEBPACK_IMPORTED_MODULE_9__["Handset"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BurgerIcon, {
        height: 70,
        width: 70,
        isActive: this.state.isMenuActive,
        onToggleMenu: this.onToggleMenu
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_utils__WEBPACK_IMPORTED_MODULE_9__["Default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BurgerIcon, {
        height: 80,
        width: 80,
        isActive: this.state.isMenuActive,
        onToggleMenu: this.onToggleMenu
      })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarMenu"], {
        isActive: this.state.isMenuActive
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/products",
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarLink"], {
        onClick: this.onCloseMenu,
        className: "is-arrowless is-size-5-tablet"
      }, "\u0410\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/offers",
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarLink"], {
        onClick: this.onCloseMenu,
        className: "is-arrowless is-size-5-tablet"
      }, "\u0421\u043F\u0435\u0446\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
        isHidden: "touch"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarLink"], {
        className: "is-arrowless"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(LogoSVG, {
        className: "logoSVG"
      })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/contact",
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarLink"], {
        onClick: this.onCloseMenu,
        className: "is-arrowless is-size-5-tablet"
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
        isHidden: "touch"
      }, isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(User, {
        id: username
      }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Login, null))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1443457614",
        css: ".navbar{-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;max-width:1600px;margin:0 auto;background-color:rgba(255,255,255,0.5);top:".concat(this.state.isScrolledUp ? 0 : -7.25, "em !important;}.navbar-menu{-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.navbar-brand{-webkit-box-pack:space-around !important;-webkit-justify-content:space-around !important;-ms-flex-pack:space-around !important;justify-content:space-around !important;}.navbar-item{-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;}.burgericon{-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;cursor:pointer;min-width:85px;min-height:85px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.logo{-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;}.logoSVG{height:auto;}@media all and (max-width:359px){.logoSVG{width:90px;}}@media all and (min-width:360px) and (max-width:599px){.logoSVG{width:100px;}}@media all and (min-width:600px) and (max-width:719px){.logoSVG{width:140px;}}@media all and (min-width:720px){.logoSVG{width:160px;}}@media all and (max-width:825px){.navbar-item{-webkit-flex:0 0 28%;-ms-flex:0 0 28%;flex:0 0 28%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtvbHliZWxuaWtvdlxcd2luX3Byb2plY3RzXFxuZXh0LWJha2VyeS1hcHBcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpS00sQUFHd0MsQUFPSCxBQUdXLEFBR1YsQUFNQSxBQU9BLEFBS2xCLEFBSUEsQUFLQyxBQUtBLEFBS0EsQUFLQyxXQW5CZCxDQUpELEFBU0MsQUFLQSxBQUtBLHVDQUtBLGlCQTFDa0IsQUFNSCxBQU9RLElBMUJOLFdBb0JGLEdBTlEsR0FiVCxTQW9CRSxLQW5CMEIsV0FvQmpCLFNBZjFCLG1CQUorQyx5QkFPL0MsQUFpQlcsVUFDWCxRQWJXLEdBWFgsT0FZQSxnQkFPQSIsImZpbGUiOiJDOlxcVXNlcnNcXGFrb2x5YmVsbmlrb3ZcXHdpbl9wcm9qZWN0c1xcbmV4dC1iYWtlcnktYXBwXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uLCBOYXZiYXJCcmFuZCwgTmF2YmFySXRlbSwgTmF2YmFyTGluaywgTmF2YmFyTWVudSB9IGZyb20gJ2Jsb29tZXInO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgcGFpcndpc2UsIHNoYXJlLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgR0VUX1VTRVIgZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzL3VzZXInO1xuaW1wb3J0IExvZ29TVkcgZnJvbSAnLi4vc3RhdGljL2xvZ29zL2xvZ28uc3ZnJztcbmltcG9ydCB7IERlZmF1bHQsIEhhbmRzZXQsIFNtYWxsSGFuZHNldCB9IGZyb20gJy4uL3N0eWxlcy91dGlscyc7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vd2l0aERhdGEnO1xuXG5jb25zdCBCdXJnZXJJY29uID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvU1ZHL0J1cmdlckljb24nKSwge1xuXHRzc3I6IGZhbHNlLFxufSk7XG5cbmNvbnN0IERpcmVjdGlvbiA9IHtcblx0VXA6ICd1cCcsXG5cdERvd246ICdkb3duJyxcbn07XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzTWVudUFjdGl2ZTogZmFsc2UsXG5cdFx0XHRpc1Njcm9sbGVkVXA6IHRydWUsXG5cdFx0fTtcblx0fVxuXG5cdHNjcm9sbFVwU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXHRzY3JvbGxEb3duU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJykucGlwZShcblx0XHRcdHRocm90dGxlVGltZSgxMCksXG5cdFx0XHRtYXAoKCkgPT4gd2luZG93LnBhZ2VZT2Zmc2V0KSxcblx0XHRcdHBhaXJ3aXNlKCksXG5cdFx0XHRtYXAoKFt5MSwgeTJdKSA9PiAoeTIgPCB5MSA/IERpcmVjdGlvbi5VcCA6IERpcmVjdGlvbi5Eb3duKSksXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0c2hhcmUoKSxcblx0XHQpO1xuXHRcdGNvbnN0IHNjcm9sbFVwJCA9IHNjcm9sbCQucGlwZShcblx0XHRcdGZpbHRlcihkaXJlY3Rpb24gPT4gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVXApLFxuXHRcdCk7XG5cblx0XHRjb25zdCBzY3JvbGxEb3duJCA9IHNjcm9sbCQucGlwZShcblx0XHRcdGZpbHRlcihkaXJlY3Rpb24gPT4gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uRG93biksXG5cdFx0KTtcblxuXHRcdHRoaXMuc2Nyb2xsVXBTdWJzY3JpcHRpb24gPSBzY3JvbGxVcCQuc3Vic2NyaWJlKCgpID0+XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNTY3JvbGxlZFVwOiB0cnVlIH0pLFxuXHRcdCk7XG5cdFx0dGhpcy5zY3JvbGxEb3duU3Vic2NyaXB0aW9uID0gc2Nyb2xsRG93biQuc3Vic2NyaWJlKCgpID0+XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNTY3JvbGxlZFVwOiBmYWxzZSB9KSxcblx0XHQpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5zY3JvbGxVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdHRoaXMuc2Nyb2xsRG93blN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0b25Ub2dnbGVNZW51ID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aXNNZW51QWN0aXZlOiAhdGhpcy5zdGF0ZS5pc01lbnVBY3RpdmUsXG5cdFx0fSk7XG5cdH07XG5cblx0b25DbG9zZU1lbnUgPSAoKSA9PiB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuaXNNZW51QWN0aXZlKSB0aGlzLnNldFN0YXRlKHsgaXNNZW51QWN0aXZlOiBmYWxzZSB9KTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIHVzZXJuYW1lIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBpcy1maXhlZC10b3BcIj5cblx0XHRcdFx0PE5hdmJhckJyYW5kPlxuXHRcdFx0XHRcdDxOYXZiYXJJdGVtIGlzSGlkZGVuPVwiZGVza3RvcFwiPlxuXHRcdFx0XHRcdFx0e2lzQXV0aGVudGljYXRlZCA/IDxVc2VyIGlkPXt1c2VybmFtZX0gLz4gOiA8TG9naW4gLz59XG5cdFx0XHRcdFx0PC9OYXZiYXJJdGVtPlxuXG5cdFx0XHRcdFx0PE5hdmJhckl0ZW0gY2xhc3NOYW1lPVwibG9nb1wiIGlzSGlkZGVuPVwiZGVza3RvcFwiPlxuXHRcdFx0XHRcdFx0PExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0PE5hdmJhckxpbmsgY2xhc3NOYW1lPVwiaXMtYXJyb3dsZXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PExvZ29TVkcgY2xhc3NOYW1lPVwibG9nb1NWR1wiIC8+XG5cdFx0XHRcdFx0XHRcdDwvTmF2YmFyTGluaz5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L05hdmJhckl0ZW0+XG5cblx0XHRcdFx0XHQ8TmF2YmFySXRlbSBjbGFzc05hbWU9XCJidXJnZXJpY29uXCIgaXNIaWRkZW49XCJkZXNrdG9wXCI+XG5cdFx0XHRcdFx0XHQ8U21hbGxIYW5kc2V0PlxuXHRcdFx0XHRcdFx0XHQ8QnVyZ2VySWNvblxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17NjB9XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezYwfVxuXHRcdFx0XHRcdFx0XHRcdGlzQWN0aXZlPXt0aGlzLnN0YXRlLmlzTWVudUFjdGl2ZX1cblx0XHRcdFx0XHRcdFx0XHRvblRvZ2dsZU1lbnU9e3RoaXMub25Ub2dnbGVNZW51fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9TbWFsbEhhbmRzZXQ+XG5cdFx0XHRcdFx0XHQ8SGFuZHNldD5cblx0XHRcdFx0XHRcdFx0PEJ1cmdlckljb25cblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezcwfVxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXs3MH1cblx0XHRcdFx0XHRcdFx0XHRpc0FjdGl2ZT17dGhpcy5zdGF0ZS5pc01lbnVBY3RpdmV9XG5cdFx0XHRcdFx0XHRcdFx0b25Ub2dnbGVNZW51PXt0aGlzLm9uVG9nZ2xlTWVudX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvSGFuZHNldD5cblx0XHRcdFx0XHRcdDxEZWZhdWx0PlxuXHRcdFx0XHRcdFx0XHQ8QnVyZ2VySWNvblxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17ODB9XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezgwfVxuXHRcdFx0XHRcdFx0XHRcdGlzQWN0aXZlPXt0aGlzLnN0YXRlLmlzTWVudUFjdGl2ZX1cblx0XHRcdFx0XHRcdFx0XHRvblRvZ2dsZU1lbnU9e3RoaXMub25Ub2dnbGVNZW51fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9EZWZhdWx0PlxuXHRcdFx0XHRcdDwvTmF2YmFySXRlbT5cblx0XHRcdFx0PC9OYXZiYXJCcmFuZD5cblx0XHRcdFx0PE5hdmJhck1lbnUgaXNBY3RpdmU9e3RoaXMuc3RhdGUuaXNNZW51QWN0aXZlfT5cblx0XHRcdFx0XHQ8TmF2YmFySXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIiBwcmVmZXRjaD5cblx0XHRcdFx0XHRcdFx0PE5hdmJhckxpbmtcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uQ2xvc2VNZW51fVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlzLWFycm93bGVzcyBpcy1zaXplLTUtdGFibGV0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdNCQ0YHRgdC+0YDRgtC40LzQtdC90YJcblx0XHRcdFx0XHRcdFx0PC9OYXZiYXJMaW5rPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvTmF2YmFySXRlbT5cblx0XHRcdFx0XHQ8TmF2YmFySXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvb2ZmZXJzXCIgcHJlZmV0Y2g+XG5cdFx0XHRcdFx0XHRcdDxOYXZiYXJMaW5rXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbkNsb3NlTWVudX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpcy1hcnJvd2xlc3MgaXMtc2l6ZS01LXRhYmxldFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHTQodC/0LXRhtC/0YDQtdC00LvQvtC20LXQvdC40Y9cblx0XHRcdFx0XHRcdFx0PC9OYXZiYXJMaW5rPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvTmF2YmFySXRlbT5cblx0XHRcdFx0XHQ8TmF2YmFySXRlbSBpc0hpZGRlbj1cInRvdWNoXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiIHByZWZldGNoPlxuXHRcdFx0XHRcdFx0XHQ8TmF2YmFyTGluayBjbGFzc05hbWU9XCJpcy1hcnJvd2xlc3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TG9nb1NWRyBjbGFzc05hbWU9XCJsb2dvU1ZHXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9OYXZiYXJMaW5rPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvTmF2YmFySXRlbT5cblx0XHRcdFx0XHQ8TmF2YmFySXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHByZWZldGNoPlxuXHRcdFx0XHRcdFx0XHQ8TmF2YmFyTGlua1xuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub25DbG9zZU1lbnV9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaXMtYXJyb3dsZXNzIGlzLXNpemUtNS10YWJsZXRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx00JrQvtC90YLQsNC60YJcblx0XHRcdFx0XHRcdFx0PC9OYXZiYXJMaW5rPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvTmF2YmFySXRlbT5cblx0XHRcdFx0XHQ8TmF2YmFySXRlbSBpc0hpZGRlbj1cInRvdWNoXCI+XG5cdFx0XHRcdFx0XHR7aXNBdXRoZW50aWNhdGVkID8gPFVzZXIgaWQ9e3VzZXJuYW1lfSAvPiA6IDxMb2dpbiAvPn1cblx0XHRcdFx0XHQ8L05hdmJhckl0ZW0+XG5cdFx0XHRcdDwvTmF2YmFyTWVudT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdC5uYXZiYXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxNjAwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdFx0XHRcdFx0XHRcdHRvcDogJHt0aGlzLnN0YXRlLmlzU2Nyb2xsZWRVcFxuXHRcdFx0XHRcdFx0XHRcdD8gMFxuXHRcdFx0XHRcdFx0XHRcdDogLTcuMjV9ZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5uYXZiYXItbWVudSB7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm5hdmJhci1icmFuZCB7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubmF2YmFyLWl0ZW0ge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYnVyZ2VyaWNvbiB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDg1cHg7XG5cdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDg1cHg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubG9nbyB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubG9nb1NWRyB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG5cdFx0XHRcdFx0XHRcdC5sb2dvU1ZHIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogOTBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuXHRcdFx0XHRcdFx0XHQubG9nb1NWRyB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDcxOXB4KSB7XG5cdFx0XHRcdFx0XHRcdC5sb2dvU1ZHIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTQwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5sb2dvU1ZHIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTYwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XG5cdFx0XHRcdFx0XHRcdC5uYXZiYXItaXRlbSB7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleDogMCAwIDI4JTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L25hdj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IFVzZXIgPSBpZCA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFF1ZXJ5XG5cdFx0XHRxdWVyeT17R0VUX1VTRVJ9XG5cdFx0XHR2YXJpYWJsZXM9e2lkfVxuXHRcdFx0ZmV0Y2hQb2xpY3k9XCJjYWNoZS1hbmQtbmV0d29ya1wiXG5cdFx0XHRlcnJvclBvbGljeT1cImFsbFwiXG5cdFx0PlxuXHRcdFx0eyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcblx0XHRcdFx0aWYgKGxvYWRpbmcpXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxJY29uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZhcyBmYS1zcGlubmVyIGZhLXB1bHNlXCJcblx0XHRcdFx0XHRcdFx0aXNTaXplPVwibGFyZ2VcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm4gPExvZ2luIC8+O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmdldFVzZXIpIHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi91c2VyXCIgcHJlZmV0Y2g+XG5cdFx0XHRcdFx0XHRcdHtkYXRhLmdldFVzZXIuZmlyc3RuYW1lID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImlzLWNhcGl0YWxpemVkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHTQl9C00YDQsNCy0YHRgtCy0YPQudGC0LUsIHtkYXRhLmdldFVzZXIuZmlzcnRuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8YT57ZGF0YS5nZXRVc2VyLmVtYWlsfTwvYT5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiA8TG9naW4gLz47XG5cdFx0XHRcdH1cblx0XHRcdH19XG5cdFx0PC9RdWVyeT5cblx0KTtcbn07XG5cbmNvbnN0IExvZ2luID0gKCkgPT4gKFxuXHQ8TGluayBocmVmPVwiL2F1dGhlbnRpY2F0ZVwiIHByZWZldGNoPlxuXHRcdDxOYXZiYXJMaW5rIGNsYXNzTmFtZT1cImlzLWFycm93bGVzcyB1c2VybG9naW4gaGFzLXRleHQtcHJpbWFyeSBpcy1zaXplLTctbW9iaWxlIGlzLXNpemUtNS10YWJsZXRcIj5cblx0XHRcdNCS0YXQvtC0INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuXHRcdDwvTmF2YmFyTGluaz5cblx0PC9MaW5rPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\akolybelnikov\\win_projects\\next-bakery-app\\components\\Header.js */"),
        dynamic: [this.state.isScrolledUp ? 0 : -7.25]
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var User = function User(id) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: _graphql_queries_user__WEBPACK_IMPORTED_MODULE_8__["default"],
    variables: id,
    fetchPolicy: "cache-and-network",
    errorPolicy: "all"
  }, function (_ref3) {
    var loading = _ref3.loading,
        error = _ref3.error,
        data = _ref3.data;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      className: "fas fa-spinner fa-pulse",
      isSize: "large"
    });

    if (error) {
      console.error(error);
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Login, null);
    }

    if (data.getUser) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/user",
        prefetch: true
      }, data.getUser.firstname ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        className: "is-capitalized"
      }, "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ", data.getUser.fisrtname) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", null, data.getUser.email));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Login, null);
    }
  });
};

var Login = function Login() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/authenticate",
    prefetch: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarLink"], {
    className: "is-arrowless userlogin has-text-primary is-size-7-mobile is-size-5-tablet"
  }, "\u0412\u0445\u043E\u0434 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withData__WEBPACK_IMPORTED_MODULE_10__["default"])(Header));

/***/ }),

/***/ "./graphql/queries/user.js":
/*!*********************************!*\
  !*** ./graphql/queries/user.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

var GET_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\n    query ($id: ID!) {\n        getUser(id: $id) {\n            status\n            email\n            id\n            avatar\n            firstname\n            lastname\n            dob\n            telephone\n            votes\n            createdAt\n        }\n    }\n  ");
/* harmony default export */ __webpack_exports__["default"] = (GET_USER);

/***/ }),

/***/ "./lib/awsAuth.js":
/*!************************!*\
  !*** ./lib/awsAuth.js ***!
  \************************/
/*! exports provided: currentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUser", function() { return currentUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "aws-amplify");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

function currentUser() {
  return _currentUser.apply(this, arguments);
}

function _currentUser() {
  _currentUser = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var info;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].currentUserInfo();

          case 3:
            info = _context.sent;

            if (!(info && info.attributes.sub !== publicRuntimeConfig.defaultUsername)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", info);

          case 6:
            return _context.abrupt("return", null);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));
  return _currentUser.apply(this, arguments);
}

/***/ }),

/***/ "./lib/fonts.js":
/*!**********************!*\
  !*** ./lib/fonts.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "fontfaceobserver");

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,900';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  var raleway = new FontFaceObserver('Raleway');
  raleway.load().then(function () {
    document.documentElement.classList.add('raleway');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _lib_awsAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/awsAuth */ "./lib/awsAuth.js");
/* harmony import */ var _lib_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/fonts */ "./lib/fonts.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_8__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      username: null,
      isAuthenticated: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setCurrentUser", function (username, authenticated) {
      _this.setState({
        username: username,
        isAuthenticated: authenticated
      });
    });

    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var authUser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_lib_awsAuth__WEBPACK_IMPORTED_MODULE_6__["currentUser"])();

              case 2:
                authUser = _context.sent;

                if (authUser) {
                  this.setCurrentUser(authUser.username, true);
                }

                _context.next = 6;
                return Object(_lib_fonts__WEBPACK_IMPORTED_MODULE_7__["default"])();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
        className: "jsx-1522617548"
      }, "\u0412\u0441\u0435 \u0411\u0443\u043B\u043E\u0447\u043A\u0438 \u0422\u0443\u0442")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "jsx-1522617548" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, pageProps, {
        username: this.state.username,
        isAuthenticated: this.state.isAuthenticated
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, _extends({}, pageProps, {
        className: "jsx-1522617548" + " " + (pageProps.className != null && pageProps.className || "")
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1522617548",
        css: "@font-face{font-family:'Raleway';font-display:auto;}.custom_body{color:#331507;}@media all and (min-width:600px){html{padding-top:4.25rem;}}@media all and (max-width:599px){html{padding-top:2.25rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtvbHliZWxuaWtvdlxcd2luX3Byb2plY3RzXFxuZXh0LWJha2VyeS1hcHBcXHBhZ2VzXFxfYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVETSxBQUdzQixBQUlPLEFBS0EsQUFJQyxjQVp2QixNQUlDLEFBS0EsRUFJa0Isa0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWtvbHliZWxuaWtvdlxcd2luX3Byb2plY3RzXFxuZXh0LWJha2VyeS1hcHBcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgY3VycmVudFVzZXIgfSBmcm9tICcuLi9saWIvYXdzQXV0aCc7XG5pbXBvcnQgRm9udHMgZnJvbSAnLi4vbGliL2ZvbnRzJztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcblx0XHRsZXQgcGFnZVByb3BzID0ge307XG5cblx0XHRpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuXHRcdFx0cGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuXHR9XG5cblx0c3RhdGUgPSB7XG5cdFx0dXNlcm5hbWU6IG51bGwsXG5cdFx0aXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcblx0fTtcblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCBhdXRoVXNlciA9IGF3YWl0IGN1cnJlbnRVc2VyKCk7XG5cdFx0aWYgKGF1dGhVc2VyKSB7XG5cdFx0XHR0aGlzLnNldEN1cnJlbnRVc2VyKGF1dGhVc2VyLnVzZXJuYW1lLCB0cnVlKTtcblx0XHR9XG5cdFx0YXdhaXQgRm9udHMoKTtcblx0fVxuXG5cdHNldEN1cnJlbnRVc2VyID0gKHVzZXJuYW1lLCBhdXRoZW50aWNhdGVkKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR1c2VybmFtZTogdXNlcm5hbWUsXG5cdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IGF1dGhlbnRpY2F0ZWQsXG5cdFx0fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT7QktGB0LUg0JHRg9C70L7Rh9C60Lgg0KLRg9GCPC90aXRsZT5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxIZWFkZXJcblx0XHRcdFx0XHRcdHsuLi5wYWdlUHJvcHN9XG5cdFx0XHRcdFx0XHR1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cblx0XHRcdFx0XHRcdGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmN1c3RvbV9ib2R5IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMzMzE1MDc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuXHRcdFx0XHRcdFx0XHRodG1sIHtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNC4yNXJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcblx0XHRcdFx0XHRcdFx0aHRtbCB7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDIuMjVyZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBmb250LWZhY2Uge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ1JhbGV3YXknO1xuXHRcdFx0XHRcdFx0XHRmb250LWRpc3BsYXk6IGF1dG87XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXX0= */\n/*@ sourceURL=C:\\Users\\akolybelnikov\\win_projects\\next-bakery-app\\pages\\_app.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context2.sent;

              case 6:
                return _context2.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/utils.js":
/*!*************************!*\
  !*** ./styles/utils.js ***!
  \*************************/
/*! exports provided: theme, maxMedia, minMedia, WideScreen, Desktop, Laptop, Tablet, HandsetLandscape, LargeHandset, Handset, SmallHandset, Default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
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


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var theme = {
  primary: '#52082d',
  info: '#331507',
  success: '#eaccb2',
  primaryShadow: 'rgba(82, 8, 45, 0.3)',
  infoShadow: 'rgba(51, 21, 7, 0.5)',
  successShadow: 'rgba(234, 204, 178, 0.3)'
};
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
        css: "@media screen and (max-width:".concat(emSize, "em){.__jsx-style-dynamic-selector{").concat((_css = css).resolve.apply(_css, arguments), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtvbHliZWxuaWtvdlxcd2luX3Byb2plY3RzXFxuZXh0LWJha2VyeS1hcHBcXHN0eWxlc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0N5QyxBQUd1Qyw2QkFDaEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxha29seWJlbG5pa292XFx3aW5fcHJvamVjdHNcXG5leHQtYmFrZXJ5LWFwcFxcc3R5bGVzXFx1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgUmVzcG9uc2l2ZSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gICAgcHJpbWFyeTogJyM1MjA4MmQnLFxuICAgIGluZm86ICcjMzMxNTA3JyxcbiAgICBzdWNjZXNzOiAnI2VhY2NiMicsXG4gICAgcHJpbWFyeVNoYWRvdzogJ3JnYmEoODIsIDgsIDQ1LCAwLjMpJyxcbiAgICBpbmZvU2hhZG93OiAncmdiYSg1MSwgMjEsIDcsIDAuNSknLFxuICAgIHN1Y2Nlc3NTaGFkb3c6ICdyZ2JhKDIzNCwgMjA0LCAxNzgsIDAuMyknXG59XG5cbmNvbnN0IG1heFdpZHRoID0ge1xuICAgIHNtYWxsaGFuZHNldDogMzU5LFxuICAgIGhhbmRzZXQ6IDU5OSxcbiAgICBsYXJnZWhhbmRzZXQ6IDcxOSxcbiAgICB0YWJsZXQ6IDEwMjMsXG4gICAgbGFwdG9wOiAxNDM5LFxuICAgIGRlc2t0b3A6IDE5MTlcbn1cblxuY29uc3QgbWluV2lkdGggPSB7XG4gICAgaGFuZHNldDogMzYwLFxuICAgIGxhcmdlaGFuZHNldDogNjAwLFxuICAgIHRhYmxldDogNzIwLFxuICAgIGxhcHRvcDogOTYwLFxuICAgIGRlc2t0b3A6IDE0NDAsXG4gICAgd2lkZXNjcmVlbjogMTkyMFxufVxuXG5leHBvcnQgY29uc3QgbWF4TWVkaWEgPSBPYmplY3Qua2V5cyhtYXhXaWR0aCkucmVkdWNlKChhY2MsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgZW1TaXplID0gbWF4V2lkdGhbbGFiZWxdIC8gMTZcbiAgICBhY2NbbGFiZWxdID0gKC4uLmFyZ3MpID0+IGNzcy5yZXNvbHZlYFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtlbVNpemV9ZW0pIHtcbiAgICAgICAgICAke2Nzcy5yZXNvbHZlKC4uLmFyZ3MpfTtcbiAgICAgIH1cbiAgICBgXG4gICAgcmV0dXJuIGFjY1xufSwge30pXG5cbmV4cG9ydCBjb25zdCBtaW5NZWRpYSA9IE9iamVjdC5rZXlzKG1pbldpZHRoKS5yZWR1Y2UoKGFjYywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBlbVNpemUgPSBtaW5XaWR0aFtsYWJlbF0gLyAxNlxuICAgIGFjY1tsYWJlbF0gPSAoLi4uYXJncykgPT4gY3NzLnJlc29sdmVgXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2VtU2l6ZX1lbSkge1xuICAgICAgICAgICR7Y3NzLnJlc29sdmUoLi4uYXJncyl9O1xuICAgICAgfVxuICAgIGBcbiAgICByZXR1cm4gYWNjXG59LCB7fSlcblxuZXhwb3J0IGNvbnN0IFdpZGVTY3JlZW4gPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1pbldpZHRoPXsxOTIwfSAvPlxuZXhwb3J0IGNvbnN0IERlc2t0b3AgPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1pbldpZHRoPXsxNDQwfSBtYXhXaWR0aD17MTkxOX0gLz5cbmV4cG9ydCBjb25zdCBMYXB0b3AgPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1pbldpZHRoPXs5NjB9IG1heFdpZHRoPXsxNDM5fSBvcmllbnRhdGlvbj0nbGFuZHNjYXBlJy8+XG5leHBvcnQgY29uc3QgVGFibGV0ID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17NzIwfSBtYXhXaWR0aD17MTAyM30gb3JpZW50YXRpb249J3BvcnRyYWl0JyAvPlxuZXhwb3J0IGNvbnN0IEhhbmRzZXRMYW5kc2NhcGUgPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1pbldpZHRoPXs0ODB9IG1heFdpZHRoPXs5NTl9IG9yaWVudGF0aW9uPSdsYW5kc2NhcGUnIC8+XG5leHBvcnQgY29uc3QgTGFyZ2VIYW5kc2V0ID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17NjAwfSBtYXhXaWR0aD17NzE5fSBvcmllbnRhdGlvbj0ncG9ydHJhaXQnIC8+XG5leHBvcnQgY29uc3QgSGFuZHNldCA9IHByb3BzID0+IDxSZXNwb25zaXZlIHsuLi5wcm9wc30gbWluV2lkdGg9ezM2MH0gbWF4V2lkdGg9ezU5OX0gLz5cbmV4cG9ydCBjb25zdCBTbWFsbEhhbmRzZXQgPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1heFdpZHRoPXszNTl9IC8+XG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IHByb3BzID0+IDxSZXNwb25zaXZlIHsuLi5wcm9wc30gbWluV2lkdGg9ezYwMH0gLz4iXX0= */\n/*@ sourceURL=C:\\Users\\akolybelnikov\\win_projects\\next-bakery-app\\styles\\utils.js */"),
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
        css: "@media screen and (min-width:".concat(emSize, "em){.__jsx-style-dynamic-selector{").concat((_css3 = css).resolve.apply(_css3, arguments), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtvbHliZWxuaWtvdlxcd2luX3Byb2plY3RzXFxuZXh0LWJha2VyeS1hcHBcXHN0eWxlc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEN5QyxBQUd1Qyw2QkFDaEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxha29seWJlbG5pa292XFx3aW5fcHJvamVjdHNcXG5leHQtYmFrZXJ5LWFwcFxcc3R5bGVzXFx1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgUmVzcG9uc2l2ZSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gICAgcHJpbWFyeTogJyM1MjA4MmQnLFxuICAgIGluZm86ICcjMzMxNTA3JyxcbiAgICBzdWNjZXNzOiAnI2VhY2NiMicsXG4gICAgcHJpbWFyeVNoYWRvdzogJ3JnYmEoODIsIDgsIDQ1LCAwLjMpJyxcbiAgICBpbmZvU2hhZG93OiAncmdiYSg1MSwgMjEsIDcsIDAuNSknLFxuICAgIHN1Y2Nlc3NTaGFkb3c6ICdyZ2JhKDIzNCwgMjA0LCAxNzgsIDAuMyknXG59XG5cbmNvbnN0IG1heFdpZHRoID0ge1xuICAgIHNtYWxsaGFuZHNldDogMzU5LFxuICAgIGhhbmRzZXQ6IDU5OSxcbiAgICBsYXJnZWhhbmRzZXQ6IDcxOSxcbiAgICB0YWJsZXQ6IDEwMjMsXG4gICAgbGFwdG9wOiAxNDM5LFxuICAgIGRlc2t0b3A6IDE5MTlcbn1cblxuY29uc3QgbWluV2lkdGggPSB7XG4gICAgaGFuZHNldDogMzYwLFxuICAgIGxhcmdlaGFuZHNldDogNjAwLFxuICAgIHRhYmxldDogNzIwLFxuICAgIGxhcHRvcDogOTYwLFxuICAgIGRlc2t0b3A6IDE0NDAsXG4gICAgd2lkZXNjcmVlbjogMTkyMFxufVxuXG5leHBvcnQgY29uc3QgbWF4TWVkaWEgPSBPYmplY3Qua2V5cyhtYXhXaWR0aCkucmVkdWNlKChhY2MsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgZW1TaXplID0gbWF4V2lkdGhbbGFiZWxdIC8gMTZcbiAgICBhY2NbbGFiZWxdID0gKC4uLmFyZ3MpID0+IGNzcy5yZXNvbHZlYFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtlbVNpemV9ZW0pIHtcbiAgICAgICAgICAke2Nzcy5yZXNvbHZlKC4uLmFyZ3MpfTtcbiAgICAgIH1cbiAgICBgXG4gICAgcmV0dXJuIGFjY1xufSwge30pXG5cbmV4cG9ydCBjb25zdCBtaW5NZWRpYSA9IE9iamVjdC5rZXlzKG1pbldpZHRoKS5yZWR1Y2UoKGFjYywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBlbVNpemUgPSBtaW5XaWR0aFtsYWJlbF0gLyAxNlxuICAgIGFjY1tsYWJlbF0gPSAoLi4uYXJncykgPT4gY3NzLnJlc29sdmVgXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2VtU2l6ZX1lbSkge1xuICAgICAgICAgICR7Y3NzLnJlc29sdmUoLi4uYXJncyl9O1xuICAgICAgfVxuICAgIGBcbiAgICByZXR1cm4gYWNjXG59LCB7fSlcblxuZXhwb3J0IGNvbnN0IFdpZGVTY3JlZW4gPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1pbldpZHRoPXsxOTIwfSAvPlxuZXhwb3J0IGNvbnN0IERlc2t0b3AgPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1pbldpZHRoPXsxNDQwfSBtYXhXaWR0aD17MTkxOX0gLz5cbmV4cG9ydCBjb25zdCBMYXB0b3AgPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1pbldpZHRoPXs5NjB9IG1heFdpZHRoPXsxNDM5fSBvcmllbnRhdGlvbj0nbGFuZHNjYXBlJy8+XG5leHBvcnQgY29uc3QgVGFibGV0ID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17NzIwfSBtYXhXaWR0aD17MTAyM30gb3JpZW50YXRpb249J3BvcnRyYWl0JyAvPlxuZXhwb3J0IGNvbnN0IEhhbmRzZXRMYW5kc2NhcGUgPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1pbldpZHRoPXs0ODB9IG1heFdpZHRoPXs5NTl9IG9yaWVudGF0aW9uPSdsYW5kc2NhcGUnIC8+XG5leHBvcnQgY29uc3QgTGFyZ2VIYW5kc2V0ID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17NjAwfSBtYXhXaWR0aD17NzE5fSBvcmllbnRhdGlvbj0ncG9ydHJhaXQnIC8+XG5leHBvcnQgY29uc3QgSGFuZHNldCA9IHByb3BzID0+IDxSZXNwb25zaXZlIHsuLi5wcm9wc30gbWluV2lkdGg9ezM2MH0gbWF4V2lkdGg9ezU5OX0gLz5cbmV4cG9ydCBjb25zdCBTbWFsbEhhbmRzZXQgPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1heFdpZHRoPXszNTl9IC8+XG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IHByb3BzID0+IDxSZXNwb25zaXZlIHsuLi5wcm9wc30gbWluV2lkdGg9ezYwMH0gLz4iXX0= */\n/*@ sourceURL=C:\\Users\\akolybelnikov\\win_projects\\next-bakery-app\\styles\\utils.js */"),
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

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "aws-amplify":
/*!******************************!*\
  !*** external "aws-amplify" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

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

/***/ "fontfaceobserver":
/*!***********************************!*\
  !*** external "fontfaceobserver" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-apollo-appsync":
/*!**************************************!*\
  !*** external "next-apollo-appsync" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-apollo-appsync");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

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
//# sourceMappingURL=_app.js.map