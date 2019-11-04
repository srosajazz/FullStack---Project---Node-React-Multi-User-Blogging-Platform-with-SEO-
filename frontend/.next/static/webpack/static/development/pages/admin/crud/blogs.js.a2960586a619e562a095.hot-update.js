webpackHotUpdate("static/development/pages/admin/crud/blogs.js",{

/***/ "./components/crud/BlogRead.js":
/*!*************************************!*\
  !*** ./components/crud/BlogRead.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/sergiorosa_local/Desktop/BlogSEO/frontend/components/crud/BlogRead.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var BlogRead = function BlogRead() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadBlogs();
  }, []);

  var loadBlogs = function loadBlogs() {
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["list"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  var deleteBlog = function deleteBlog(slug) {
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["removeBlog"])(slug, token);
  };

  var deleteConfirm = function deleteConfirm() {
    var answer = window.confirm('Are you sure you want to delete your blog?');

    if (answer) {
      deleteBlog(slug);
    }
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      return __jsx("div", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, blog.title), __jsx("p", {
        className: "mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Written by ", blog.postedBy.name, " | Published on ", moment__WEBPACK_IMPORTED_MODULE_5___default()(blog.updatedAt).fromNow()), __jsx("button", {
        className: "btn btn-sm btn-danger",
        onClick: function onClick() {
          return deleteConfirm(blog.slu);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Delete"));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, showAllBlogs())));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogRead);

/***/ })

})
//# sourceMappingURL=blogs.js.a2960586a619e562a095.hot-update.js.map