"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reserva/page",{

/***/ "(app-pages-browser)/./app/reserva/page.js":
/*!*****************************!*\
  !*** ./app/reserva/page.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reserva; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Titulo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Titulo */ \"(app-pages-browser)/./app/components/Titulo/index.js\");\n/* harmony import */ var _components_Subtitulo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Subtitulo */ \"(app-pages-browser)/./app/components/Subtitulo/index.js\");\n/* harmony import */ var _components_Cita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cita */ \"(app-pages-browser)/./app/components/Cita/index.js\");\n/* harmony import */ var _components_FormularioCrear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormularioCrear */ \"(app-pages-browser)/./app/components/FormularioCrear/index.js\");\n/* harmony import */ var _reserva_Reserva_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reserva/Reserva.module.css */ \"(app-pages-browser)/./app/reserva/Reserva.module.css\");\n/* harmony import */ var _reserva_Reserva_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reserva_Reserva_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Reserva() {\n    _s();\n    const [citas, setCitas] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        let citasGuardadas = localStorage.getItem(\"citas\");\n        if (citasGuardadas) {\n            setCitas(JSON.parse(citasGuardadas));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (citas.length) {\n            localStorage.setItem(\"citas\", JSON.stringify(citas));\n        }\n    }, [\n        citas\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Titulo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                texto: \"ADMINISTRADOR DE PACIENTES\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"one-half column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Subtitulo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    texto: \"CREAR MI CITA\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormularioCrear__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    citas: citas,\n                                    setCitas: setCitas\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"one-half column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Subtitulo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    texto: \"ADMINISTRA TUS CITAS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                citas.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: (_reserva_Reserva_module_css__WEBPACK_IMPORTED_MODULE_5___default().listacitas),\n                                    children: citas.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: (_reserva_Reserva_module_css__WEBPACK_IMPORTED_MODULE_5___default().cita),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cita__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                citas: citas,\n                                                setCitas: setCitas,\n                                                nombreMascota: c.mascota,\n                                                nombreDuenio: c.duenio,\n                                                fecha: c.fecha,\n                                                hora: c.hora,\n                                                sintomas: c.sintomas,\n                                                id: c.id\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 60\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 35\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\47436085\\\\Desktop\\\\tp3-castro_vazquez\\\\tp3-castro_vazquez\\\\app\\\\reserva\\\\page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Reserva, \"tlPPiqQAr3I5u4EggEG4JL81JBg=\");\n_c = Reserva;\nvar _c;\n$RefreshReg$(_c, \"Reserva\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZXNlcnZhL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ007QUFDVjtBQUNzQjtBQUNUO0FBQ1A7QUFFN0IsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDRCxnREFBU0EsQ0FBQztRQUNSLElBQUlLLGlCQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzFDLElBQUlGLGdCQUFnQjtZQUNsQkQsU0FBU0ksS0FBS0MsS0FBSyxDQUFDSjtRQUN0QjtJQUNGLEdBQUcsRUFBRTtJQUNMTCxnREFBU0EsQ0FBQztRQUNSLElBQUlHLE1BQU1PLE1BQU0sRUFBRTtZQUNoQkosYUFBYUssT0FBTyxDQUFDLFNBQVNILEtBQUtJLFNBQVMsQ0FBQ1Q7UUFDL0M7SUFDRixHQUFHO1FBQUNBO0tBQU07SUFDVixxQkFDSTs7MEJBQ0EsOERBQUNSLDBEQUFNQTtnQkFBQ2tCLE9BQU07Ozs7OzswQkFDZCw4REFBQ0M7Z0JBQUlDLE9BQU07MEJBQ1QsNEVBQUNEO29CQUFJQyxPQUFNOztzQ0FDVCw4REFBQ0Q7NEJBQUlDLE9BQU07OzhDQUNULDhEQUFDbkIsNkRBQVNBO29DQUFDaUIsT0FBTTs7Ozs7OzhDQUNqQiw4REFBQ2YsbUVBQWVBO29DQUFDSyxPQUFPQTtvQ0FBT0MsVUFBVUE7Ozs7Ozs7Ozs7OztzQ0FFM0MsOERBQUNVOzRCQUFJQyxPQUFNOzs4Q0FDVCw4REFBQ25CLDZEQUFTQTtvQ0FBQ2lCLE9BQU07Ozs7OztnQ0FDZlYsTUFBTU8sTUFBTSxHQUFHLGtCQUNmLDhEQUFDSTtvQ0FBSUMsT0FBT2hCLCtFQUFpQjs4Q0FDeEJJLE1BQU1jLEdBQUcsQ0FBQ0MsQ0FBQUEsa0JBQUssOERBQUNKOzRDQUFJQyxPQUFPaEIseUVBQVc7c0RBQUUsNEVBQUNGLHdEQUFJQTtnREFBQ00sT0FBT0E7Z0RBQU9DLFVBQVVBO2dEQUFVZ0IsZUFBZUYsRUFBRUcsT0FBTztnREFBRUMsY0FBY0osRUFBRUssTUFBTTtnREFBRUMsT0FBT04sRUFBRU0sS0FBSztnREFBRUMsTUFBTVAsRUFBRU8sSUFBSTtnREFBRUMsVUFBVVIsRUFBRVEsUUFBUTtnREFBRUMsSUFBSVQsRUFBRVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzJDQUM1TDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7R0FqQ3dCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Jlc2VydmEvcGFnZS5qcz9lMjI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBUaXR1bG8gZnJvbSAnLi4vY29tcG9uZW50cy9UaXR1bG8nO1xyXG5pbXBvcnQgU3VidGl0dWxvIGZyb20gJy4uL2NvbXBvbmVudHMvU3VidGl0dWxvJztcclxuaW1wb3J0IENpdGEgZnJvbSAnLi4vY29tcG9uZW50cy9DaXRhJztcclxuaW1wb3J0IEZvcm11bGFyaW9DcmVhciBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm11bGFyaW9DcmVhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcmVzZXJ2YS9SZXNlcnZhLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXJ2YSgpIHtcclxuICBjb25zdCBbY2l0YXMsIHNldENpdGFzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNpdGFzR3VhcmRhZGFzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGFzJyk7XHJcbiAgICBpZiAoY2l0YXNHdWFyZGFkYXMpIHtcclxuICAgICAgc2V0Q2l0YXMoSlNPTi5wYXJzZShjaXRhc0d1YXJkYWRhcykpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNpdGFzLmxlbmd0aCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0YXMnLCBKU09OLnN0cmluZ2lmeShjaXRhcykpO1xyXG4gICAgfVxyXG4gIH0sIFtjaXRhc10pO1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxUaXR1bG8gdGV4dG89XCJBRE1JTklTVFJBRE9SIERFIFBBQ0lFTlRFU1wiPjwvVGl0dWxvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9uZS1oYWxmIGNvbHVtblwiPlxyXG4gICAgICAgICAgICA8U3VidGl0dWxvIHRleHRvPVwiQ1JFQVIgTUkgQ0lUQVwiPjwvU3VidGl0dWxvPlxyXG4gICAgICAgICAgICA8Rm9ybXVsYXJpb0NyZWFyIGNpdGFzPXtjaXRhc30gc2V0Q2l0YXM9e3NldENpdGFzfT48L0Zvcm11bGFyaW9DcmVhcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9uZS1oYWxmIGNvbHVtblwiPlxyXG4gICAgICAgICAgICA8U3VidGl0dWxvIHRleHRvPVwiQURNSU5JU1RSQSBUVVMgQ0lUQVNcIj48L1N1YnRpdHVsbz5cclxuICAgICAgICAgICAgIHtjaXRhcy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMubGlzdGFjaXRhc30+XHJcbiAgICAgICAgICAgICAgICAgIHtjaXRhcy5tYXAoYyA9PiA8ZGl2IGNsYXNzPXtzdHlsZXMuY2l0YX0+PENpdGEgY2l0YXM9e2NpdGFzfSBzZXRDaXRhcz17c2V0Q2l0YXN9IG5vbWJyZU1hc2NvdGE9e2MubWFzY290YX0gbm9tYnJlRHVlbmlvPXtjLmR1ZW5pb30gZmVjaGE9e2MuZmVjaGF9IGhvcmE9e2MuaG9yYX0gc2ludG9tYXM9e2Muc2ludG9tYXN9IGlkPXtjLmlkfT48L0NpdGE+PC9kaXY+KX1cclxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbCB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4pXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRpdHVsbyIsIlN1YnRpdHVsbyIsIkNpdGEiLCJGb3JtdWxhcmlvQ3JlYXIiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlc2VydmEiLCJjaXRhcyIsInNldENpdGFzIiwiY2l0YXNHdWFyZGFkYXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRleHRvIiwiZGl2IiwiY2xhc3MiLCJsaXN0YWNpdGFzIiwibWFwIiwiYyIsImNpdGEiLCJub21icmVNYXNjb3RhIiwibWFzY290YSIsIm5vbWJyZUR1ZW5pbyIsImR1ZW5pbyIsImZlY2hhIiwiaG9yYSIsInNpbnRvbWFzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/reserva/page.js\n"));

/***/ })

});