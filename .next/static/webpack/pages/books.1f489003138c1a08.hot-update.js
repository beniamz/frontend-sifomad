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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_form_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/button */ \"./src/components/form/button.js\");\nvar _this = undefined;\n\n\n\n\nvar ListBook = function(param1) {\n    var _books = param1.books, books = _books === void 0 ? [] : _books, getBook = param1.getBook, handleDeleteBook = param1.handleDeleteBook;\n    var _this1 = _this;\n    var Item = function(param) {\n        var children = param.children;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full border-2 border-gray-700 px-3 py-3 mb-2 rounded-lg\",\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, _this1);\n    };\n    return books.map(function(book1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-6 bg-white border-b border-gray-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"font-semibold py-3 text-xl text-gray-800 leading-tight\",\n                    children: \"List of Teachers\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                    lineNumber: 16,\n                    columnNumber: 29\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"hover:table-auto w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"px-4 py-2\",\n                                        children: \"ID\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 45\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"px-4 py-2\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 45\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"px-4 py-2\",\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 45\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"px-4 py-2\",\n                                        children: \"Action\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 45\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                lineNumber: 22,\n                                columnNumber: 41\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                            lineNumber: 21,\n                            columnNumber: 37\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: books.map(function(book) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border px-4 py-2\",\n                                            children: book.id\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 49\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border px-4 py-2\",\n                                            children: book.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 49\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border px-4 py-2\",\n                                            children: book.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 49\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border px-4 py-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"flex-shrink-0 bg-purple-500 hover:bg-purple-400 border-purple-500 hover:border-purple-700 text-sm border-1 text-white py-1 px-2 justify-center rounded\",\n                                                    type: \"button\",\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 53\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"flex-shrink-0 bg-red-500 hover:bg-red-400 border-red-500 hover:border-red-700 text-sm border-1 text-white py-1 px-2 ml-1 justify-center rounded\",\n                                                    type: \"button\",\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 53\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 49\n                                        }, _this1)\n                                    ]\n                                }, book.id, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 45\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                            lineNumber: 33,\n                            columnNumber: 37\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n                    lineNumber: 20,\n                    columnNumber: 33\n                }, _this1),\n                \")}\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\components\\\\book\\\\list.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, _this1);\n    });\n};\n_c = ListBook;\nListBook.propTypes = {\n    books: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListBook);\nvar _c;\n$RefreshReg$(_c, \"ListBook\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib29rL2xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDUztBQUNXO0FBRTdDLElBQU1HLFFBQVEsR0FBRyxpQkFBK0M7d0JBQTVDQyxLQUFLLEVBQUxBLEtBQUssdUJBQUcsRUFBRSxXQUFFQyxPQUFPLFVBQVBBLE9BQU8sRUFBRUMsZ0JBQWdCLFVBQWhCQSxnQkFBZ0I7O0lBQ3JELElBQU1DLElBQUksR0FBRyxnQkFBa0I7WUFBZkMsUUFBUSxTQUFSQSxRQUFRO1FBQ3BCLHFCQUNJLDhEQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQywyREFBMkQ7c0JBQ3JFRixRQUFROzs7OztrQkFDUCxDQUNUO0tBQ0o7SUFFRCxPQUFPSixLQUFLLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxLQUFJOzZCQUNsQiw4REFBQ0gsS0FBRztZQUFDQyxTQUFTLEVBQUMsdUNBQXVDOzs4QkFDbEMsOERBQUNHLElBQUU7b0JBQUNILFNBQVMsRUFBQyx3REFBd0Q7OEJBQUMsa0JBRXZFOzs7OzswQkFBSzs4QkFFRCw4REFBQ0ksT0FBSztvQkFBQ0osU0FBUyxFQUFDLHlCQUF5Qjs7c0NBQ3RDLDhEQUFDSyxPQUFLO3NDQUNGLDRFQUFDQyxJQUFFOztrREFDQyw4REFBQ0MsSUFBRTt3Q0FBQ1AsU0FBUyxFQUFDLFdBQVc7a0RBQUMsSUFBRTs7Ozs7OENBQUs7a0RBQ2pDLDhEQUFDTyxJQUFFO3dDQUFDUCxTQUFTLEVBQUMsV0FBVztrREFBQyxNQUFJOzs7Ozs4Q0FBSztrREFDbkMsOERBQUNPLElBQUU7d0NBQUNQLFNBQVMsRUFBQyxXQUFXO2tEQUFDLGFBRTFCOzs7Ozs4Q0FBSztrREFDTCw4REFBQ08sSUFBRTt3Q0FBQ1AsU0FBUyxFQUFDLFdBQVc7a0RBQUMsUUFFMUI7Ozs7OzhDQUFLOzs7Ozs7c0NBQ0o7Ozs7O2tDQUNEO3NDQUNSLDhEQUFDUSxPQUFLO3NDQUNEZCxLQUFLLENBQUNPLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTtxREFDWCw4REFBQ0ksSUFBRTs7c0RBQ0MsOERBQUNHLElBQUU7NENBQUNULFNBQVMsRUFBQyxrQkFBa0I7c0RBQzNCRSxJQUFJLENBQUNRLEVBQUU7Ozs7O2tEQUNQO3NEQUNMLDhEQUFDRCxJQUFFOzRDQUFDVCxTQUFTLEVBQUMsa0JBQWtCO3NEQUMzQkUsSUFBSSxDQUFDUyxJQUFJOzs7OztrREFDVDtzREFDTCw4REFBQ0YsSUFBRTs0Q0FBQ1QsU0FBUyxFQUFDLGtCQUFrQjtzREFDM0JFLElBQUksQ0FBQ1UsV0FBVzs7Ozs7a0RBQ2hCO3NEQUNMLDhEQUFDSCxJQUFFOzRDQUFDVCxTQUFTLEVBQUMsa0JBQWtCOzs4REFDNUIsOERBQUNhLFFBQU07b0RBQ0hiLFNBQVMsRUFBQyx3SkFBd0o7b0RBQ2xLYyxJQUFJLEVBQUMsUUFBUTs4REFBQyxNQUVsQjs7Ozs7MERBQVM7OERBQ1QsOERBQUNELFFBQU07b0RBQ0hiLFNBQVMsRUFBQyxpSkFBaUo7b0RBQzNKYyxJQUFJLEVBQUMsUUFBUTs4REFBQyxRQUVsQjs7Ozs7MERBQVM7Ozs7OztrREFDUjs7bUNBckJBWixJQUFJLENBQUNRLEVBQUU7Ozs7MENBc0JYOzZCQUNSLENBQUM7Ozs7O2tDQUNFOzs7Ozs7MEJBQ0o7Z0JBQUEsSUFFaEI7Ozs7OztrQkFBTTtLQUN6QixDQUFDO0NBQ0w7QUEzREtqQixLQUFBQSxRQUFRO0FBNkRkQSxRQUFRLENBQUNzQixTQUFTLEdBQUc7SUFDakJyQixLQUFLLEVBQUVILG9FQUEwQjtDQUNwQztBQUVELCtEQUFlRSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Jvb2svbGlzdC5qcz9mMzU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2Zvcm0vYnV0dG9uJ1xuXG5jb25zdCBMaXN0Qm9vayA9ICh7IGJvb2tzID0gW10sIGdldEJvb2ssIGhhbmRsZURlbGV0ZUJvb2sgfSkgPT4ge1xuICAgIGNvbnN0IEl0ZW0gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS03MDAgcHgtMyBweS0zIG1iLTIgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGJvb2tzLm1hcCgoYm9vaykgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBweS0zIHRleHQteGwgdGV4dC1ncmF5LTgwMCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3Qgb2YgVGVhY2hlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiaG92ZXI6dGFibGUtYXV0byB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2tzLm1hcChib29rID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Ym9vay5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2submFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGJnLXB1cnBsZS01MDAgaG92ZXI6YmctcHVycGxlLTQwMCBib3JkZXItcHVycGxlLTUwMCBob3Zlcjpib3JkZXItcHVycGxlLTcwMCB0ZXh0LXNtIGJvcmRlci0xIHRleHQtd2hpdGUgcHktMSBweC0yIGp1c3RpZnktY2VudGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNDAwIGJvcmRlci1yZWQtNTAwIGhvdmVyOmJvcmRlci1yZWQtNzAwIHRleHQtc20gYm9yZGVyLTEgdGV4dC13aGl0ZSBweS0xIHB4LTIgbWwtMSBqdXN0aWZ5LWNlbnRlciByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICApKVxufVxuXG5MaXN0Qm9vay5wcm9wVHlwZXMgPSB7XG4gICAgYm9va3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0Qm9va1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQnV0dG9uIiwiTGlzdEJvb2siLCJib29rcyIsImdldEJvb2siLCJoYW5kbGVEZWxldGVCb29rIiwiSXRlbSIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYm9vayIsImgyIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInRkIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJ0eXBlIiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/book/list.js\n");

/***/ })

});