(() => {
var exports = {};
exports.id = 624;
exports.ids = [624];
exports.modules = {

/***/ 831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 215:
/***/ ((module) => {

"use strict";
module.exports = require("bignumber.js");

/***/ }),

/***/ 57:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/spl-token");;

/***/ }),

/***/ 364:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ 108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(364);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(277);
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_products_json__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__]);
([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const usdcAddress = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("8k1JM5Cd6Hz7G6Jsq1FSzgRYPyS4RFj9k11Uvt5bgWRP");
const sellerAddress = "39weE1KE7cdAg2tjCQtTeH5eEe77RxcmFwXWJgTgdYx4";
const sellerPublicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(sellerAddress);
const createTransaction = async (req, res)=>{
    try {
        const { buyer , orderID , itemID  } = req.body;
        if (!buyer) {
            res.status(400).json({
                message: "Missing buyer address"
            });
        }
        if (!orderID) {
            res.status(400).json({
                message: "Missing order ID"
            });
        }
        const itemPrice = _products_json__WEBPACK_IMPORTED_MODULE_4___default().find((item)=>item.id === itemID
        ).price;
        if (!itemPrice) {
            res.status(404).json({
                message: "Item not found. please check item ID"
            });
        }
        const bigAmount = bignumber_js__WEBPACK_IMPORTED_MODULE_3___default()(itemPrice);
        const buyerPublicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(buyer);
        const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletAdapterNetwork.Devnet;
        const endpoint = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.clusterApiUrl)(network);
        const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(endpoint);
        const buyerUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.getAssociatedTokenAddress)(usdcAddress, buyerPublicKey);
        const shopUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.getAssociatedTokenAddress)(usdcAddress, sellerPublicKey);
        const { blockhash  } = await connection.getLatestBlockhash("finalized");
        // This is new, we're getting the mint address of the token we want to transfer
        const usdcMint = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.getMint)(connection, usdcAddress);
        const tx = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction({
            recentBlockhash: blockhash,
            feePayer: buyerPublicKey
        });
        // Here we're creating a different type of transfer instruction
        const transferInstruction = (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.createTransferCheckedInstruction)(buyerUsdcAddress, usdcAddress, shopUsdcAddress, buyerPublicKey, bigAmount.toNumber() * 10 ** (await usdcMint).decimals, usdcMint.decimals // The token could have any number of decimals
        );
        // The rest remains the same :)
        transferInstruction.keys.push({
            pubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(orderID),
            isSigner: false,
            isWritable: false
        });
        tx.add(transferInstruction);
        const serializedTransaction = tx.serialize({
            requireAllSignatures: false
        });
        const base64 = serializedTransaction.toString("base64");
        res.status(200).json({
            transaction: base64
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "error creating transaction"
        });
        return;
    }
};
function handler(req, res) {
    if (req.method === "POST") {
        createTransaction(req, res);
    } else {
        res.status(405).end();
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = (__webpack_exec__(108));
module.exports = __webpack_exports__;

})();