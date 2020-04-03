webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/PageLayout.tsx":
/*!***************************************!*\
  !*** ./src/components/PageLayout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageLayout; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "./node_modules/@material-ui/core/esm/BottomNavigation/index.js");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "./node_modules/@material-ui/core/esm/BottomNavigationAction/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _AddCompanyPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AddCompanyPage */ "./src/components/AddCompanyPage.tsx");


var _jsxFileName = "/home/marco/Work/covid/src/components/PageLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    bottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0
    },
    toolbar: {},
    toolbarIcon: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    menuButtonHidden: {
      display: 'none'
    },
    title: {
      flexGrow: 1
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    },
    fixedHeight: {
      height: 240
    }
  };
});
function PageLayout(_ref) {
  var children = _ref.children;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["useIntl"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var selectedTab = router.pathname === '/about' ? 2 : router.pathname === '/favorites' ? 1 : 0;
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "Covid App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: "absolute",
    className: classes.appBar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "center",
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Covid"),  false && false)), __jsx("main", {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.appBarSpacer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    maxWidth: "lg",
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, children)), __jsx(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_18__["default"], {
    showLabels: true,
    value: selectedTab,
    className: classes.bottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_19__["default"], {
    label: intl.formatMessage({
      id: 'app.components.nav.home'
    }),
    icon: __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
      href: "/",
      passHref: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_19__["default"], {
    label: intl.formatMessage({
      id: 'app.components.nav.fav'
    }),
    icon: __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
      href: "/favorites",
      passHref: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 15
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_19__["default"], {
    label: intl.formatMessage({
      id: 'app.components.nav.about'
    }),
    icon: __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
      href: "/about",
      passHref: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 15
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  })),  false && false);
}

/***/ })

})
//# sourceMappingURL=_app.js.bd961f48d39a2166572e.hot-update.js.map