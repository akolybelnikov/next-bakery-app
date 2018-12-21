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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: Carousel, CarouselItem, CarouselTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return CarouselItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTitle", function() { return CarouselTitle; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils */ "./styles/utils.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_3__);




var Carousel = function Carousel(_ref) {
  var autoplay = _ref.autoplay,
      delay = _ref.delay,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "carousel carousel-animated carousel-animate-fade",
    "data-autoplay": autoplay,
    "data-delay": delay
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "carousel-container"
  }, children));
};
var CarouselItem = function CarouselItem(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4257473800" + " " + "carousel-item has-background"
  }, children, ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4257473800",
    css: "@media screen and (min-width:825px){div.jsx-4257473800{max-height:40%;overflow:hidden;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmV5XFxEb3dubG9hZHNcXG5leHQtYmFrZXJ5LWFwcFxcY29tcG9uZW50c1xcQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JLLEFBSXVCLGVBQ0MsZ0JBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW5kcmV5XFxEb3dubG9hZHNcXG5leHQtYmFrZXJ5LWFwcFxcY29tcG9uZW50c1xcQ2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbWFsbEhhbmRzZXQsIEhhbmRzZXQsIERlZmF1bHQsIHRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzL3V0aWxzJztcbmltcG9ydCB7IENhcmQsIENhcmRIZWFkZXIsIENhcmRIZWFkZXJUaXRsZSB9IGZyb20gJ2Jsb29tZXInO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWwgPSAoeyBhdXRvcGxheSwgZGVsYXksIGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJjYXJvdXNlbCBjYXJvdXNlbC1hbmltYXRlZCBjYXJvdXNlbC1hbmltYXRlLWZhZGVcIlxuXHRcdFx0ZGF0YS1hdXRvcGxheT17YXV0b3BsYXl9XG5cdFx0XHRkYXRhLWRlbGF5PXtkZWxheX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW0gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIGhhcy1iYWNrZ3JvdW5kXCI+XG5cdFx0XHR7Y2hpbGRyZW59eycgJ31cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODI1cHgpIHtcblx0XHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDQwJTtcblx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsVGl0bGUgPSBwcm9wcyA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0PFNtYWxsSGFuZHNldD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS4yO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7dGhlbWUuaW5mb1NoYWRvd30gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNWVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGB9XG5cdFx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1NtYWxsSGFuZHNldD5cblx0XHRcdDxIYW5kc2V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjM7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS5pbmZvU2hhZG93fSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMC41ZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YH1cblx0XHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvSGFuZHNldD5cblx0XHRcdDxEZWZhdWx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLmluZm9TaGFkb3d9ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRgfVxuXHRcdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9EZWZhdWx0PlxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdCk7XG59O1xuIl19 */\n/*@ sourceURL=C:\\Users\\Andrey\\Downloads\\next-bakery-app\\components\\Carousel.js */"
  }));
};
var CarouselTitle = function CarouselTitle(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_utils__WEBPACK_IMPORTED_MODULE_2__["SmallHandset"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["358991318", [_styles_utils__WEBPACK_IMPORTED_MODULE_2__["theme"].infoShadow]]]) + " " + "title"
  }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "358991318",
    css: "div.__jsx-style-dynamic-selector{font-size:1rem !important;line-height:1.2;color:#fff;background:".concat(_styles_utils__WEBPACK_IMPORTED_MODULE_2__["theme"].infoShadow, " !important;font-weight:400;padding:0.5em !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmV5XFxEb3dubG9hZHNcXG5leHQtYmFrZXJ5LWFwcFxcY29tcG9uZW50c1xcQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NPLEFBR21DLDBCQUNWLGdCQUNMLFdBQ3dDLG1EQUNuQyxnQkFDUyx5QkFDMUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbmRyZXlcXERvd25sb2Fkc1xcbmV4dC1iYWtlcnktYXBwXFxjb21wb25lbnRzXFxDYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNtYWxsSGFuZHNldCwgSGFuZHNldCwgRGVmYXVsdCwgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdXRpbHMnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEhlYWRlciwgQ2FyZEhlYWRlclRpdGxlIH0gZnJvbSAnYmxvb21lcic7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbCA9ICh7IGF1dG9wbGF5LCBkZWxheSwgY2hpbGRyZW4gfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImNhcm91c2VsIGNhcm91c2VsLWFuaW1hdGVkIGNhcm91c2VsLWFuaW1hdGUtZmFkZVwiXG5cdFx0XHRkYXRhLWF1dG9wbGF5PXthdXRvcGxheX1cblx0XHRcdGRhdGEtZGVsYXk9e2RlbGF5fVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gaGFzLWJhY2tncm91bmRcIj5cblx0XHRcdHtjaGlsZHJlbn17JyAnfVxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MjVweCkge1xuXHRcdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogNDAlO1xuXHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxUaXRsZSA9IHByb3BzID0+IHtcblx0cmV0dXJuIChcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQ8U21hbGxIYW5kc2V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS5pbmZvU2hhZG93fSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMC41ZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YH1cblx0XHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvU21hbGxIYW5kc2V0PlxuXHRcdFx0PEhhbmRzZXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMztcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLmluZm9TaGFkb3d9ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRgfVxuXHRcdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9IYW5kc2V0PlxuXHRcdFx0PERlZmF1bHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7dGhlbWUuaW5mb1NoYWRvd30gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNWVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGB9XG5cdFx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0RlZmF1bHQ+XG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0KTtcbn07XG4iXX0= */\n/*@ sourceURL=C:\\Users\\Andrey\\Downloads\\next-bakery-app\\components\\Carousel.js */"),
    dynamic: [_styles_utils__WEBPACK_IMPORTED_MODULE_2__["theme"].infoShadow]
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_utils__WEBPACK_IMPORTED_MODULE_2__["Handset"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2322015465", [_styles_utils__WEBPACK_IMPORTED_MODULE_2__["theme"].infoShadow]]]) + " " + "title"
  }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2322015465",
    css: "div.__jsx-style-dynamic-selector{font-size:1.25rem !important;line-height:1.3;color:#fff;background:".concat(_styles_utils__WEBPACK_IMPORTED_MODULE_2__["theme"].infoShadow, " !important;font-weight:400;padding:0.5em !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmV5XFxEb3dubG9hZHNcXG5leHQtYmFrZXJ5LWFwcFxcY29tcG9uZW50c1xcQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURPLEFBR3NDLDZCQUNiLGdCQUNMLFdBQ3dDLG1EQUNuQyxnQkFDUyx5QkFDMUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbmRyZXlcXERvd25sb2Fkc1xcbmV4dC1iYWtlcnktYXBwXFxjb21wb25lbnRzXFxDYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNtYWxsSGFuZHNldCwgSGFuZHNldCwgRGVmYXVsdCwgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdXRpbHMnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEhlYWRlciwgQ2FyZEhlYWRlclRpdGxlIH0gZnJvbSAnYmxvb21lcic7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbCA9ICh7IGF1dG9wbGF5LCBkZWxheSwgY2hpbGRyZW4gfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImNhcm91c2VsIGNhcm91c2VsLWFuaW1hdGVkIGNhcm91c2VsLWFuaW1hdGUtZmFkZVwiXG5cdFx0XHRkYXRhLWF1dG9wbGF5PXthdXRvcGxheX1cblx0XHRcdGRhdGEtZGVsYXk9e2RlbGF5fVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gaGFzLWJhY2tncm91bmRcIj5cblx0XHRcdHtjaGlsZHJlbn17JyAnfVxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MjVweCkge1xuXHRcdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogNDAlO1xuXHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxUaXRsZSA9IHByb3BzID0+IHtcblx0cmV0dXJuIChcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQ8U21hbGxIYW5kc2V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS5pbmZvU2hhZG93fSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMC41ZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YH1cblx0XHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvU21hbGxIYW5kc2V0PlxuXHRcdFx0PEhhbmRzZXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMztcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLmluZm9TaGFkb3d9ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRgfVxuXHRcdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9IYW5kc2V0PlxuXHRcdFx0PERlZmF1bHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7dGhlbWUuaW5mb1NoYWRvd30gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNWVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGB9XG5cdFx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0RlZmF1bHQ+XG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0KTtcbn07XG4iXX0= */\n/*@ sourceURL=C:\\Users\\Andrey\\Downloads\\next-bakery-app\\components\\Carousel.js */"),
    dynamic: [_styles_utils__WEBPACK_IMPORTED_MODULE_2__["theme"].infoShadow]
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_utils__WEBPACK_IMPORTED_MODULE_2__["Default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1449462560", [_styles_utils__WEBPACK_IMPORTED_MODULE_2__["theme"].infoShadow]]]) + " " + "title"
  }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1449462560",
    css: "div.__jsx-style-dynamic-selector{font-size:1.5rem !important;line-height:1.5;color:#fff;background:".concat(_styles_utils__WEBPACK_IMPORTED_MODULE_2__["theme"].infoShadow, " !important;font-weight:400;padding:0.5em !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmV5XFxEb3dubG9hZHNcXG5leHQtYmFrZXJ5LWFwcFxcY29tcG9uZW50c1xcQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVPLEFBR3FDLDRCQUNaLGdCQUNMLFdBQ3dDLG1EQUNuQyxnQkFDUyx5QkFDMUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbmRyZXlcXERvd25sb2Fkc1xcbmV4dC1iYWtlcnktYXBwXFxjb21wb25lbnRzXFxDYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNtYWxsSGFuZHNldCwgSGFuZHNldCwgRGVmYXVsdCwgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdXRpbHMnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEhlYWRlciwgQ2FyZEhlYWRlclRpdGxlIH0gZnJvbSAnYmxvb21lcic7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbCA9ICh7IGF1dG9wbGF5LCBkZWxheSwgY2hpbGRyZW4gfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImNhcm91c2VsIGNhcm91c2VsLWFuaW1hdGVkIGNhcm91c2VsLWFuaW1hdGUtZmFkZVwiXG5cdFx0XHRkYXRhLWF1dG9wbGF5PXthdXRvcGxheX1cblx0XHRcdGRhdGEtZGVsYXk9e2RlbGF5fVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gaGFzLWJhY2tncm91bmRcIj5cblx0XHRcdHtjaGlsZHJlbn17JyAnfVxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MjVweCkge1xuXHRcdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogNDAlO1xuXHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxUaXRsZSA9IHByb3BzID0+IHtcblx0cmV0dXJuIChcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQ8U21hbGxIYW5kc2V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS5pbmZvU2hhZG93fSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMC41ZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YH1cblx0XHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvU21hbGxIYW5kc2V0PlxuXHRcdFx0PEhhbmRzZXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMztcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLmluZm9TaGFkb3d9ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRgfVxuXHRcdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9IYW5kc2V0PlxuXHRcdFx0PERlZmF1bHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7dGhlbWUuaW5mb1NoYWRvd30gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNWVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGB9XG5cdFx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0RlZmF1bHQ+XG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0KTtcbn07XG4iXX0= */\n/*@ sourceURL=C:\\Users\\Andrey\\Downloads\\next-bakery-app\\components\\Carousel.js */"),
    dynamic: [_styles_utils__WEBPACK_IMPORTED_MODULE_2__["theme"].infoShadow]
  }))));
};

/***/ }),

/***/ "./components/Image.js":
/*!*****************************!*\
  !*** ./components/Image.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-progressive-image */ "react-progressive-image");
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_2__);




var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      className = _ref.className,
      placeholder = _ref.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: src,
    placeholder: placeholder
  }, function (currentSrc, loading) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: currentSrc,
      alt: alt,
      className: "jsx-631998784" + " " + ((loading ? "".concat(className, " loading-img") : className) || "")
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("noscript", {
      className: "jsx-631998784"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: src,
      alt: alt,
      className: "jsx-631998784" + " " + (className || "")
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "631998784",
      css: "@media screen and (min-width:600px){img.jsx-631998784{min-width:100%;}}img.jsx-631998784{opacity:1;-webkit-transition:opacity 0.25s ease-in;transition:opacity 0.25s ease-in;}img.loading-progressive-image.jsx-631998784{opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmV5XFxEb3dubG9hZHNcXG5leHQtYmFrZXJ5LWFwcFxcY29tcG9uZW50c1xcSW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JxQixBQUlnRCxBQUlULEFBSUUsVUFIcUIsRUFJckMsR0FSSSxxRUFLSiIsImZpbGUiOiJDOlxcVXNlcnNcXEFuZHJleVxcRG93bmxvYWRzXFxuZXh0LWJha2VyeS1hcHBcXGNvbXBvbmVudHNcXEltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9ncmVzc2l2ZUltYWdlIGZyb20gXCJyZWFjdC1wcm9ncmVzc2l2ZS1pbWFnZVwiXG5cbmNvbnN0IEltYWdlID0gKHsgc3JjLCBhbHQsIGNsYXNzTmFtZSwgcGxhY2Vob2xkZXIgfSkgPT4gKFxuICAgIDxQcm9ncmVzc2l2ZUltYWdlIHNyYz17c3JjfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9PlxuICAgICAgICB7KGN1cnJlbnRTcmMsIGxvYWRpbmcpID0+IChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXthbHR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bG9hZGluZyA/IGAke2NsYXNzTmFtZX0gbG9hZGluZy1pbWdgIDogY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3JjfSBhbHQ9e2FsdH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5sb2FkaW5nLXByb2dyZXNzaXZlLWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgPC9Qcm9ncmVzc2l2ZUltYWdlPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuIl19 */\n/*@ sourceURL=C:\\Users\\Andrey\\Downloads\\next-bakery-app\\components\\Image.js */"
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/OffersCarousel.js":
/*!**************************************!*\
  !*** ./components/OffersCarousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils */ "./styles/utils.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Image */ "./components/Image.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Carousel */ "./components/Carousel.js");







var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var OffersCarousel = function OffersCarousel(_ref) {
  var offers = _ref.offers;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1355201222" + " " + "component-container"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_5__["Carousel"], {
    autoplay: "true",
    delay: "10000"
  }, offers.length && offers.map(function (offer, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselItem"], {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselTitle"], null, offer.content), offer.image && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_utils__WEBPACK_IMPORTED_MODULE_3__["SmallHandset"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        minWidth: '100%'
      },
      className: "progressive-image is-background",
      src: "".concat(publicRuntimeConfig.imagehandler, "/640x640/").concat(offer.image),
      placeholder: "".concat(publicRuntimeConfig.imagehandler, "/15x15/").concat(offer.image),
      alt: "offer image"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_utils__WEBPACK_IMPORTED_MODULE_3__["Handset"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        minWidth: '100%'
      },
      className: "progressive-image is-background",
      src: "".concat(publicRuntimeConfig.imagehandler, "/1280x1280/").concat(offer.image),
      placeholder: "".concat(publicRuntimeConfig.imagehandler, "/15x15/").concat(offer.image),
      alt: "offer image"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_utils__WEBPACK_IMPORTED_MODULE_3__["Default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        minWidth: '100%'
      },
      className: "progressive-image is-background",
      src: "".concat(publicRuntimeConfig.imagehandler, "/1400x1400/").concat(offer.image),
      placeholder: "".concat(publicRuntimeConfig.imagehandler, "/15x15/").concat(offer.image),
      alt: "offer image"
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1355201222",
    css: ".component-container.jsx-1355201222{padding-top:3.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmV5XFxEb3dubG9hZHNcXG5leHQtYmFrZXJ5LWFwcFxcY29tcG9uZW50c1xcT2ZmZXJzQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RLLEFBRzJCLG9CQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFuZHJleVxcRG93bmxvYWRzXFxuZXh0LWJha2VyeS1hcHBcXGNvbXBvbmVudHNcXE9mZmVyc0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGVmYXVsdCwgSGFuZHNldCwgU21hbGxIYW5kc2V0IH0gZnJvbSAnLi4vc3R5bGVzL3V0aWxzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJztcbmltcG9ydCB7IENhcm91c2VsLCBDYXJvdXNlbFRpdGxlLCBDYXJvdXNlbEl0ZW0gfSBmcm9tICcuL0Nhcm91c2VsJztcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcblxuY29uc3QgT2ZmZXJzQ2Fyb3VzZWwgPSAoeyBvZmZlcnMgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWNvbnRhaW5lclwiPlxuXHRcdFx0PENhcm91c2VsIGF1dG9wbGF5PVwidHJ1ZVwiIGRlbGF5PVwiMTAwMDBcIj5cblx0XHRcdFx0e29mZmVycy5sZW5ndGggJiZcblx0XHRcdFx0XHRvZmZlcnMubWFwKChvZmZlciwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdDxDYXJvdXNlbEl0ZW0ga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbFRpdGxlPntvZmZlci5jb250ZW50fTwvQ2Fyb3VzZWxUaXRsZT5cblx0XHRcdFx0XHRcdFx0e29mZmVyLmltYWdlICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8U21hbGxIYW5kc2V0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzEwMCUnIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJvZ3Jlc3NpdmUtaW1hZ2UgaXMtYmFja2dyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHB1YmxpY1J1bnRpbWVDb25maWcuaW1hZ2VoYW5kbGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fS82NDB4NjQwLyR7b2ZmZXIuaW1hZ2V9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17YCR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwdWJsaWNSdW50aW1lQ29uZmlnLmltYWdlaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0vMTV4MTUvJHtvZmZlci5pbWFnZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIm9mZmVyIGltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvU21hbGxIYW5kc2V0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEhhbmRzZXQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTAwJScgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcm9ncmVzc2l2ZS1pbWFnZSBpcy1iYWNrZ3JvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2Ake1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHVibGljUnVudGltZUNvbmZpZy5pbWFnZWhhbmRsZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LzEyODB4MTI4MC8ke29mZmVyLmltYWdlfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2Ake1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHVibGljUnVudGltZUNvbmZpZy5pbWFnZWhhbmRsZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LzE1eDE1LyR7b2ZmZXIuaW1hZ2V9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJvZmZlciBpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0hhbmRzZXQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RGVmYXVsdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxMDAlJyB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInByb2dyZXNzaXZlLWltYWdlIGlzLWJhY2tncm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YCR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwdWJsaWNSdW50aW1lQ29uZmlnLmltYWdlaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0vMTQwMHgxNDAwLyR7b2ZmZXIuaW1hZ2V9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17YCR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwdWJsaWNSdW50aW1lQ29uZmlnLmltYWdlaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0vMTV4MTUvJHtvZmZlci5pbWFnZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIm9mZmVyIGltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRGVmYXVsdD5cblx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbEl0ZW0+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHQ8L0Nhcm91c2VsPlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuY29tcG9uZW50LWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMy4yNXJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJzQ2Fyb3VzZWw7XG4iXX0= */\n/*@ sourceURL=C:\\Users\\Andrey\\Downloads\\next-bakery-app\\components\\OffersCarousel.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OffersCarousel);

/***/ }),

/***/ "./graphql/queries/offers.js":
/*!***********************************!*\
  !*** ./graphql/queries/offers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

var LIST_OFFERS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\n    query {\n        listOffers (filter: {status: {eq: \"active\"}}) {\n            items {\n                id\n                content\n                image\n                status\n            }\n        }\n    }\n");
/* harmony default export */ __webpack_exports__["default"] = (LIST_OFFERS);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bulma_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bulma-carousel */ "bulma-carousel");
/* harmony import */ var bulma_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bulma_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_OffersCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/OffersCarousel */ "./components/OffersCarousel.js");
/* harmony import */ var _graphql_queries_offers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries/offers */ "./graphql/queries/offers.js");
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../withData */ "./withData.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      bulma_carousel__WEBPACK_IMPORTED_MODULE_1___default.a.attach();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OffersCarousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        offers: this.props.offers
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Home = Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_graphql_queries_offers__WEBPACK_IMPORTED_MODULE_4__["default"], {
  options: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all'
  },
  props: function props(_props) {
    return {
      offers: _props.data.listOffers ? _props.data.listOffers.items : []
    };
  }
}))(Index);
/* harmony default export */ __webpack_exports__["default"] = (Object(_withData__WEBPACK_IMPORTED_MODULE_5__["default"])(Home));

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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

/***/ "bulma-carousel":
/*!*********************************!*\
  !*** external "bulma-carousel" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bulma-carousel");

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

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-progressive-image":
/*!******************************************!*\
  !*** external "react-progressive-image" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-progressive-image");

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
//# sourceMappingURL=index.js.map