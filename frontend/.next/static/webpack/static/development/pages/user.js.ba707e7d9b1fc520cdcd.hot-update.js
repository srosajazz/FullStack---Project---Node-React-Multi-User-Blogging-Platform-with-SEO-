webpackHotUpdate("static/development/pages/user.js",{

/***/ "./components/auth/Private.js":
/*!************************************!*\
  !*** ./components/auth/Private.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
var _jsxFileName = "/Users/sergiorosa_local/Desktop/BlogSEO/frontend/components/auth/Private.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Private = function Private(_ref) {
  var children = _ref.children;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["isAuth"])()) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/signin");
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Private);

/***/ })

})
//# sourceMappingURL=user.js.ba707e7d9b1fc520cdcd.hot-update.js.map