(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_products_json__WEBPACK_IMPORTED_MODULE_0__);

function handler(req, res) {
    if (req.method === "GET") {
        // Create a copy of products without the hashes and filenames
        const productsNoHashes = _products_json__WEBPACK_IMPORTED_MODULE_0___default().map((product)=>{
            const { hash , filename , ...rest } = product;
            return rest;
        });
        res.status(200).json(productsNoHashes);
    } else {
        res.status(405).send(`Method ${req.method} not allowed`);
    }
};


/***/ }),

/***/ 277:
/***/ (() => {

throw new Error("Module parse failed: Unexpected end of JSON input while parsing near '...vdTJGUTKBqT11KCHS5\"\n}'\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\nSyntaxError: Unexpected end of JSON input while parsing near '...vdTJGUTKBqT11KCHS5\"\n}'\n    at JSON.parse (<anonymous>)\n    at parseJson (/workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:15303:17)\n    at JsonParser.parse (/workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:96822:7)\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:49922:26\n    at processResult (/workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:49635:11)\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:49695:5\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:141000:3\n    at iterateNormalLoaders (/workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:140826:10)\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:140817:4\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:49669:15");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(961));
module.exports = __webpack_exports__;

})();