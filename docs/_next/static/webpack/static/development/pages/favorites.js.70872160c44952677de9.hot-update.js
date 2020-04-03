webpackHotUpdate("static/development/pages/favorites.js",{

/***/ "./src/pages/favorites.tsx":
/*!*********************************!*\
  !*** ./src/pages/favorites.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CompanyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompanyList */ "./src/components/CompanyList.tsx");


var _this = undefined,
    _jsxFileName = "/home/marco/Work/covid/src/pages/favorites.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var getFavCompaniesFromLocalStorage = function getFavCompaniesFromLocalStorage() {
  var favorites = {};
  var data = localStorage.getItem('companies');

  if (data) {
    try {
      favorites = JSON.parse(data);
    } catch (e) {
      console.error('currupted local storage: it should contain a json');
    }
  }

  return Object.values(favorites).filter(function (company) {
    return company.isFavorite === true;
  });
};

var Favorites = function Favorites() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    companies: [],
    loading: true
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var companies = getFavCompaniesFromLocalStorage();
    setState({
      companies: companies,
      loading: false
    });
  }, []);
  return __jsx(_components_CompanyList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: state.companies,
    loading: state.loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Favorites);

/***/ })

})
//# sourceMappingURL=favorites.js.70872160c44952677de9.hot-update.js.map