"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/nft/[id]",{

/***/ "./src/components/components-ui/WalletButton/index.tsx":
/*!*************************************************************!*\
  !*** ./src/components/components-ui/WalletButton/index.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ \"./src/components/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\vetal\\\\Desktop\\\\solido.games\\\\src\\\\components\\\\components-ui\\\\WalletButton\\\\index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction WalletButton(props) {\n  _s();\n\n  // const isMounted = useIsMounted();\n  // const { data } = useAccount();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      popupOpened = _useState[0],\n      setPopupOpened = _useState[1];\n\n  var openPopup = function openPopup() {\n    setPopupOpened(true);\n  };\n\n  var fn = function fn(value) {\n    setPopupOpened(value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"wallet-btn\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: \"btn\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Connect, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(WalletButton, \"6L5Id0bmFTyQP6mQxK7e7uZmh2Y=\");\n\n_c = WalletButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"WalletButton\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLXVpL1dhbGxldEJ1dHRvbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTs7OztBQWNBLFNBQVNFLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQWtDO0FBQUE7O0FBQ2hDO0FBQ0E7QUFDQSxrQkFBd0NILCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBLE1BQVFJLFdBQVI7QUFBQSxNQUFxQkMsY0FBckI7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QkQsSUFBQUEsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsTUFBTUUsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBQ0MsS0FBRCxFQUFnQjtBQUN6QkgsSUFBQUEsY0FBYyxDQUFDRyxLQUFELENBQWQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxLQUFoQztBQUFBLCtCQUNBLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURGO0FBY0Q7O0dBM0JRTjs7S0FBQUE7QUE2QlQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy11aS9XYWxsZXRCdXR0b24vaW5kZXgudHN4Pzk1NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciwgY2hhaW4sIGNyZWF0ZUNsaWVudCwgZGVmYXVsdENoYWlucyB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7XG4gIEFjY291bnQsXG4gIEFwcHJvdmUsXG4gIERlcG9zaXQsXG4gIFdpdGhkcmF3LFxuICBSZXBheSxcbiAgQm9ycm93LFxuICBDb25uZWN0LFxuICBOZXR3b3JrU3dpdGNoZXIsXG59IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnO1xuLy8gaW1wb3J0IHN0cmlwQWRkcmVzcyBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCBXYWxsZXRQb3B1cCBmcm9tIFwiLi4vV2FsbGV0UG9wdXBcIjtcblxuZnVuY3Rpb24gV2FsbGV0QnV0dG9uKHByb3BzOiBhbnkpIHtcbiAgLy8gY29uc3QgaXNNb3VudGVkID0gdXNlSXNNb3VudGVkKCk7XG4gIC8vIGNvbnN0IHsgZGF0YSB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbIHBvcHVwT3BlbmVkLCBzZXRQb3B1cE9wZW5lZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9wZW5Qb3B1cCA9ICgpID0+IHtcbiAgICBzZXRQb3B1cE9wZW5lZCh0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IGZuID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICBzZXRQb3B1cE9wZW5lZCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0LWJ0blwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgIDxDb25uZWN0IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtwb3B1cE9wZW5lZCAmJiAhcHJvcHMuaGVhZGVyUG9zID8gXCJ3YWxsZXQtcG9wdXAtd3JhcHBlciBvcGVuZWRcIiA6IFwid2FsbGV0LXBvcHVwLXdyYXBwZXJcIn0+XG4gICAgICAgICAgICA8V2FsbGV0UG9wdXAgb3BlbmVkPXtmbn0gcHJpY2U9e3Byb3BzLnByaWNlfSBjaGFpbj17cHJvcHMuY2hhaW59IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9wdXBPcGVuZWQgJiYgIXByb3BzLmhlYWRlclBvcyA/IFwicG9wdXAtb3ZlcmxheSBzaG93blwiIDogXCJwb3B1cC1vdmVybGF5XCJ9IG9uQ2xpY2s9e2ZuLmJpbmQobnVsbCwgZmFsc2UpfT48L2Rpdj4gKi99XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbm5lY3QiLCJXYWxsZXRCdXR0b24iLCJwcm9wcyIsInBvcHVwT3BlbmVkIiwic2V0UG9wdXBPcGVuZWQiLCJvcGVuUG9wdXAiLCJmbiIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/components-ui/WalletButton/index.tsx\n");

/***/ })

});