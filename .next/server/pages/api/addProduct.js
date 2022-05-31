"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./pages/api/products.json
var products = __webpack_require__(277);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/addProduct.js


function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name , price , image_url , description , filename , hash  } = req.body;
            // Create new product ID based on last product ID
            const maxID = products.reduce((max, product)=>Math.max(max, product.id)
            , 0);
            products.push({
                id: maxID + 1,
                name,
                price,
                image_url,
                description,
                filename,
                hash
            });
            external_fs_default().writeFileSync("./pages/api/products.json", JSON.stringify(products, null, 2));
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [277], () => (__webpack_exec__(823)));
module.exports = __webpack_exports__;

})();