(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8844)}])},8844:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(5893),a=n(7294),c=n(4051),o=n.n(c),i=n(4400),s=n(6807),u=n.n(s);function l(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){l(c,r,a,o,i,"next",e)}function i(e){l(c,r,a,o,i,"throw",e)}o(void 0)}))}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}var h=(0,i.Ue)("https://ipfs.infura.io:5001/api/v0"),m=function(){var e=(0,a.useState)({name:"",price:"",image_url:"",description:""}),t=e[0],n=e[1],c=(0,a.useState)({}),i=c[0],s=c[1],l=(0,a.useState)(!1),p=l[0],m=l[1];function _(){return(_=d(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),n=t.target.files,e.prev=2,console.log(n[0]),e.next=6,h.add(n[0]);case 6:r=e.sent,s({filename:n[0].name,hash:r.path}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Error uploading file: ",e.t0);case 13:m(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var x=function(){var e=d(o().mark((function e(){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=f({},t,i),e.next=4,fetch("../api/addProduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,200===r.status?alert("Product added!"):alert("Unable to add product: ",a.error),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)("div",{className:u().background_blur,children:(0,r.jsx)("div",{className:u().create_product_container,children:(0,r.jsxs)("div",{className:u().create_product_form,children:[(0,r.jsx)("header",{className:u().header,children:(0,r.jsx)("h1",{children:"Create Product"})}),(0,r.jsxs)("div",{className:u().form_container,children:[(0,r.jsx)("input",{type:"file",className:u().input,accept:".zip,.rar,.7zip",placeholder:"Emojis",onChange:function(e){return _.apply(this,arguments)}}),null!=i.name&&(0,r.jsx)("p",{className:"file-name",children:i.filename}),(0,r.jsxs)("div",{className:u().flex_row,children:[(0,r.jsx)("input",{className:u().input,type:"text",placeholder:"Product Name",onChange:function(e){n(f({},t,{name:e.target.value}))}}),(0,r.jsx)("input",{className:u().input,type:"text",placeholder:"0.01 USDC",onChange:function(e){n(f({},t,{price:e.target.value}))}})]}),(0,r.jsx)("div",{className:u().flex_row,children:(0,r.jsx)("input",{className:u().input,type:"url",placeholder:"Image URL ex: https://i.imgur.com/rVD8bjt.png",onChange:function(e){n(f({},t,{image_url:e.target.value}))}})}),(0,r.jsx)("textarea",{className:u().text_area,placeholder:"Description here...",onChange:function(e){n(f({},t,{description:e.target.value}))}}),(0,r.jsx)("button",{className:u().button,onClick:function(){x()},disabled:p,children:"Create Product"})]})]})})})},_=n(8155),x=n(2637),v=n(6938),b=n(444),j=function(e,t){var n=(0,a.useState)(null),r=n[0],c=n[1];return(0,a.useEffect)((function(){c("https://gateway.ipfscdn.io/ipfs/".concat(e,"?filename=").concat(t))}),[]),r},y=function(e){var t=e.hash,n=e.filename,a=j(t,n);return(0,r.jsx)("div",{children:a?(0,r.jsx)("div",{className:"download-component",children:(0,r.jsx)("a",{className:"download-button",href:a,download:n,children:"Download"})}):(0,r.jsx)("p",{children:"Downloading file..."})})};function g(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){g(c,r,a,o,i,"next",e)}function i(e){g(c,r,a,o,i,"throw",e)}o(void 0)}))}}var P=function(){var e=w(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("adding order ",t,"To DB"),e.next=3,fetch("../api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=w(o().mark((function e(t,n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("../api/orders?buyer=".concat(t.toString()));case 2:if(200!==(r=e.sent).status){e.next=11;break}return e.next=6,r.json();case 6:if(!((a=e.sent).length>0)){e.next=11;break}if(!a.find((function(e){return e.buyer===t.toString()&&e.itemID===n}))){e.next=11;break}return e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=w(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("../api/fetchItem",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({itemID:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(8764).Buffer;function C(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){C(c,r,a,o,i,"next",e)}function i(e){C(c,r,a,o,i,"throw",e)}o(void 0)}))}}var T="Initial",I="Submitted",D="Paid";function E(e){var t=e.itemID,n=(0,v.Rc)().connection,c=(0,v.Os)(),i=c.publicKey,s=c.sendTransaction,u=(0,a.useMemo)((function(){return _.RG.generate().publicKey}),[]),l=(0,a.useState)(null),d=l[0],p=l[1],f=(0,a.useState)(!1),h=f[0],m=f[1],j=(0,a.useState)(T),g=j[0],w=j[1],C=(0,a.useMemo)((function(){return{buyer:i.toString(),orderID:u.toString(),itemID:t}}),[i,u,t]),E=function(){var e=O(o().mark((function e(){var t,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("../api/createTransaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)});case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,a=_.YW.from(k.from(r.transaction,"base64")),e.prev=8,e.next=11,s(a,n);case 11:c=e.sent,console.log("Transaction sent: https://solscan.io/tx/".concat(c,"?cluster=devnet")),w(I),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),console.error(e.t0);case 19:return e.prev=19,m(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[8,16,19,22]])})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){function e(){return(e=O(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(i,t);case 2:if(!e.sent){e.next=9;break}return w(D),e.next=7,S(t);case 7:n=e.sent,p(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,t]),(0,a.useEffect)((function(){if(g===I){m(!0);var e=setInterval(O(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,x.f1)(n,u);case 3:"confirmed"!==(r=t.sent).confirmationStatus&&"finalized"!==r.confirmationStatus||(clearInterval(e),w(D),P(C),m(!1),alert("Thank you for your purchase!")),t.next=11;break;case 7:if(t.prev=7,t.t0=t.catch(0),a=t.t0,!(null!=(c=x.Eb)&&"undefined"!==typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](a):a instanceof c)){t.next=11;break}return t.abrupt("return",null);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}var a,c}),t,null,[[0,7,11,14]])}))),1e3);return function(){clearInterval(e)}}function r(){return(r=O(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:n=e.sent,p(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g===D&&function(e){r.apply(this,arguments)}(t)}),[g]),i?h?(0,r.jsx)(b.Nx,{color:"gray"}):(0,r.jsx)("div",{children:d?(0,r.jsx)(y,{hash:d.hash,filename:d.filename}):(0,r.jsx)("button",{disabled:h,className:"buy-button",onClick:E,children:"Buy now"})}):(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:"You need to connect your wallet to make transactions"})})}var U=n(5287),z=n.n(U);function B(e){var t=e.product,n=t.id,a=t.name,c=t.price,o=t.description,i=t.image_url;return(0,r.jsxs)("div",{className:z().product_container,children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:z().product_image,src:i,alt:a})}),(0,r.jsxs)("div",{className:z().product_details,children:[(0,r.jsxs)("div",{className:z().product_text,children:[(0,r.jsx)("div",{className:z().product_title,children:a}),(0,r.jsx)("div",{className:z().product_description,children:o})]}),(0,r.jsxs)("div",{className:z().product_action,children:[(0,r.jsxs)("div",{className:z().product_price,children:[c," USDC"]}),(0,r.jsx)(E,{itemID:n})]})]})]})}var G=n(9008),K=n.n(G);function R(){return(0,r.jsxs)(K(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,r.jsx)("title",{children:" StreamPay Store "})," ",(0,r.jsx)("meta",{name:"title",content:"StreamPay Store"}),(0,r.jsx)("meta",{name:"description",content:"Buy tokenized gold on store using StreamPay!"})]})}var q=n(8348),J=n(4155),L=function(){var e=(0,v.Os)().publicKey,t=!!e&&e.toString()===J.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY,n=(0,a.useState)(!1),c=n[0],o=n[1],i=(0,a.useState)([]),s=i[0],u=i[1];(0,a.useEffect)((function(){e&&fetch("/api/fetchProducts").then((function(e){return e.json()})).then((function(e){u(e),console.log("Products",e)}))}),[e]);return(0,r.jsxs)("div",{className:"App",children:[(0,r.jsx)(R,{}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("header",{className:"header-container",children:[(0,r.jsx)("p",{className:"header",children:" Stream Gold Store "})," ",(0,r.jsx)("p",{className:"sub-text",children:"The Stream Protocol is about tokenizing the asset gold in which there is transparency as to the property rights and redemption of the Gold. Stream Token gives customers the benefits of actual physical ownership of specific gold bars with the speed and mobility of a digital asset."}),t&&(0,r.jsxs)("button",{className:"create-product-button",onClick:function(){return o(!c)},children:[" ",c?"Close":"Create Product"," "]})," "]}),(0,r.jsxs)("main",{children:[" ",c&&(0,r.jsx)(m,{})," ",e?(0,r.jsxs)("div",{className:"products-container",children:[" ",s.map((function(e){return(0,r.jsx)(B,{product:e},e.id)}))," "]}):(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:"https://i.imgur.com/UmH9Fko.png",alt:"Stream Protocol"}),(0,r.jsx)("div",{className:"button-container",children:(0,r.jsx)(q.aD,{className:"cta-button connect-wallet-button"})})," "]})," "]})," "]})," "]})}},6807:function(e){e.exports={background_blur:"CreateProduct_background_blur__8kqme",create_product_container:"CreateProduct_create_product_container__2OG8s",create_product_form:"CreateProduct_create_product_form__m8gs3",button:"CreateProduct_button__IrDqA","bg-pan-left":"CreateProduct_bg-pan-left__iKtGR",header:"CreateProduct_header__3lvqZ",form_container:"CreateProduct_form_container__58_z_",input:"CreateProduct_input__f2xnQ",flex_row:"CreateProduct_flex_row__ua2Pz",flex_full_row:"CreateProduct_flex_full_row__2lnVt",text_area:"CreateProduct_text_area__bF1av"}},5287:function(e){e.exports={product_container:"Product_product_container__iJuKc",product_image:"Product_product_image__qqLZh",product_details:"Product_product_details__B_XU1",product_text:"Product_product_text__R2de0",product_title:"Product_product_title__fxi1x",product_description:"Product_product_description__nuGaH",product_action:"Product_product_action__iNFpt",product_price:"Product_product_price__Qoijh"}},4001:function(){},2611:function(){},8795:function(){}},function(e){e.O(0,[431,435,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);