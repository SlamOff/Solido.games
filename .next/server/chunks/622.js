exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 7622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NFTItem)
});

// EXTERNAL MODULE: ./src/components/components-ui/NFTItem/NFTItem.module.scss
var NFTItem_module = __webpack_require__(5305);
var NFTItem_module_default = /*#__PURE__*/__webpack_require__.n(NFTItem_module);
;// CONCATENATED MODULE: ./src/components/components-ui/NFTItem/item-1.png
/* harmony default export */ const item_1 = ({"src":"/_next/static/media/item-1.c114eb7f.png","height":179,"width":318,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAc0lEQVR42mNgZmLmYONkYGDQN7CysXFlYGDg4eJhQAbOTgF29v4IvqaKmqqCiqmenpezFwMDt7KURHZyWkRgMIOPq0diRLS7g5u3Z9j82QsaK2tKc/JiwyMZNJTVAj29bCyderIzN82YFhUWbWtiamtuCQAYjRkHwLXWgQAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
;// CONCATENATED MODULE: ./src/contract/SolidoCards.json
const SolidoCards_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newuri","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]}');
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: ./src/components/components-ui/Title/index.tsx
var Title = __webpack_require__(8282);
// EXTERNAL MODULE: ./src/components/components-ui/Button/index.tsx
var Button = __webpack_require__(4442);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/components-ui/NFTItem/index.tsx












const NftItem = ({
  nft,
  isSinglePage
}) => {
  const {
    title,
    id
  } = nft;
  let wei = external_ethers_.utils.parseEther(0.02.toString());
  const {
    data,
    isError,
    isLoading,
    write: mint
  } = (0,external_wagmi_.useContractWrite)({
    addressOrName: '0xFCAc1201575A1C482Fa982C066f57DB91f29DF85',
    contractInterface: SolidoCards_namespaceObject.Mt
  }, 'mint', {
    args: [1, 1]
  });

  const _mint = async () => {
    console.log('MINT!');
    mint();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: isSinglePage ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (NFTItem_module_default()).itemSingle,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
          text: title,
          subText: {
            text: `#${id}`,
            color: '#6c757d'
          },
          level: 1
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-sm-6 col-lg-5",
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              layout: "raw",
              src: item_1,
              alt: "solido.games nft"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-sm-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Current price"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (NFTItem_module_default()).price,
              children: "0.02 BNB"
            }), /*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
              text: "Buy now",
              location: "nft-single",
              btnType: "btnPrimary"
            })]
          })]
        })]
      })
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (NFTItem_module_default()).item,
      children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        layout: "raw",
        src: item_1,
        alt: "solido.games nft"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (NFTItem_module_default()).info,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
          text: title,
          level: 3
        }), /*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
          text: "MASD",
          level: 4
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (NFTItem_module_default()).status,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (NFTItem_module_default()).label,
            children: "Verified"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `${(NFTItem_module_default()).label} ${(NFTItem_module_default()).id}`,
            children: ["#", id]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
          text: "0.02 BNB",
          location: "nft-list",
          btnType: "btnPrimary"
        })]
      })]
    })
  });
};

/* harmony default export */ const NFTItem = (NftItem);

/***/ }),

/***/ 5305:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "NFTItem_item__6q3FD",
	"single": "NFTItem_single__hEhAi",
	"btn": "NFTItem_btn__2t2Qk",
	"name": "NFTItem_name__dVZud",
	"id": "NFTItem_id__TGhfR",
	"info": "NFTItem_info__RFyyo",
	"status": "NFTItem_status__UgIcM",
	"label": "NFTItem_label__LPrew",
	"itemSingle": "NFTItem_itemSingle___VruN",
	"price": "NFTItem_price__Qfzd6"
};


/***/ })

};
;