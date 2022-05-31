(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./pages/api/products.json
var products = __webpack_require__(277);
var products_default = /*#__PURE__*/__webpack_require__.n(products);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/addProduct.js


function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name , price , image_url , description , filename , hash  } = req.body;
            // Create new product ID based on last product ID
            const maxID = products_default().reduce((max, product)=>Math.max(max, product.id)
            , 0);
            products_default().push({
                id: maxID + 1,
                name,
                price,
                image_url,
                description,
                filename,
                hash
            });
            external_fs_default().writeFileSync("./pages/api/products.json", JSON.stringify((products_default()), null, 2));
            res.status(200).send({
                status: "ok"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "error adding product"
            });
            return;
        }
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
var __webpack_exports__ = (__webpack_exec__(823));
module.exports = __webpack_exports__;

})();