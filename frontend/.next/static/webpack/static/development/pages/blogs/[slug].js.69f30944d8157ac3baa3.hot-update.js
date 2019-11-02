webpackHotUpdate("static/development/pages/blogs/[slug].js",{

/***/ "./pages/blogs/[slug].js":
/*!*******************************!*\
  !*** ./pages/blogs/[slug].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");
var _jsxFileName = "/Users/sergiorosa_local/Desktop/BlogSEO/frontend/pages/blogs/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Will use for many blog pages









var SingleBlog = function SingleBlog(_ref) {
  var blog = _ref.blog;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Programming blogs | ", _config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"]), __jsx("meta", {
      name: "description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"]).concat(router.pathname),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("meta", {
      property: "og:title",
      content: "Latest web developoment tutorials | ".concat(_config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("meta", {
      property: "og:description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("meta", {
      property: "og:type",
      content: "webiste",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"]).concat(router.pathname),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"], "/static/images/seoblog.jpg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:secure_url",
      ccontent: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"], "/static/images/seoblog.jpg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("meta", {
      property: "fb:app_id",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["FB_APP_ID"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  };

  var showBlogCategories = function showBlogCategories(blog) {
    return blog.categories.map(function (c, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: i,
        href: "/categories/".concat(c.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, c.name));
    });
  };

  var showBlogTags = function showBlogTags(blog) {
    return blog.tags.map(function (t, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: i,
        href: "/tags/".concat(t.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, t.name));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    style: {
      marginTop: '-30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["API"], "/blog/photo/").concat(blog.slug),
    alt: blog.title,
    className: "img img-fluid",
    "featured-image": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("h1", {
    className: "display-2 pb-3 pt-3 text-center font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, blog.title), __jsx("p", {
    className: "lead mt-3 mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Written by ", blog.postedBy.name, " | Published ", moment__WEBPACK_IMPORTED_MODULE_6___default()(blog.updatedAt).fromNow()), __jsx("div", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, showBlogCategories(blog), showBlogTags(blog), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))))), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12 lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react_render_html__WEBPACK_IMPORTED_MODULE_5___default()(blog.body)))), __jsx("div", {
    className: "container pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("h4", {
    className: "text-center pt-5 pb-5 h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Related blogs"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "show related blogs")), __jsx("div", {
    className: "container pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "show Comments"))))));
};

SingleBlog.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["singleBlog"])(query.slug).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data)
      return {
        blog: data
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleBlog);

/***/ })

})
//# sourceMappingURL=[slug].js.69f30944d8157ac3baa3.hot-update.js.map