/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BACk": function() { return /* reexport */ BACk; },
  "CONFIRM": function() { return /* reexport */ CONFIRM; },
  "FORWARD": function() { return /* reexport */ post_message_FORWARD; },
  "GO": function() { return /* reexport */ post_message_GO; },
  "LOGONOUT": function() { return /* reexport */ post_message_LOGONOUT; },
  "MASK": function() { return /* reexport */ post_message_MASK; },
  "MESSAGE": function() { return /* reexport */ post_message_MESSAGE; },
  "NOTIFY": function() { return /* reexport */ post_message_NOTIFY; },
  "PAGE": function() { return /* reexport */ post_message_PAGE; },
  "PREVIEW": function() { return /* reexport */ PREVIEW; },
  "REFRESH": function() { return /* reexport */ REFRESH; },
  "REPLACE": function() { return /* reexport */ post_message_REPLACE; },
  "SKIP": function() { return /* reexport */ SKIP; },
  "default": function() { return /* binding */ entry_lib; },
  "install": function() { return /* reexport */ install; },
  "postMessage": function() { return /* reexport */ postMessage; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./packages/observe-types.js
const SETHEIGHT = 'setHeight'
const GETTOP = 'getTop'
const MESSAGE = 'message'
const APP = 'app'
const MASK = 'mask'
const LOGONOUT = 'logonOut'
const PAGE = 'page'
const MODAL = 'modal'
const NOTIFY = 'notification'
const REPLACE = 'replace'
const GO = 'go'
const BACK = 'back'
const FORWARD = 'forward'
const PREVIEWIMAGE = 'previewImage'
const APPLICATIONSKIP = 'applicationSkip'
;// CONCATENATED MODULE: ./packages/util.js
/**
 * ??????????????????????????????
 * @author pengqiang
 * @date 2021/09/03 10:40
 * @param {String} varibale ???????????????
*/
const serialize = function(variable) {
    let arr = variable.split('-')
    let result = ''
    arr.forEach((ele,index) => {
        for(let i = 0; i < ele.length; i++) {
            let item = ele[i]
            if (index !== 0 && i == 0) {
                item = ele[i].toUpperCase()
            }
            result = result + item
        }
    })
    return result
}
;// CONCATENATED MODULE: ./packages/post-message.js



/**
 * ????????????
 * @Author pengqiang
 * @Date 2021/07/12 15:34
 * @param {String} type ??????????????????
 * @param {Object} data ??????????????????
 * @param {String} origin ??????????????????
 */
const postMessage = ({ type, data={}, origin='*'}) => {
    if (!window.parent) return
    window.parent.postMessage({
        type,
        data,
    }, window.whiteOrigin || origin)
}

/**
 * ?????????
 * @author pengqiang
 * @date 2021/07/27 10:27
 * @param {Boolean} val ??????/???????????????
 * @param {String} tagName ??????????????????
 */
const post_message_MASK = (val, tagName='.el-dialog') => {
    if (val) {
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
            postMessage({ type: GETTOP })
            window.addEventListener(MESSAGE, (event) => {
                if (event.origin !== window.whiteOrigin) return
                const { scrollTop, clientHeight } = event.data
                const $dialogWrapper = document.querySelector(tagName)
                const $dialogBody = $dialogWrapper.querySelector('.el-dialog__body')
                const $dialog = $dialogWrapper.firstChild
                const bodyHeight = document.body.clientHeight
                try {
                    $dialogWrapper.style.overflow = 'hidden'
                    console.log(bodyHeight, clientHeight-160)
                    $dialogBody.style.cssText = `max-height: ${ bodyHeight > (clientHeight-160) ? clientHeight - 360 : bodyHeight - 200 }px;overflow-y: auto;`
                    $dialog.style.cssText = `margin: 0 atuo;top:${scrollTop > 20 ? scrollTop - 40 : scrollTop}px;width: ${$dialog.style.width};`
                } catch(e) {
                    console.log('?????????', e)
                }
            }, { once: true })
        })
    }
    postMessage({
        type: MASK,
        data: {
            showMask: val
        }
    })
    
}

/**
 * ????????????
 * @author pengqiang
 * @date 2021/07/27 10:27
 * @param {String} type ????????????????????????????????????*(success, info, warning, fail)
 * @param {String} message ????????????
 */
const post_message_MESSAGE = ({ type, message }) => {
    postMessage({
        type: MESSAGE,
        data: {
            type,
            message,
        }
    })
}

/**
 * ???????????? ????????????????????????????????????????????????????????????????????????
 * @author pengqiang
 * @date 2021/08/11 09:58
 */ 
const MESSAGE_TYPE = ['success', 'info', 'warning', 'loading', 'error', 'warn']
MESSAGE_TYPE.forEach((type) => {
    post_message_MESSAGE[type] = (message) => {
        postMessage({
            type: MESSAGE,
            data: {
                type,
                message,
            }
        })
    }
})

/**
 * ????????????
 * @author pengqiang
 * @date 2021/07/27 10:27
 * @param {String} message ???????????????????????????
 */
 const post_message_LOGONOUT = ({ message }) => {
    postMessage({
        type: LOGONOUT,
        data: {
            message
        }
    })
}

/**
 * ????????????
 * @author pengqiang
 * @date 2021/07/27 10:28
 * @param {String | Object} path ???????????????????????????
 * @param {Boolean} replace ?????????????????????????????? multitab ??????
 */
 const post_message_PAGE = (path, replace=false) => {
    postMessage({
        type: PAGE,
        data: {
            path,
            replace
        }
    })
}

/**
 * ??????????????????
 * @author pengqiang
 * @date 2021/09/01 11:32
 * @param {String} path ????????????
 */
 const post_message_REPLACE = (path) => {
    postMessage({
        type: REPLACE,
        data: {
            path
        }
    })
}

/**
 * ????????????
 * @author pengqiang
 * @date 2021/09/01 11:32
 */
 const post_message_FORWARD = () => {
    postMessage({
        type: FORWARD,
        data: {}
    })
}

/**
 * ??????????????????????????????
 * @author pengqiang
 * @date 2021/09/01 11:32
 * @param {n} ????????????????????????
 */
 const post_message_GO = (n=-1) => {
    postMessage({
        type: GO,
        data: {
            n
        }
    })
}

/**
 * ????????????
 * @author pengqiang
 * @date 2021/09/01 11:32
 */
 const BACk = () => {
    postMessage({
        type: BACK,
        data: {}
    })
}

/**
 * ?????????????????????
 * @author pengqiang
 * @param {String} code ???????????? code
 * @date 2022/08/16 14:27
*/
const SKIP = (path, data) => {
    postMessage({
        type: APPLICATIONSKIP,
        data: {
            path,
            ...data
        }
    })
}

/**
 * Modal ???????????????
 * @author pengqiang
 * @date 2021/07/27 10:28
 * @param {String} title ????????????
 * @param {Stirng} content ????????????
 * @param {Object} options { confirmButtonText, cancelButtonText }
 */
 const CONFIRM = (content, title, { confirmButtonText, cancelButtonText }) => {
    postMessage({
        type: MODAL,
        data: {
            title,
            content,
            confirmButtonText,
            cancelButtonText
        }
    })
    return new Promise((resolve, reject) => {
        window.resolve = resolve
        window.reject = reject
        window.addEventListener(MESSAGE, messageCallback, { once: true })
    })
}

const messageCallback = function(event) {
    if (event.origin !== window.whiteOrigin) return
    const { code } = event.data
    if (code === 200) {
        window.resolve()
    } else {
        window.reject('cancel')
    }
    setTimeout(() => { 
        window.resolve = null
        window.reject = null 
    }, 1)
}

/**
 * Notification ??????
 * @author pengqiang
 * @date 2021/07/27 10:36
 * @param {String} type ??????????????????,???????????????*(success, info, fail, warning)
 * @param {String} title ????????????
 * @param {Stirng} message ????????????
 * @param {String} position ??????????????????
 */
 const post_message_NOTIFY = ({ type, title, message, position='topRight' }) => {
    postMessage({
        type: NOTIFY,
        data: {
            type,
            message: title,
            description: message,
            placement: serialize(position) // ?????????????????????
        }
    })
}

/**
 * ???????????? ????????????????????????????????????????????????????????? Notification ???????????????
 * @author pengqiang
 * @date 2021/09/03 10:21
 * @param {String} type ??????????????????,???????????????*(success, info, fail, warning)
 * @param {String} title ????????????
 * @param {Stirng} message ????????????
 * @param {String} position ??????????????????
 */ 
 const NOTIFY_TYPE = ['success', 'info', 'warning', 'error']
 NOTIFY_TYPE.forEach((type) => {
    post_message_NOTIFY[type] = ({ title, message, position='topRight' } ) => {
        postMessage({
            type: NOTIFY,
            data: {
                type,
                message: title,
                description: message,
                placement: serialize(position) // ?????????????????????
            }
        })
    }
})

/**
 * ????????????
 * @author pengqiang
 * @date 2021/09/03 15:29
 * @param {String} image ??????????????????
 * @param {Object} options ???????????? options ?????????
 */
 const PREVIEW = (image, options={}) => {
    postMessage({
        type: PREVIEWIMAGE,
        data: {
            image,
            ...options
        }
    })
}

/**
 * ????????????????????????
 * @author pengqiang
 * @date 2021/08/27 14:43
 * @param {String} ??????id
*/
const REFRESH = (tagName=APP) => {
    ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
        const $tar = document.getElementById(tagName)
        const $height = window.getComputedStyle($tar).getPropertyValue('height')
        postMessage({ type: SETHEIGHT, data: { height: $height } })
    })
}

/* harmony default export */ var post_message = ({
    MASK: post_message_MASK, 
    MESSAGE: post_message_MESSAGE, 
    LOGONOUT: post_message_LOGONOUT, 
    PAGE: post_message_PAGE, 
    CONFIRM, 
    NOTIFY: post_message_NOTIFY,
    REFRESH,
    REPLACE: post_message_REPLACE,
    GO: post_message_GO,
    BACk,
    FORWARD: post_message_FORWARD,
    PREVIEW,
    SKIP
});

 // ????????????
;// CONCATENATED MODULE: ./packages/mutationObserve.js


window.onload = function() {
    var recordHeight = 0
    var $tar = document.getElementById('app');
    var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;
    var mutationObserver = new MutationObserver(function () {
        let height = window.getComputedStyle($tar).getPropertyValue('height');
        if (height === recordHeight) return;
        recordHeight = height
        postMessage({type: SETHEIGHT, data: { height }})
    })
    mutationObserver.observe($tar, {
        childList: true, // ??????????????????
        characterData: true, // ????????????????????????????????????
        subtree: true, // ?????????????????????????????????????????????????????????
        attributes: true, // ?????????????????????
    })
}
;// CONCATENATED MODULE: ./packages/index.js

const version = "2.0.3"

// const METHODS = require('./post-message.js')
;

// ?????? install ??????, ?????? Vue ???????????????
const METHODD_NSMES = Object.keys(post_message)
const install = (Vue, origin="*") => {
    // ????????????????????????
    window.whiteOrigin = origin
    METHODD_NSMES.forEach((name) => {
        Vue.config.globalProperties[`$zl_${name.toLocaleLowerCase()}`] = post_message[name]
    })
}

// ??????????????????????????????
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


 // ????????????

/* harmony default export */ var packages_0 = ({
    // ????????????????????? install???????????? Vue.use() ????????????
    install,
    version
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=message-plus.common.js.map