"use strict";
(() => {
var exports = {};
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);

async function handler(req, res) {
    if (req.method === "POST") {
        const { itemID  } = req.body;
        if (!itemID) {
            res.status(400).send("Missing itemID");
        }
        for(let i = 0; i < _products_json__WEBPACK_IMPORTED_MODULE_0__.length; i++){
            let found = false;
            if (_products_json__WEBPACK_IMPORTED_MODULE_0__[i].id === itemID) {
                const { hash , filename  } = _products_json__WEBPACK_IMPORTED_MODULE_0__[i];
                found = true;
                res.status(200).send({
                    hash,
                    filename
                });
                break;
            }
            if (i === _products_json__WEBPACK_IMPORTED_MODULE_0__.length - 1 && !found) {
                res.status(404).send("Item not found");
            }
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
var __webpack_exports__ = __webpack_require__.X(0, [277], () => (__webpack_exec__(946)));
module.exports = __webpack_exports__;

})();