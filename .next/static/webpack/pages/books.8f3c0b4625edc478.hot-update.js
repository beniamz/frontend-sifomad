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

/***/ "./src/pages/books.js":
/*!****************************!*\
  !*** ./src/pages/books.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_user_Desktop_Learn_Next_frontend_sifomad_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_user_Desktop_Learn_Next_frontend_sifomad_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_Desktop_Learn_Next_frontend_sifomad_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_book_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/book/form */ \"./src/components/book/form.js\");\n/* harmony import */ var _components_book_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/book/list */ \"./src/components/book/list.js\");\n/* harmony import */ var _components_book_customHook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/book/customHook */ \"./src/components/book/customHook.js\");\n/* harmony import */ var _components_book_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/book/schema */ \"./src/components/book/schema.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar BookPage = function() {\n    _s();\n    var formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({\n        initialValues: {\n            name: \"\",\n            description: \"\",\n            price: 0\n        },\n        validationSchema: _components_book_schema__WEBPACK_IMPORTED_MODULE_8__.bookSchema,\n        onSubmit: function() {\n            var _ref = _asyncToGenerator(C_Users_user_Desktop_Learn_Next_frontend_sifomad_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values, param) {\n                var resetForm;\n                return C_Users_user_Desktop_Learn_Next_frontend_sifomad_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            resetForm = param.resetForm;\n                            try {\n                                if (values.id) {\n                                    handleUpdateBooks(values);\n                                } else {\n                                    handleAddBook(values);\n                                }\n                                resetForm();\n                            } catch (error) {\n                                console.log(error);\n                            }\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function(values, _) {\n                return _ref.apply(this, arguments);\n            };\n        }()\n    });\n    var ref = (0,_components_book_customHook__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(formik), books = ref.books, bookLoading = ref.bookLoading, bookError = ref.bookError, getBook = ref.getBook, handleAddBook = ref.handleAddBook, handleUpdateBooks = ref.handleUpdateBooks, handleDeleteBook = ref.handleDeleteBook;\n    if (bookError) return bookError;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"Books\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Sifomad - Books\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"py-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"max-w-12xl mx-auto sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-white overflow-hidden shadow-sm sm:rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"card-header\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        className: \"font-semibold py-3 px-5 text-xl text-gray-800 leading-tight\",\n                                        children: \"Form Add Books\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_book_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        handleAddBook: handleAddBook,\n                                        formik: formik\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"p-6 bg-white border-b border-gray-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        className: \"font-semibold py-3 text-xl text-gray-800 leading-tight\",\n                                        children: \"List of Books\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"flex px-3 justify-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: \"#\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: \"Nama\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: \"Description\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: \"Price\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: \"Action\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 33\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_book_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        books: books,\n                                        getBook: getBook,\n                                        handleDeleteBook: handleDeleteBook\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Learn Next\\\\frontend-sifomad\\\\src\\\\pages\\\\books.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, _this);\n};\n_s(BookPage, \"96ZuFrA8JM2Xzi/qPykHU38wwWw=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_2__.useFormik,\n        _components_book_customHook__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = BookPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookPage);\nvar _c;\n$RefreshReg$(_c, \"BookPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYm9va3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNvQjtBQUMxQjtBQUNpQjtBQUNBO0FBQ0s7QUFDRzs7QUFFckQsSUFBTU8sUUFBUSxHQUFHLFdBQU07O0lBQ25CLElBQU1DLE1BQU0sR0FBR1IsaURBQVMsQ0FBQztRQUNyQlMsYUFBYSxFQUFFO1lBQ1hDLElBQUksRUFBRSxFQUFFO1lBQ1JDLFdBQVcsRUFBRSxFQUFFO1lBQ2ZDLEtBQUssRUFBRSxDQUFDO1NBQ1g7UUFDREMsZ0JBQWdCLEVBQUVQLCtEQUFVO1FBQzVCUSxRQUFRO3VCQUFFLCtMQUFPQyxNQUFNLFNBQW9CO29CQUFoQkMsU0FBUzs7Ozs0QkFBVEEsU0FBUyxTQUFUQSxTQUFTOzRCQUNoQyxJQUFJO2dDQUNBLElBQUlELE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO29DQUNYQyxpQkFBaUIsQ0FBQ0gsTUFBTSxDQUFDO2lDQUM1QixNQUFNO29DQUNISSxhQUFhLENBQUNKLE1BQU0sQ0FBQztpQ0FDeEI7Z0NBRURDLFNBQVMsRUFBRTs2QkFDZCxDQUFDLE9BQU9JLEtBQUssRUFBRTtnQ0FDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQzs2QkFDckI7Ozs7OzthQUNKOzRCQVpnQkwsTUFBTTs7OztLQWExQixDQUFDO0lBRUYsSUFRSVYsR0FBZSxHQUFmQSx1RUFBTyxDQUFDRyxNQUFNLENBQUMsRUFQZmUsS0FBSyxHQU9MbEIsR0FBZSxDQVBma0IsS0FBSyxFQUNMQyxXQUFXLEdBTVhuQixHQUFlLENBTmZtQixXQUFXLEVBQ1hDLFNBQVMsR0FLVHBCLEdBQWUsQ0FMZm9CLFNBQVMsRUFDVEMsT0FBTyxHQUlQckIsR0FBZSxDQUpmcUIsT0FBTyxFQUNQUCxhQUFhLEdBR2JkLEdBQWUsQ0FIZmMsYUFBYSxFQUNiRCxpQkFBaUIsR0FFakJiLEdBQWUsQ0FGZmEsaUJBQWlCLEVBQ2pCUyxnQkFBZ0IsR0FDaEJ0QixHQUFlLENBRGZzQixnQkFBZ0I7SUFHcEIsSUFBSUYsU0FBUyxFQUFFLE9BQU9BLFNBQVM7SUFFL0IscUJBQ0ksOERBQUN4QixxRUFBUztRQUNOMkIsTUFBTSxnQkFDRiw4REFBQ0MsSUFBRTtZQUFDQyxTQUFTLEVBQUMsbURBQW1EO3NCQUFDLE9BRWxFO3lDQUFLOzswQkFFVCw4REFBQzVCLGtEQUFJOzBCQUNELDRFQUFDNkIsT0FBSzs4QkFBQyxpQkFBZTs7Ozs7eUJBQVE7Ozs7O3FCQUMzQjswQkFFUCw4REFBQ0MsS0FBRztnQkFBQ0YsU0FBUyxFQUFDLE1BQU07MEJBQ2pCLDRFQUFDRSxLQUFHO29CQUFDRixTQUFTLEVBQUMsb0NBQW9DOzhCQUMvQyw0RUFBQ0UsS0FBRzt3QkFBQ0YsU0FBUyxFQUFDLGtEQUFrRDs7MENBQzdELDhEQUFDRSxLQUFHO2dDQUFDRixTQUFTLEVBQUMsYUFBYTs7a0RBQ3hCLDhEQUFDRCxJQUFFO3dDQUFDQyxTQUFTLEVBQUMsNkRBQTZEO2tEQUFDLGdCQUU1RTs7Ozs7NkNBQUs7a0RBQ0wsOERBQUMzQiw2REFBUTt3Q0FDTGdCLGFBQWEsRUFBRUEsYUFBYTt3Q0FDNUJYLE1BQU0sRUFBRUEsTUFBTTs7Ozs7NkNBQ2hCOzs7Ozs7cUNBQ0E7MENBRU4sOERBQUN3QixLQUFHO2dDQUFDRixTQUFTLEVBQUMsdUNBQXVDOztrREFDbEQsOERBQUNELElBQUU7d0NBQUNDLFNBQVMsRUFBQyx3REFBd0Q7a0RBQUMsZUFFdkU7Ozs7OzZDQUFLO2tEQUNMLDhEQUFDRSxLQUFHO3dDQUFDRixTQUFTLEVBQUMsMkJBQTJCOzswREFDdEMsOERBQUNHLEdBQUM7MERBQUMsR0FBQzs7Ozs7cURBQUk7MERBQ1IsOERBQUNBLEdBQUM7MERBQUMsTUFBSTs7Ozs7cURBQUk7MERBQ1gsOERBQUNBLEdBQUM7MERBQUMsYUFBVzs7Ozs7cURBQUk7MERBQ2xCLDhEQUFDQSxHQUFDOzBEQUFDLE9BQUs7Ozs7O3FEQUFJOzBEQUNaLDhEQUFDQSxHQUFDOzBEQUFDLFFBQU07Ozs7O3FEQUFJOzs7Ozs7NkNBQ1g7a0RBQ04sOERBQUM3Qiw2REFBUTt3Q0FDTG1CLEtBQUssRUFBRUEsS0FBSzt3Q0FDWkcsT0FBTyxFQUFFQSxPQUFPO3dDQUNoQkMsZ0JBQWdCLEVBQUVBLGdCQUFnQjs7Ozs7NkNBQ3BDOzs7Ozs7cUNBQ0E7Ozs7Ozs2QkFDSjs7Ozs7eUJBQ0o7Ozs7O3FCQUNKOzs7Ozs7YUFDRSxDQUNmO0NBQ0o7R0FqRktwQixRQUFROztRQUNLUCw2Q0FBUztRQThCcEJLLG1FQUFPOzs7QUEvQlRFLEtBQUFBLFFBQVE7QUFtRmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jvb2tzLmpzP2JiNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IEFwcExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0cy9BcHBMYXlvdXQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQm9va0Zvcm0gZnJvbSAnQC9jb21wb25lbnRzL2Jvb2svZm9ybSdcbmltcG9ydCBCb29rTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvYm9vay9saXN0J1xuaW1wb3J0IHVzZUJvb2sgZnJvbSAnQC9jb21wb25lbnRzL2Jvb2svY3VzdG9tSG9vaydcbmltcG9ydCB7IGJvb2tTY2hlbWEgfSBmcm9tICdAL2NvbXBvbmVudHMvYm9vay9zY2hlbWEnXG5cbmNvbnN0IEJvb2tQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgcHJpY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IGJvb2tTY2hlbWEsXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyAodmFsdWVzLCB7IHJlc2V0Rm9ybSB9KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVXBkYXRlQm9va3ModmFsdWVzKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFkZEJvb2sodmFsdWVzKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGJvb2tzLFxuICAgICAgICBib29rTG9hZGluZyxcbiAgICAgICAgYm9va0Vycm9yLFxuICAgICAgICBnZXRCb29rLFxuICAgICAgICBoYW5kbGVBZGRCb29rLFxuICAgICAgICBoYW5kbGVVcGRhdGVCb29rcyxcbiAgICAgICAgaGFuZGxlRGVsZXRlQm9vayxcbiAgICB9ID0gdXNlQm9vayhmb3JtaWspXG5cbiAgICBpZiAoYm9va0Vycm9yKSByZXR1cm4gYm9va0Vycm9yXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwTGF5b3V0XG4gICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ncmF5LTgwMCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIEJvb2tzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIH0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U2lmb21hZCAtIEJvb2tzPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0xMnhsIG14LWF1dG8gc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1zbSBzbTpyb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgcHktMyBweC01IHRleHQteGwgdGV4dC1ncmF5LTgwMCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcm0gQWRkIEJvb2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9va0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkQm9vaz17aGFuZGxlQWRkQm9va31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWlrPXtmb3JtaWt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBweS0zIHRleHQteGwgdGV4dC1ncmF5LTgwMCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3Qgb2YgQm9va3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweC0zIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4jPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OYW1hPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXNjcmlwdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9va0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9va3M9e2Jvb2tzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRCb29rPXtnZXRCb29rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVCb29rPXtoYW5kbGVEZWxldGVCb29rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZVxuIl0sIm5hbWVzIjpbInVzZUZvcm1payIsIkFwcExheW91dCIsIkhlYWQiLCJCb29rRm9ybSIsIkJvb2tMaXN0IiwidXNlQm9vayIsImJvb2tTY2hlbWEiLCJCb29rUGFnZSIsImZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInZhbHVlcyIsInJlc2V0Rm9ybSIsImlkIiwiaGFuZGxlVXBkYXRlQm9va3MiLCJoYW5kbGVBZGRCb29rIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYm9va3MiLCJib29rTG9hZGluZyIsImJvb2tFcnJvciIsImdldEJvb2siLCJoYW5kbGVEZWxldGVCb29rIiwiaGVhZGVyIiwiaDIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/books.js\n");

/***/ })

});