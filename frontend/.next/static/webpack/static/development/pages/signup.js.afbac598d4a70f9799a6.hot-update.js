webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/auth/SignupComponent.js":
/*!********************************************!*\
  !*** ./components/auth/SignupComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sergiorosa_local/Desktop/BlogSEO/frontend/components/auth/SignupComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SignupComponent = function SignupComponent() {
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log('handle submit');
  };

  var handleChange = function handleChange(e) {
    console.log(e.target.value);
  };

  var signupForm = function signupForm() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("input", {
      onChange: handleChange,
      type: "text",
      className: "form-control",
      placeholder: "Typeyour name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, signupForm());
};

/* harmony default export */ __webpack_exports__["default"] = (SignupComponent);

/***/ })

})
//# sourceMappingURL=signup.js.afbac598d4a70f9799a6.hot-update.js.map