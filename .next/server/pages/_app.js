(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./src/redux/walletReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SET_WALLET = 'SET_WALLET';
const defaultState = {
  walletAddress: ''
};
const walletReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_WALLET:
      return _objectSpread(_objectSpread({}, state), {}, {
        walletData: action.payload
      });

    default:
      return state;
  }
};
const setWallet = walletAddress => ({
  type: SET_WALLET,
  payload: walletAddress
});
;// CONCATENATED MODULE: ./src/redux/index.ts


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  wallet: walletReducer
});
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./src/redux/store.tsx



 // const store = createStore(leaguesReducer, leaguesState, composeWithDevTools());

const store = (0,external_redux_namespaceObject.createStore)(rootReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
/* harmony default export */ const redux_store = (store);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/components-ui/Header/Header.module.scss
var Header_module = __webpack_require__(1603);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/components-ui/Header/img/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.6c166dff.svg","height":115,"width":276});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/components-ui/Dropdown/Dropdown.module.scss
var Dropdown_module = __webpack_require__(319);
var Dropdown_module_default = /*#__PURE__*/__webpack_require__.n(Dropdown_module);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
// EXTERNAL MODULE: ./src/components/Connect/Connect.module.scss
var Connect_module = __webpack_require__(4237);
var Connect_module_default = /*#__PURE__*/__webpack_require__.n(Connect_module);
;// CONCATENATED MODULE: ./src/hooks/useIsMounted.ts

const useIsMounted = () => {
  const {
    0: mounted,
    1: setMounted
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => setMounted(true), []);
  return mounted;
};
;// CONCATENATED MODULE: ./src/hooks/useOutsideClick.ts

const useOutsideClick = (ref, fn) => {
  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      fn();
    }
  };

  (0,external_react_.useEffect)(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
;// CONCATENATED MODULE: ./src/hooks/index.ts


// EXTERNAL MODULE: ./src/components/components-ui/Button/index.tsx
var Button = __webpack_require__(4442);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Connect/index.tsx








const Connect = () => {
  const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
  const isMounted = useIsMounted();
  const {
    disconnect
  } = (0,external_wagmi_.useDisconnect)();
  const {
    activeConnector,
    connectAsync,
    connectors,
    isConnecting,
    pendingConnector
  } = (0,external_wagmi_.useConnect)();

  const disconnectHandler = () => {
    disconnect();
    dispatch(setWallet(''));
  };

  const connectHandler = value => {
    connectAsync(value).then(data => {
      dispatch(setWallet(data.account));
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Connect_module_default()).walletsDropdown,
      children: activeConnector ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: async () => {
            disconnectHandler();
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
            text: "Disconnect",
            btnType: "btnPrimary",
            location: "dropdown"
          })
        })
      }) : connectors.filter(function (x) {
        // @ts-ignore: Object is possibly 'null'.
        return isMounted && x.ready && x.id !== (activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.id);
      }).map(function (x) {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => {
            connectHandler(x);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
            text: x.name,
            pending: isConnecting && x.id === (pendingConnector === null || pendingConnector === void 0 ? void 0 : pendingConnector.id),
            location: "dropdown",
            btnType: "btnPrimary"
          })
        }, x.id);
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/components-ui/Dropdown/index.tsx







const Dropdown = ({
  itemsList,
  isRightPositioned,
  type
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: `${(Dropdown_module_default()).dropdown} ${isRightPositioned ? (Dropdown_module_default()).dropdownRight : ''}`,
      children: type == 'wallet' ? /*#__PURE__*/jsx_runtime_.jsx(Connect, {}) : itemsList.map(item => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (Dropdown_module_default()).dropdownItem,
            children: item.isBlank ? /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: item.link,
              target: "_blank",
              children: item.name
            }) : /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: item.link,
              children: item.name
            })
          }), item.divider && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Dropdown_module_default()).dropdownDivider
          })]
        }, item.id);
      })
    })
  });
};

/* harmony default export */ const components_ui_Dropdown = (Dropdown);
// EXTERNAL MODULE: ./src/components/components-ui/Navbar/Navbar.module.scss
var Navbar_module = __webpack_require__(913);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./src/scripts/header-nav-dropdown.ts
const dropdownData = {
  socials: [{
    name: 'Discord chat',
    link: 'https://discord.com/invite/HdEWdbaPUx',
    isBlank: true,
    id: 1,
    img: 'discord.svg'
  }, {
    name: 'Telegram chat',
    link: 'https://t.me/solidochat',
    isBlank: true,
    id: 2,
    img: 'tel-chat.svg'
  }, {
    name: 'Telegram ANNOUNCEMENTS',
    link: 'https://t.me/solidogames',
    isBlank: true,
    id: 3,
    img: 'telega.svg'
  }, {
    name: 'Twitter',
    link: 'https://twitter.com/solidogames/',
    isBlank: true,
    id: 4,
    img: 'twitter.svg'
  }, {
    name: 'Medium',
    link: 'https://medium.com/solidogames',
    isBlank: true,
    id: 5
  }, {
    name: 'Linked In',
    link: 'https://www.linkedin.com/company/solidogames',
    isBlank: true,
    id: 6,
    img: 'linked.svg'
  }],
  about: [{
    name: 'Solido Games',
    link: '/about',
    isBlank: false,
    id: 1,
    divider: true
  }, {
    name: 'Whitepaper',
    link: 'https://app.solido.games/files/solido.games_whitepaper_v18.pdf',
    isBlank: true,
    id: 2
  }, {
    name: 'Pitch Deck',
    link: 'https://app.solido.games/files/solido.games_pitch.pdf',
    isBlank: true,
    id: 3
  }, {
    name: 'Onepager',
    link: 'https://app.solido.games/files/solido.games_onepager.pdf',
    isBlank: true,
    id: 4
  }, {
    name: 'Litepaper',
    link: 'https://litepaper.solido.games/',
    isBlank: true,
    id: 5
  }, {
    name: 'Dashboard',
    link: '/dashboard',
    isBlank: false,
    id: 6
  }]
};
;// CONCATENATED MODULE: ./src/scripts/helpers.ts
const stripAddress = address => {
  if (address == null) return '';
  return `${address.substr(0, 4)}..${address.substr(address.length - 5, address.length)}`;
};
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./src/components/components-ui/Navbar/index.tsx













const Navbar = ({
  isMobile
}) => {
  const {
    socials,
    about
  } = dropdownData;
  const socialsRef = (0,external_react_.useRef)(null);
  const aboutRef = (0,external_react_.useRef)(null);
  const walletRef = (0,external_react_.useRef)(null);
  const socialsWrapperRef = (0,external_react_.useRef)(null);
  const aboutWrapperRef = (0,external_react_.useRef)(null);
  const walletWrapperRef = (0,external_react_.useRef)(null);
  const {
    0: isLoggedIn,
    1: setIsLoggedIn
  } = (0,external_react_.useState)(false);
  const {
    0: isSocialsDropdownActive,
    1: setIsSocialsDropdownActive
  } = (0,external_react_.useState)(false);
  const {
    0: isAboutDropdownActive,
    1: setIsAboutDropdownActive
  } = (0,external_react_.useState)(false);
  const {
    0: isWalletDropdownActive,
    1: setIsWalletDropdownActive
  } = (0,external_react_.useState)(false); // @ts-ignore: Object is possibly 'null'.

  const walletData = (0,external_react_redux_namespaceObject.useSelector)(state => state.wallet.walletData);
  useOutsideClick(socialsRef, () => {
    setIsSocialsDropdownActive(false);
  });
  useOutsideClick(aboutRef, () => {
    setIsAboutDropdownActive(false);
  });
  useOutsideClick(walletRef, () => {
    setIsWalletDropdownActive(false);
  });

  const hideDropdownOnRoute = () => {
    setIsSocialsDropdownActive(false);
    setIsAboutDropdownActive(false);
    setIsWalletDropdownActive(false);
  };

  (0,external_react_.useEffect)(() => {
    router_default().events.on("routeChangeStart", hideDropdownOnRoute);
    return () => {
      router_default().events.off("routeChangeStart", hideDropdownOnRoute);
    };
  }, []);

  const toggleDropdown = e => {
    // @ts-ignore: Object is possibly 'null'.
    if (socialsWrapperRef.current.contains(e.target) || aboutWrapperRef.current.contains(e.target) || walletWrapperRef.current.contains(e.target)) return;

    switch (e.currentTarget.dataset.type) {
      case 'socials':
        isSocialsDropdownActive ? setIsSocialsDropdownActive(false) : setIsSocialsDropdownActive(true);
        break;

      case 'about':
        isAboutDropdownActive ? setIsAboutDropdownActive(false) : setIsAboutDropdownActive(true);
        break;

      case 'wallet':
        isWalletDropdownActive ? setIsWalletDropdownActive(false) : setIsWalletDropdownActive(true);
        break;
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: `${(Navbar_module_default()).nav} ${isMobile ? (Navbar_module_default()).navMob : ''}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).navItem,
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/nft",
            children: "NFT Marketplace"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).navItem,
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/nft",
            children: "AGGREGATOR"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).navItem,
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/nft",
            children: "Ranking"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).navItem,
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/nft",
            children: "+ Add Game"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: `${(Navbar_module_default()).dropdownNavItem} ${(Navbar_module_default()).navItem}`,
          "data-type": "socials",
          onClick: toggleDropdown,
          ref: socialsRef,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Socials"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            ref: socialsWrapperRef,
            children: isSocialsDropdownActive && /*#__PURE__*/jsx_runtime_.jsx(components_ui_Dropdown, {
              type: "socials",
              itemsList: socials
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: `${(Navbar_module_default()).dropdownNavItem} ${(Navbar_module_default()).navItem}`,
          "data-type": "about",
          onClick: toggleDropdown,
          ref: aboutRef,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "About"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            ref: aboutWrapperRef,
            children: isAboutDropdownActive && /*#__PURE__*/jsx_runtime_.jsx(components_ui_Dropdown, {
              type: "about",
              itemsList: about
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).navItem,
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/nft",
            children: "Leaderboards"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).navItem,
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/nft",
            children: isLoggedIn ? 'Logout' : 'Login'
          })
        }), isLoggedIn && /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/nft",
            children: "My profile"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: `${(Navbar_module_default()).connectWallet} ${(Navbar_module_default()).navItem} ${(Navbar_module_default()).dropdownNavItem}`,
          "data-type": "wallet",
          onClick: toggleDropdown,
          ref: walletRef,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
            text: walletData ? `${stripAddress(walletData)}` : 'Connect Wallet',
            btnType: "btnSecondary"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            ref: walletWrapperRef,
            children: isWalletDropdownActive && /*#__PURE__*/jsx_runtime_.jsx(components_ui_Dropdown, {
              type: "wallet",
              isRightPositioned: !isMobile
            })
          })]
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/components-ui/Header/index.tsx











const Header = () => {
  const burger = (0,external_react_.useRef)(null);
  const {
    0: isSmallScreen,
    1: setIsSmallScreen
  } = (0,external_react_.useState)(false);
  const {
    0: isMenuCollapsed,
    1: setIsMenuCollapsed
  } = (0,external_react_.useState)(false);

  const toggleBurger = () => {
    if (isMenuCollapsed) {
      setIsMenuCollapsed(false); // @ts-ignore: Object is possibly 'null'.

      burger.current.classList.remove((Header_module_default()).active);
    } else {
      setIsMenuCollapsed(true); // @ts-ignore: Object is possibly 'null'.

      burger.current.classList.add((Header_module_default()).active);
    }
  };

  const hideMobileMenu = () => {
    // @ts-ignore: Object is possibly 'null'.
    burger.current.classList.remove((Header_module_default()).active);
    setIsMenuCollapsed(false);
  };

  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  (0,external_react_.useEffect)(() => {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        handleResize();
      }, 150);
    });
    if (window.innerWidth < 1200) setIsSmallScreen(true);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (isSmallScreen) {
      router_default().events.on("routeChangeStart", hideMobileMenu);
      return () => {
        router_default().events.off("routeChangeStart", hideMobileMenu);
      };
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    isMenuCollapsed ? document.body.classList.add('fixed') : document.body.classList.remove('fixed');
  }, [isMenuCollapsed]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("header", {
      className: `${(Header_module_default()).headerWrapper} ${isMenuCollapsed ? (Header_module_default()).headerWrapperBlack : ''}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Header_module_default()).header,
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                layout: "raw",
                src: logo,
                alt: "solido.games",
                className: (Header_module_default()).logo
              })
            })
          }), isSmallScreen ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Header_module_default()).burger,
            onClick: toggleBurger,
            ref: burger,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (Header_module_default()).burgerTop
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (Header_module_default()).burgerMiddle
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (Header_module_default()).burgerBottom
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx(Navbar, {}), isMenuCollapsed && isSmallScreen && /*#__PURE__*/jsx_runtime_.jsx(Navbar, {
            isMobile: true
          })]
        })
      })
    })
  });
};

/* harmony default export */ const components_ui_Header = (Header);
// EXTERNAL MODULE: ./src/components/components-ui/Footer/Footer.module.scss
var Footer_module = __webpack_require__(8781);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./src/components/components-ui/Title/index.tsx
var Title = __webpack_require__(8282);
// EXTERNAL MODULE: ./src/components/components-ui/Form/Form.module.scss
var Form_module = __webpack_require__(4899);
var Form_module_default = /*#__PURE__*/__webpack_require__.n(Form_module);
;// CONCATENATED MODULE: ./src/components/components-ui/Form/index.tsx





const Form = ({
  buttonText,
  formData,
  inputs
}) => {
  const {
    method,
    action
  } = formData;

  const addPlaceholder = e => {
    const input = e.currentTarget;
    input.placeholder = '';
  };

  const removePlaceholder = e => {
    const input = e.currentTarget;
    if (input.value) return;
    input.placeholder = input.dataset.placeholder;
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      id: "subscriptionForm",
      className: (Form_module_default()).form,
      method: method,
      action: action,
      children: [inputs.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx("input", {
          className: (Form_module_default()).input,
          "data-placeholder": item.placeholder,
          placeholder: item.placeholder,
          name: item.name,
          onClick: addPlaceholder,
          onBlur: removePlaceholder
        }, item.id);
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
        text: buttonText,
        location: "form",
        btnType: "btnSecondary"
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/components-ui/Footer/index.tsx









const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: (Footer_module_default()).footer,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
          text: "Solido.games",
          level: 6,
          isLarge: true
        }), /*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
          text: "Stay up to date!",
          level: 2
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-7",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Form, {
              formData: {
                action: '/subscription-add',
                method: 'POST'
              },
              buttonText: "Keep me informed",
              inputs: [{
                id: 1,
                required: true,
                name: 'subscription',
                placeholder: 'Your e-mail for whitelist & updates'
              }]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Footer_module_default()).privacy,
              children: ["By clicking the button you agree to our ", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/privacypolicy",
                children: "Privacy Policy"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-5",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: (Footer_module_default()).links,
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://app.solido.games/files/solido.games_whitepaper_v18.pdf",
                  children: "Whitepaper"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://litepaper.solido.games/",
                  children: "Litepaper"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://app.solido.games/files/solido.games_onepager.pdf",
                  children: "Onepager"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: (Footer_module_default()).links,
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://app.solido.games/files/solido.games_pitch.pdf",
                  children: "Pitch Deck"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/",
                  children: "Home"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "mailto:info@solido.games",
                  children: "info@solido.games"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `row ${(Footer_module_default()).rowFlex}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-7 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Footer_module_default()).reserved,
              children: ["Solido.games \xA9 All Rights Reserved. ", getYear()]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-5 col-md-6",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Footer_module_default()).socials,
              children: dropdownData.socials.map(item => {
                if (item.img) return /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: item.link,
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                    layout: "raw",
                    width: item.name == 'Telegram chat' ? 100 : 57,
                    height: 57,
                    src: `/../../../img/${item.img}`,
                    alt: "solido.games",
                    className: (Footer_module_default()).icon
                  })
                }, item.id);
              })
            })
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const components_ui_Footer = (Footer);
;// CONCATENATED MODULE: external "wagmi/connectors/injected"
const injected_namespaceObject = require("wagmi/connectors/injected");
;// CONCATENATED MODULE: external "wagmi/connectors/walletConnect"
const walletConnect_namespaceObject = require("wagmi/connectors/walletConnect");
;// CONCATENATED MODULE: external "wagmi/connectors/coinbaseWallet"
const coinbaseWallet_namespaceObject = require("wagmi/connectors/coinbaseWallet");
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const chains = external_wagmi_.defaultChains;
const defaultChain = external_wagmi_.chain.mainnet;

const isChainSupported = chainId => chains.some(x => x.id === chainId);

const client = (0,external_wagmi_.createClient)({
  autoConnect: true,

  connectors({
    chainId
  }) {
    var _chains$find;

    const chain = (_chains$find = chains.find(x => x.id === chainId)) !== null && _chains$find !== void 0 ? _chains$find : defaultChain;
    const rpcUrl = chain.rpcUrls.alchemy ? `${chain.rpcUrls.alchemy}/${alchemyId}` : typeof chain.rpcUrls.default === 'string' ? chain.rpcUrls.default : chain.rpcUrls.default[0];
    return [new injected_namespaceObject.InjectedConnector({
      chains
    }), new coinbaseWallet_namespaceObject.CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
        chainId: chain.id,
        jsonRpcUrl: rpcUrl
      }
    }), new walletConnect_namespaceObject.WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
        rpc: {
          [chain.id]: rpcUrl
        }
      }
    })];
  },

  provider({
    chainId
  }) {
    return new external_ethers_.providers.AlchemyProvider(isChainSupported(chainId) ? chainId : defaultChain.id, alchemyId);
  },

  webSocketProvider({
    chainId
  }) {
    return new external_ethers_.providers.AlchemyWebSocketProvider(isChainSupported(chainId) ? chainId : defaultChain.id, alchemyId);
  }

});

const App = ({
  Component,
  pageProps
}) => {
  // const { data } = useAccount();
  // useEffect(() => {
  //   const walletData = localStorage.getItem('wagmi.REACT_QUERY_OFFLINE_CACHE');
  //   console.log(walletData.indexOf('0x'));
  // }, []);
  // const [name, setName] = useState(() => {
  //   // getting stored value
  //   const walletData = JSON.parse(localStorage.getItem('wagmi.REACT_QUERY_OFFLINE_CACHE'));
  //   console.log(walletData);
  //   return initialValue || "";
  // });
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
    store: redux_store,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_wagmi_.Provider, {
      client: client,
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Solido.games"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(components_ui_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "main-content",
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      }), /*#__PURE__*/jsx_runtime_.jsx(components_ui_Footer, {})]
    })
  });
};

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 4237:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 319:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdown": "Dropdown_dropdown__WKuk6",
	"dropdownRight": "Dropdown_dropdownRight__VfR50",
	"dropdownItem": "Dropdown_dropdownItem__ButjI",
	"dropdownDivider": "Dropdown_dropdownDivider__a1HUe"
};


/***/ }),

/***/ 8781:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__rX7_E",
	"rowFlex": "Footer_rowFlex__bmK12",
	"privacy": "Footer_privacy__i00OI",
	"reserved": "Footer_reserved__H_slp",
	"links": "Footer_links__7ZDsS",
	"socials": "Footer_socials__C_7eJ",
	"icon": "Footer_icon__FqUxr"
};


/***/ }),

/***/ 4899:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "Form_form__zDy2Y",
	"input": "Form_input__0XwIh"
};


/***/ }),

/***/ 1603:
/***/ ((module) => {

// Exports
module.exports = {
	"headerWrapper": "Header_headerWrapper__nh1Fa",
	"headerWrapperBlack": "Header_headerWrapperBlack__nD_0V",
	"header": "Header_header__ip24X",
	"logo": "Header_logo__jbh4O",
	"burger": "Header_burger__6bnHJ",
	"active": "Header_active__I7IgE",
	"burgerTop": "Header_burgerTop__LeVg1",
	"burgerMiddle": "Header_burgerMiddle__6CZz1",
	"burgerBottom": "Header_burgerBottom__f6Gas"
};


/***/ }),

/***/ 913:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Navbar_nav__dm_s4",
	"navMob": "Navbar_navMob___m7cM",
	"navItem": "Navbar_navItem__RasTo",
	"dropdownNavItem": "Navbar_dropdownNavItem__BHNds"
};


/***/ }),

/***/ 1982:
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,408], () => (__webpack_exec__(9886)));
module.exports = __webpack_exports__;

})();