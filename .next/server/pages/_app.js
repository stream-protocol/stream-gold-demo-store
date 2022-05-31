/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/App.css */ \"./styles/App.css\");\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__]);\n([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletAdapterNetwork.Devnet;\n    // Generates an RPC endpoint based on the network\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.clusterApiUrl)(network)\n    , [\n        network\n    ]);\n    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --\n    // Only the wallets you configure here will be compiled into your application, and only the dependencies\n    // of wallets that your users connect to will be loaded\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.GlowWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SolflareWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.TorusWalletAdapter(), \n        ]\n    , [\n        network\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.ConnectionProvider, {\n        endpoint: endpoint,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletModalProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/workspace/stream-gold-demo-store/pages/_app.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/stream-gold-demo-store/pages/_app.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/workspace/stream-gold-demo-store/pages/_app.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/stream-gold-demo-store/pages/_app.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBQzRCO0FBQ0c7QUFJaEM7QUFPRTtBQUNRO0FBRUk7QUFDckI7QUFDSjtBQUUzQixNQUFNWSxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQ3hDLHVEQUF1RDtJQUN2RCxNQUFNQyxPQUFPLEdBQUdiLG9GQUEyQjtJQUUzQyxpREFBaUQ7SUFDakQsTUFBTWUsUUFBUSxHQUFHaEIsOENBQU8sQ0FBQyxJQUFNVSw4REFBYSxDQUFDSSxPQUFPLENBQUM7SUFBQSxFQUFFO1FBQUNBLE9BQU87S0FBQyxDQUFDO0lBRWpFLHlHQUF5RztJQUN6Ryx3R0FBd0c7SUFDeEcsdURBQXVEO0lBQ3ZELE1BQU1HLE9BQU8sR0FBR2pCLDhDQUFPLENBQ3JCLElBQU07WUFDSixJQUFJTSxnRkFBb0IsRUFBRTtZQUMxQixJQUFJRCw2RUFBaUIsRUFBRTtZQUN2QixJQUFJRSw4RUFBa0IsRUFBRTtZQUN4QixJQUFJQyxpRkFBcUIsQ0FBQztnQkFBRU0sT0FBTzthQUFFLENBQUM7WUFDdEMsSUFBSUwsOEVBQWtCLEVBQUU7U0FDekI7SUFBQSxFQUNEO1FBQUNLLE9BQU87S0FBQyxDQUNWO0lBRUQscUJBQ0UsOERBQUNYLDRFQUFrQjtRQUFDYSxRQUFRLEVBQUVBLFFBQVE7a0JBQ3BDLDRFQUFDWix3RUFBYztZQUFDYSxPQUFPLEVBQUVBLE9BQU87WUFBRUMsV0FBVztzQkFDM0MsNEVBQUNoQixnRkFBbUI7MEJBQ2xCLDRFQUFDVSxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7OzZCQUFJOzs7Ozt5QkFDUjs7Ozs7cUJBQ1A7Ozs7O2lCQUNFLENBQ3JCO0NBQ0g7QUFFRCxpRUFBZUYsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHNvbGFuYS93YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgV2FsbGV0QWRhcHRlck5ldHdvcmsgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlXCI7XG5pbXBvcnQgeyBXYWxsZXRNb2RhbFByb3ZpZGVyIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcbmltcG9ydCB7XG4gIENvbm5lY3Rpb25Qcm92aWRlcixcbiAgV2FsbGV0UHJvdmlkZXIsXG59IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XG5pbXBvcnQge1xuICBHbG93V2FsbGV0QWRhcHRlcixcbiAgUGhhbnRvbVdhbGxldEFkYXB0ZXIsXG4gIFNsb3BlV2FsbGV0QWRhcHRlcixcbiAgU29sZmxhcmVXYWxsZXRBZGFwdGVyLFxuICBUb3J1c1dhbGxldEFkYXB0ZXIsXG59IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHNcIjtcbmltcG9ydCB7IGNsdXN0ZXJBcGlVcmwgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5cbmltcG9ydCBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvQXBwLmNzc1wiO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIC8vIENhbiBiZSBzZXQgdG8gJ2Rldm5ldCcsICd0ZXN0bmV0Jywgb3IgJ21haW5uZXQtYmV0YSdcbiAgY29uc3QgbmV0d29yayA9IFdhbGxldEFkYXB0ZXJOZXR3b3JrLkRldm5ldDtcblxuICAvLyBHZW5lcmF0ZXMgYW4gUlBDIGVuZHBvaW50IGJhc2VkIG9uIHRoZSBuZXR3b3JrXG4gIGNvbnN0IGVuZHBvaW50ID0gdXNlTWVtbygoKSA9PiBjbHVzdGVyQXBpVXJsKG5ldHdvcmspLCBbbmV0d29ya10pO1xuXG4gIC8vIEBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cyBpbmNsdWRlcyBhbGwgdGhlIGFkYXB0ZXJzIGJ1dCBzdXBwb3J0cyB0cmVlIHNoYWtpbmcgYW5kIGxhenkgbG9hZGluZyAtLVxuICAvLyBPbmx5IHRoZSB3YWxsZXRzIHlvdSBjb25maWd1cmUgaGVyZSB3aWxsIGJlIGNvbXBpbGVkIGludG8geW91ciBhcHBsaWNhdGlvbiwgYW5kIG9ubHkgdGhlIGRlcGVuZGVuY2llc1xuICAvLyBvZiB3YWxsZXRzIHRoYXQgeW91ciB1c2VycyBjb25uZWN0IHRvIHdpbGwgYmUgbG9hZGVkXG4gIGNvbnN0IHdhbGxldHMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIG5ldyBQaGFudG9tV2FsbGV0QWRhcHRlcigpLFxuICAgICAgbmV3IEdsb3dXYWxsZXRBZGFwdGVyKCksXG4gICAgICBuZXcgU2xvcGVXYWxsZXRBZGFwdGVyKCksXG4gICAgICBuZXcgU29sZmxhcmVXYWxsZXRBZGFwdGVyKHsgbmV0d29yayB9KSxcbiAgICAgIG5ldyBUb3J1c1dhbGxldEFkYXB0ZXIoKSxcbiAgICBdLFxuICAgIFtuZXR3b3JrXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENvbm5lY3Rpb25Qcm92aWRlciBlbmRwb2ludD17ZW5kcG9pbnR9PlxuICAgICAgPFdhbGxldFByb3ZpZGVyIHdhbGxldHM9e3dhbGxldHN9IGF1dG9Db25uZWN0PlxuICAgICAgICA8V2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICAgPC9Db25uZWN0aW9uUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwiV2FsbGV0QWRhcHRlck5ldHdvcmsiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJHbG93V2FsbGV0QWRhcHRlciIsIlBoYW50b21XYWxsZXRBZGFwdGVyIiwiU2xvcGVXYWxsZXRBZGFwdGVyIiwiU29sZmxhcmVXYWxsZXRBZGFwdGVyIiwiVG9ydXNXYWxsZXRBZGFwdGVyIiwiY2x1c3RlckFwaVVybCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5ldHdvcmsiLCJEZXZuZXQiLCJlbmRwb2ludCIsIndhbGxldHMiLCJhdXRvQ29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/App.css":
/*!************************!*\
  !*** ./styles/App.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();