webpackHotUpdate("static/development/pages/favorites.js",{

/***/ "./src/pages/favorites.tsx":
/*!*********************************!*\
  !*** ./src/pages/favorites.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CompanyList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CompanyList */ "./src/components/CompanyList.tsx");
var _this = undefined,
    _jsxFileName = "/home/marco/Work/covid/src/pages/favorites.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


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
  return __jsx(_components_CompanyList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: companies,
    loading: isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Favorites);

/***/ })

})
//# sourceMappingURL=favorites.js.9fbe2e4181e1697b9ef8.hot-update.js.map