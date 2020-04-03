webpackHotUpdate("static/development/pages/companies/[id].js",{

/***/ "./src/pages/companies/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/companies/[id].tsx ***!
  \**************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Company */ "./src/components/Company.tsx");


var _this = undefined,
    _jsxFileName = "/home/marco/Work/covid/src/pages/companies/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Company = function Company(_ref) {
  var company = _ref.company;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isFavorite = _React$useState2[0],
      setFavorite = _React$useState2[1];

  var handleToggleFavorite = function handleToggleFavorite() {
    return setFavorite(!isFavorite);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var favorites = {};
    var data = localStorage.getItem('companies');

    if (data) {
      try {
        favorites = JSON.parse(data);
      } catch (e) {
        console.error('currupted local storage: it should contain a json');
      }
    }

    var currentItem = favorites[company.id] || {};
    currentItem['isFavorite'] = isFavorite;
    favorites[company.id] = currentItem;
    localStorage.setItem('companies', JSON.stringify(favorites));
  }, [isFavorite]);
  return __jsx(_components_Company__WEBPACK_IMPORTED_MODULE_2__["default"], {
    company: company,
    isFavorite: isFavorite,
    onToggleFavorite: handleToggleFavorite,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  });
}; // Company page is pre-rendered at compile time for SEO
// see https://nextjs.org/docs/basic-features/pages


var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Company);

/***/ })

})
//# sourceMappingURL=[id].js.22424df60d17513a0937.hot-update.js.map