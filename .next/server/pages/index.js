(() => {
var exports = {};
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 424:
/***/ ((module) => {

// Exports
module.exports = {
	"background_blur": "CreateProduct_background_blur__8kqme",
	"create_product_container": "CreateProduct_create_product_container__2OG8s",
	"create_product_form": "CreateProduct_create_product_form__m8gs3",
	"button": "CreateProduct_button__IrDqA",
	"bg-pan-left": "CreateProduct_bg-pan-left__iKtGR",
	"header": "CreateProduct_header__3lvqZ",
	"form_container": "CreateProduct_form_container__58_z_",
	"input": "CreateProduct_input__f2xnQ",
	"flex_row": "CreateProduct_flex_row__ua2Pz",
	"flex_full_row": "CreateProduct_flex_full_row__2lnVt",
	"text_area": "CreateProduct_text_area__bF1av"
};


/***/ }),

/***/ 103:
/***/ ((module) => {

// Exports
module.exports = {
	"product_container": "Product_product_container__iJuKc",
	"product_image": "Product_product_image__qqLZh",
	"product_details": "Product_product_details__B_XU1",
	"product_text": "Product_product_text__R2de0",
	"product_title": "Product_product_title__fxi1x",
	"product_description": "Product_product_description__nuGaH",
	"product_action": "Product_product_action__iNFpt",
	"product_price": "Product_product_price__Qoijh"
};


/***/ }),

/***/ 70:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Buy)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_pay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(932);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(247);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(223);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _IpfsDownload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(713);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(851);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_pay__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__]);
([_solana_pay__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const STATUS = {
    Initial: "Initial",
    Submitted: "Submitted",
    Paid: "Paid"
};
function Buy({ itemID: itemID1  }) {
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useConnection)();
    const { publicKey , sendTransaction  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();
    const orderID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Keypair.generate().publicKey
    , []); // Public key used to identify the order
    const { 0: item1 , 1: setItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(STATUS.Initial);
    const order = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            buyer: publicKey.toString(),
            orderID: orderID.toString(),
            itemID: itemID1
        })
    , [
        publicKey,
        orderID,
        itemID1
    ]);
    // Fetch the transaction object from the server (done to avoid tampering)
    const processTransaction = async ()=>{
        setLoading(true);
        const txResponse = await fetch("../api/createTransaction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        });
        const txData = await txResponse.json();
        const tx = _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction.from(Buffer.from(txData.transaction, "base64"));
        // Attempt to send the transaction to the network
        try {
            const txHash = await sendTransaction(tx, connection);
            console.log(`Transaction sent: https://solscan.io/tx/${txHash}?cluster=devnet`);
            setStatus(STATUS.Submitted);
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Check if this address already has already purchased this item
        // If so, fetch the item and set paid to true
        // Async function to avoid blocking the UI
        async function checkPurchased() {
            const purchased = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__/* .hasPurchased */ .H_)(publicKey, itemID1);
            if (purchased) {
                setStatus(STATUS.Paid);
                const item = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__/* .fetchItem */ .iY)(itemID1);
                setItem(item);
            }
        }
        checkPurchased();
    }, [
        publicKey,
        itemID1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Check if transaction was confirmed
        if (status === STATUS.Submitted) {
            setLoading(true);
            const interval = setInterval(async ()=>{
                try {
                    // Look for our orderID on the blockchain
                    const result = await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_3__.findReference)(connection, orderID);
                    if (result.confirmationStatus === "confirmed" || result.confirmationStatus === "finalized") {
                        clearInterval(interval);
                        setStatus(STATUS.Paid);
                        (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__/* .addOrder */ .fS)(order);
                        setLoading(false);
                        alert("Thank you for your purchase!");
                    }
                } catch (e) {
                    if (e instanceof _solana_pay__WEBPACK_IMPORTED_MODULE_3__.FindReferenceError) {
                        return null;
                    }
                } finally{
                    setLoading(false);
                }
            }, 1000);
            return ()=>{
                clearInterval(interval);
            };
        }
        async function getItem(itemID) {
            const item = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__/* .fetchItem */ .iY)(itemID);
            setItem(item);
        }
        if (status === STATUS.Paid) {
            getItem(itemID1);
        }
    }, [
        status
    ]);
    if (!publicKey) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: " You need to connect your wallet to make transactions "
                }),
                " "
            ]
        });
    }
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__.InfinitySpin, {
            color: "gray"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            " ",
            " ",
            item1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IpfsDownload__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                hash: item1.hash,
                filename: item1.filename
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: loading,
                className: "buy-button",
                onClick: processTransaction,
                children: "Buy now "
            }),
            " "
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(424);
/* harmony import */ var _styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ipfs_http_client__WEBPACK_IMPORTED_MODULE_2__]);
ipfs_http_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const client = (0,ipfs_http_client__WEBPACK_IMPORTED_MODULE_2__.create)("https://ipfs.infura.io:5001/api/v0");
const CreateProduct = ()=>{
    const { 0: newProduct , 1: setNewProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        price: "",
        image_url: "",
        description: ""
    });
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: uploading , 1: setUploading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    async function onChange(e) {
        setUploading(true);
        const files = e.target.files;
        try {
            console.log(files[0]);
            const added = await client.add(files[0]);
            setFile({
                filename: files[0].name,
                hash: added.path
            });
        } catch (error) {
            console.log("Error uploading file: ", error);
        }
        setUploading(false);
    }
    const createProduct = async ()=>{
        try {
            // Combine product data and file.name
            const product = {
                ...newProduct,
                ...file
            };
            const response = await fetch("../api/addProduct", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });
            const data = await response.json();
            if (response.status === 200) {
                alert("Product added!");
            } else {
                alert("Unable to add product: ", data.error);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().background_blur),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().create_product_container),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().create_product_form),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Create Product"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().form_container),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                                accept: ".zip,.rar,.7zip",
                                placeholder: "Emojis",
                                onChange: onChange
                            }),
                            file.name != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "file-name",
                                children: file.filename
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().flex_row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                                        type: "text",
                                        placeholder: "Product Name",
                                        onChange: (e)=>{
                                            setNewProduct({
                                                ...newProduct,
                                                name: e.target.value
                                            });
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                                        type: "text",
                                        placeholder: "0.01 USDC",
                                        onChange: (e)=>{
                                            setNewProduct({
                                                ...newProduct,
                                                price: e.target.value
                                            });
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().flex_row),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                                    type: "url",
                                    placeholder: "Image URL ex: https://i.imgur.com/rVD8bjt.png",
                                    onChange: (e)=>{
                                        setNewProduct({
                                            ...newProduct,
                                            image_url: e.target.value
                                        });
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_area),
                                placeholder: "Description here...",
                                onChange: (e)=>{
                                    setNewProduct({
                                        ...newProduct,
                                        description: e.target.value
                                    });
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_CreateProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                                onClick: ()=>{
                                    createProduct();
                                },
                                disabled: uploading,
                                children: "Create Product"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateProduct);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HeadComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Head.js


function HeadComponent() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1.0, width=device-width"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: " Stream Pay Store "
            }),
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: "Stream Pay Store"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "Buy items on my store using Stream Pay!"
            })
        ]
    });
};


/***/ }),

/***/ 713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ IpfsDownload)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./hooks/useIPFS.js

const useIPFS = (hash, filename)=>{
    const { 0: file , 1: setFile  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setFile(`https://gateway.ipfscdn.io/ipfs/${hash}?filename=${filename}`);
    }, []);
    return file;
};
/* harmony default export */ const hooks_useIPFS = (useIPFS);

;// CONCATENATED MODULE: ./components/IpfsDownload.js


const IPFSDownload = ({ hash , filename  })=>{
    const file = hooks_useIPFS(hash, filename);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: file ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "download-component",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "download-button",
                href: file,
                download: filename,
                children: "Download"
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Downloading file..."
        })
    });
};
/* harmony default export */ const IpfsDownload = (IPFSDownload);


/***/ }),

/***/ 38:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103);
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Buy__WEBPACK_IMPORTED_MODULE_1__]);
_Buy__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Product({ product  }) {
    const { id , name , price , description , image_url  } = product;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_image),
                    src: image_url,
                    alt: name
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_details),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_text),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_title),
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_description),
                                children: description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_action),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_price),
                                children: [
                                    price,
                                    " USDC"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buy__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                itemID: id
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H_": () => (/* binding */ hasPurchased),
/* harmony export */   "fS": () => (/* binding */ addOrder),
/* harmony export */   "iY": () => (/* binding */ fetchItem)
/* harmony export */ });
const addOrder = async (order)=>{
    console.log("adding order ", order, "To DB");
    await fetch("../api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    });
};
// Returns true if a given public key has purchased an item before
const hasPurchased = async (publicKey, itemID)=>{
    // Send a GET request with the public key as a parameter
    const response = await fetch(`../api/orders?buyer=${publicKey.toString()}`);
    // If response code is 200
    if (response.status === 200) {
        const json = await response.json();
        // If orders is not empty
        if (json.length > 0) {
            // Check if there are any records with this buyer and item ID
            const order1 = json.find((order)=>order.buyer === publicKey.toString() && order.itemID === itemID
            );
            if (order1) {
                return true;
            }
        }
    }
    return false;
};
const fetchItem = async (itemID)=>{
    const response = await fetch("../api/fetchItem", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            itemID
        })
    });
    const item = await response.json();
    return item;
};


/***/ }),

/***/ 369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(765);
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(213);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CreateProduct__WEBPACK_IMPORTED_MODULE_2__, _components_Product__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__]);
([_components_CreateProduct__WEBPACK_IMPORTED_MODULE_2__, _components_Product__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const renderNotConnectedContainer = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "https://media0.giphy.cohttps://giphy.com/gifs/money-bar-gold-xULW8MIrFV8pyZjChim/media/LveMkKaN3KWcg/giphy.gif",
                alt: "gold bar"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "button-container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__.WalletMultiButton, {
                    className: "cta-button connect-wallet-button"
                })
            }),
            " "
        ]
    })
;
const App = ()=>{
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();
    const isOwner = publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY : false;
    const { 0: creating , 1: setCreating  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (publicKey) {
            fetch(`/api/fetchProducts`).then((response)=>response.json()
            ).then((data)=>{
                setProducts(data);
                console.log("Products", data);
            });
        }
    }, [
        publicKey
    ]);
    const renderItemBuyContainer = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "products-container",
            children: [
                " ",
                products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        product: product
                    }, product.id)
                ),
                " "
            ]
        })
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "App",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Head__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "header-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "header",
                                children: " Stream Gold Store "
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "sub-text",
                                children: "The Stream Protocol is about tokenizing the asset gold in which there is transparency as to the property rights and redemption of the Gold.Stream Token gives customers the benefits of actual physical ownership of specific gold bars with the speed and mobility of a digital asset. "
                            }),
                            isOwner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "create-product-button",
                                onClick: ()=>setCreating(!creating)
                                ,
                                children: [
                                    " ",
                                    creating ? "Close" : "Create Product",
                                    " "
                                ]
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        children: [
                            " ",
                            creating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CreateProduct__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                            " ",
                            publicKey ? renderItemBuyContainer() : renderNotConnectedContainer(),
                            " "
                        ]
                    }),
                    " "
                ]
            }),
            " "
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 223:
/***/ ((module) => {

"use strict";
module.exports = require("react-loader-spinner");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 932:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/pay");;

/***/ }),

/***/ 247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 0:
/***/ ((module) => {

"use strict";
module.exports = import("ipfs-http-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(369));
module.exports = __webpack_exports__;

})();