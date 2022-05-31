(() => {
var exports = {};
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: ./pages/api/orders.json
var orders = __webpack_require__(648);
var orders_default = /*#__PURE__*/__webpack_require__.n(orders);
;// CONCATENATED MODULE: ./pages/api/orders.js
// This API endpoint will let users POST data to add records and GET to retrieve


function get(req, res) {
    const { buyer  } = req.query;
    // Check if this address has any orders
    const buyerOrders = orders_default().filter((order)=>order.buyer === buyer
    );
    if (buyerOrders.length === 0) {
        // 204 = successfully processed the request, not returning any content
        res.status(204).send();
    } else {
        res.status(200).json(buyerOrders);
    }
}
async function post(req, res) {
    console.log("Received add order request", req.body);
    // Add new order to orders.json
    try {
        const newOrder = req.body;
        // If this address has not purchased this item, add order to orders.json
        if (!orders_default().find((order)=>order.buyer === newOrder.buyer.toString() && order.itemID === newOrder.itemID
        )) {
            orders_default().push(newOrder);
            await (0,promises_namespaceObject.writeFile)("./pages/api/orders.json", JSON.stringify((orders_default()), null, 2));
            res.status(200).json((orders_default()));
        } else {
            res.status(400).send("Order already exists");
        }
    } catch (err) {
        res.status(400).send(err);
    }
}
async function handler(req, res) {
    switch(req.method){
        case "GET":
            get(req, res);
            break;
        case "POST":
            await post(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
};


/***/ }),

/***/ 648:
/***/ (() => {

throw new Error("Module parse failed: Unexpected token / in JSON at position 0 while parsing near '// This API endpoint...'\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\nSyntaxError: Unexpected token / in JSON at position 0 while parsing near '// This API endpoint...'\n    at JSON.parse (<anonymous>)\n    at parseJson (/workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:15303:17)\n    at JsonParser.parse (/workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:96822:7)\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:49922:26\n    at processResult (/workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:49635:11)\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:49695:5\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:141000:3\n    at iterateNormalLoaders (/workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:140826:10)\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:140817:4\n    at /workspace/stream-gold-demo-store/node_modules/next/dist/compiled/webpack/bundle5.js:49669:15");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(694));
module.exports = __webpack_exports__;

})();