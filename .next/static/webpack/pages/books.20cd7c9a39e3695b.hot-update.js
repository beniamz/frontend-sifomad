"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/books",{

/***/ "./src/components/book/list.js":
/*!*************************************!*\
  !*** ./src/components/book/list.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_form_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/button */ \"./src/components/form/button.js\");\nvar _this = undefined;\n\n\n\n\nvar ListBook = function(param1) {\n    var _books = param1.books, books = _books === void 0 ? [] : _books, getBook = param1.getBook, handleDeleteBook = param1.handleDeleteBook;\n    var _this1 = _this;\n    var Item = function(param) {\n        var children = param.children;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full border-2 border-gray-700 px-3 py-3 mb-2 rounded-lg\",\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, _this1);\n    };\n    return books.map(function(book1, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 bg-white border-b border-gray-200\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-semibold py-3 text-xl text-gray-800 leading-tight\",\n                            children: \"List of Teachers\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                            lineNumber: 18,\n                            columnNumber: 29\n                        }, _this1),\n                        loading ? \"Mohon bersabar sedang mengambil data\\n                            dari server..!\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"hover:table-auto w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"px-4 py-2\",\n                                                children: \"ID\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                lineNumber: 28,\n                                                columnNumber: 45\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"px-4 py-2\",\n                                                children: \"Name\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 45\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"px-4 py-2\",\n                                                children: \"Description\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 45\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"px-4 py-2\",\n                                                children: \"Action\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 45\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 41\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 37\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: books.map(function(book) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"border px-4 py-2\",\n                                                    children: book.id\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 49\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"border px-4 py-2\",\n                                                    children: book.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 49\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"border px-4 py-2\",\n                                                    children: book.description\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 49\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"border px-4 py-2\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"flex-shrink-0 bg-purple-500 hover:bg-purple-400 border-purple-500 hover:border-purple-700 text-sm border-1 text-white py-1 px-2 justify-center rounded\",\n                                                            type: \"button\",\n                                                            children: \"Edit\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 53\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"flex-shrink-0 bg-red-500 hover:bg-red-400 border-red-500 hover:border-red-700 text-sm border-1 text-white py-1 px-2 ml-1 justify-center rounded\",\n                                                            type: \"button\",\n                                                            children: \"Delete\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 53\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 49\n                                                }, _this1)\n                                            ]\n                                        }, book.id, true, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 45\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 37\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                            lineNumber: 25,\n                            columnNumber: 33\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this1)\n        }, book1.id, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, _this1);\n    });\n};\n_c = ListBook;\nListBook.propTypes = {\n    books: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListBook);\nvar _c;\n$RefreshReg$(_c, \"ListBook\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib29rL2xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDUztBQUNXO0FBRTdDLElBQU1HLFFBQVEsR0FBRyxpQkFBK0M7d0JBQTVDQyxLQUFLLEVBQUxBLEtBQUssdUJBQUcsRUFBRSxXQUFFQyxPQUFPLFVBQVBBLE9BQU8sRUFBRUMsZ0JBQWdCLFVBQWhCQSxnQkFBZ0I7O0lBQ3JELElBQU1DLElBQUksR0FBRyxnQkFBa0I7WUFBZkMsUUFBUSxTQUFSQSxRQUFRO1FBQ3BCLHFCQUNJLDhEQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQywyREFBMkQ7c0JBQ3JFRixRQUFROzs7OztrQkFDUCxDQUNUO0tBQ0o7SUFFRCxPQUFPSixLQUFLLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxLQUFJLEVBQUVDLEtBQUs7NkJBQ3pCLDhEQUFDTixJQUFJO3NCQUNELDRFQUFDRSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbUNBQW1DOzBCQUM5Qyw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHVDQUF1Qzs7c0NBQzFDLDhEQUFDSSxJQUFFOzRCQUFDSixTQUFTLEVBQUMsd0RBQXdEO3NDQUFDLGtCQUV2RTs7Ozs7a0NBQUs7d0JBQ0pLLE9BQU8sR0FDSCxrRkFDUyxpQkFFViw4REFBQ0MsT0FBSzs0QkFBQ04sU0FBUyxFQUFDLHlCQUF5Qjs7OENBQ3RDLDhEQUFDTyxPQUFLOzhDQUNGLDRFQUFDQyxJQUFFOzswREFDQyw4REFBQ0MsSUFBRTtnREFBQ1QsU0FBUyxFQUFDLFdBQVc7MERBQUMsSUFBRTs7Ozs7c0RBQUs7MERBQ2pDLDhEQUFDUyxJQUFFO2dEQUFDVCxTQUFTLEVBQUMsV0FBVzswREFBQyxNQUFJOzs7OztzREFBSzswREFDbkMsOERBQUNTLElBQUU7Z0RBQUNULFNBQVMsRUFBQyxXQUFXOzBEQUFDLGFBRTFCOzs7OztzREFBSzswREFDTCw4REFBQ1MsSUFBRTtnREFBQ1QsU0FBUyxFQUFDLFdBQVc7MERBQUMsUUFFMUI7Ozs7O3NEQUFLOzs7Ozs7OENBQ0o7Ozs7OzBDQUNEOzhDQUNSLDhEQUFDVSxPQUFLOzhDQUNEaEIsS0FBSyxDQUFDTyxHQUFHLENBQUNDLFNBQUFBLElBQUk7NkRBQ1gsOERBQUNNLElBQUU7OzhEQUNDLDhEQUFDRyxJQUFFO29EQUFDWCxTQUFTLEVBQUMsa0JBQWtCOzhEQUMzQkUsSUFBSSxDQUFDVSxFQUFFOzs7OzswREFDUDs4REFDTCw4REFBQ0QsSUFBRTtvREFBQ1gsU0FBUyxFQUFDLGtCQUFrQjs4REFDM0JFLElBQUksQ0FBQ1csSUFBSTs7Ozs7MERBQ1Q7OERBQ0wsOERBQUNGLElBQUU7b0RBQUNYLFNBQVMsRUFBQyxrQkFBa0I7OERBQzNCRSxJQUFJLENBQUNZLFdBQVc7Ozs7OzBEQUNoQjs4REFDTCw4REFBQ0gsSUFBRTtvREFBQ1gsU0FBUyxFQUFDLGtCQUFrQjs7c0VBQzVCLDhEQUFDZSxRQUFNOzREQUNIZixTQUFTLEVBQUMsd0pBQXdKOzREQUNsS2dCLElBQUksRUFBQyxRQUFRO3NFQUFDLE1BRWxCOzs7OztrRUFBUztzRUFDVCw4REFBQ0QsUUFBTTs0REFDSGYsU0FBUyxFQUFDLGlKQUFpSjs0REFDM0pnQixJQUFJLEVBQUMsUUFBUTtzRUFBQyxRQUVsQjs7Ozs7a0VBQVM7Ozs7OzswREFDUjs7MkNBckJBZCxJQUFJLENBQUNVLEVBQUU7Ozs7a0RBc0JYO3FDQUNSLENBQUM7Ozs7OzBDQUNFOzs7Ozs7a0NBQ0o7Ozs7OzswQkFFVjs7Ozs7c0JBQ1o7V0FyRENWLEtBQUksQ0FBQ1UsRUFBRTs7OztrQkFzRFg7S0FDVixDQUFDO0NBQ0w7QUFsRUtuQixLQUFBQSxRQUFRO0FBb0VkQSxRQUFRLENBQUN3QixTQUFTLEdBQUc7SUFDakJ2QixLQUFLLEVBQUVILG9FQUEwQjtDQUNwQztBQUVELCtEQUFlRSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Jvb2svbGlzdC5qcz9mMzU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2Zvcm0vYnV0dG9uJ1xuXG5jb25zdCBMaXN0Qm9vayA9ICh7IGJvb2tzID0gW10sIGdldEJvb2ssIGhhbmRsZURlbGV0ZUJvb2sgfSkgPT4ge1xuICAgIGNvbnN0IEl0ZW0gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS03MDAgcHgtMyBweS0zIG1iLTIgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGJvb2tzLm1hcCgoYm9vaywgaW5kZXgpID0+IChcbiAgICAgICAgPEl0ZW0ga2V5PXtib29rLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgcHktMyB0ZXh0LXhsIHRleHQtZ3JheS04MDAgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaXN0IG9mIFRlYWNoZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYE1vaG9uIGJlcnNhYmFyIHNlZGFuZyBtZW5nYW1iaWwgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmkgc2VydmVyLi4hYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJob3Zlcjp0YWJsZS1hdXRvIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9va3MubWFwKGJvb2sgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtib29rLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2suaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2suZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgYmctcHVycGxlLTUwMCBob3ZlcjpiZy1wdXJwbGUtNDAwIGJvcmRlci1wdXJwbGUtNTAwIGhvdmVyOmJvcmRlci1wdXJwbGUtNzAwIHRleHQtc20gYm9yZGVyLTEgdGV4dC13aGl0ZSBweS0xIHB4LTIganVzdGlmeS1jZW50ZXIgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC00MDAgYm9yZGVyLXJlZC01MDAgaG92ZXI6Ym9yZGVyLXJlZC03MDAgdGV4dC1zbSBib3JkZXItMSB0ZXh0LXdoaXRlIHB5LTEgcHgtMiBtbC0xIGp1c3RpZnktY2VudGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSXRlbT5cbiAgICApKVxufVxuXG5MaXN0Qm9vay5wcm9wVHlwZXMgPSB7XG4gICAgYm9va3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0Qm9va1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQnV0dG9uIiwiTGlzdEJvb2siLCJib29rcyIsImdldEJvb2siLCJoYW5kbGVEZWxldGVCb29rIiwiSXRlbSIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYm9vayIsImluZGV4IiwiaDIiLCJsb2FkaW5nIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInRkIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJ0eXBlIiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/book/list.js\n");

/***/ })

});