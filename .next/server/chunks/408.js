exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 4442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6040);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Button = ({
  location,
  text,
  clickEvent,
  pending,
  btnType
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    className: `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().btn)} ${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default())[btnType]} ${location == 'dropdown' ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().btnDropdown) : ''} ${location == 'form' ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().btnForm) : ''} ${location == 'nft-list' ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().btnNftList) : ''}`,
    children: pending ? 'Connecting...' : text
  });
};

/***/ }),

/***/ 8282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5436);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Title_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Title = ({
  text,
  subText,
  level,
  isLarge
}) => {
  const Title = `h${level}`;
  return (
    /*#__PURE__*/
    // @ts-ignore: Object is possibly 'null'.
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Title, {
      className: `${(_Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title)} ${isLarge ? (_Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default().titleLarge) : ''}`,
      children: [text, " ", subText && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        style: {
          color: subText.color
        },
        children: subText.text
      })]
    })
  );
};

/***/ }),

/***/ 6040:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "Button_btn__pHIye",
	"btnPrimary": "Button_btnPrimary__LrTLS",
	"btnSecondary": "Button_btnSecondary__Daia_",
	"btnDropdown": "Button_btnDropdown__uhc4V",
	"btnForm": "Button_btnForm__w_rVf",
	"btnNftList": "Button_btnNftList__vOSTp"
};


/***/ }),

/***/ 5436:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Title_title__NMlX5",
	"titleLarge": "Title_titleLarge__QLzgC"
};


/***/ })

};
;