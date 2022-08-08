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
;// CONCATENATED MODULE: ./packages/util.js
/**
 * 变量序列化为驼峰命名
 * @author pengqiang
 * @date 2021/09/03 10:40
 * @param {String} varibale 序列化变量
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
 * 推送消息
 * @Author pengqiang
 * @Date 2021/07/12 15:34
 * @param {String} type 推送消息类型
 * @param {Object} data 推送消息数据
 * @param {String} origin 推送目标网址
 */
const postMessage = ({ type, data={}, origin='*'}) => {
    if (!window.parent) return
    window.parent.postMessage({
        type,
        data,
    }, window.whiteOrigin || origin)
}

/**
 * 遮罩层
 * @author pengqiang
 * @date 2021/07/27 10:27
 * @param {Boolean} val 显示/隐藏遮罩层
 * @param {String} tagName 选择器标签名
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
                    console.log('报错了', e)
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
 * 消息提醒
 * @author pengqiang
 * @date 2021/07/27 10:27
 * @param {String} type 消息提醒类型，存在四个值*(success, info, warning, fail)
 * @param {String} message 消息文本
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
 * 不同状态 用来显示「成功、警告、消息、错误」类的操作反馈。
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
 * 退出登录
 * @author pengqiang
 * @date 2021/07/27 10:27
 * @param {String} message 退出登录文本提示语
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
 * 路由跳转
 * @author pengqiang
 * @date 2021/07/27 10:28
 * @param {String | Object} path 路由地址或路由对象
 * @param {Boolean} replace 公用组件是否开启单个 multitab 模式
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
 * 路由跳转替换
 * @author pengqiang
 * @date 2021/09/01 11:32
 * @param {String} path 路由地址
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
 * 路由前进
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
 * 路由向前或后退多少步
 * @author pengqiang
 * @date 2021/09/01 11:32
 * @param {n} 向前或后退多少步
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
 * 路由后退
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
 * Modal 模态对话框
 * @author pengqiang
 * @date 2021/07/27 10:28
 * @param {String} title 模态标题
 * @param {Stirng} content 模态内容
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
 * Notification 通知
 * @author pengqiang
 * @date 2021/07/27 10:36
 * @param {String} type 通知图标类型,存在四个值*(success, info, fail, warning)
 * @param {String} title 通知标题
 * @param {Stirng} message 通知描述
 * @param {String} position 通知展示位置
 */
 const post_message_NOTIFY = ({ type, title, message, position='topRight' }) => {
    postMessage({
        type: NOTIFY,
        data: {
            type,
            message: title,
            description: message,
            placement: serialize(position) // 驼峰命名序列化
        }
    })
}

/**
 * 不同状态 用来显示「成功、警告、消息、错误」类的 Notification 通知反馈。
 * @author pengqiang
 * @date 2021/09/03 10:21
 * @param {String} type 通知图标类型,存在四个值*(success, info, fail, warning)
 * @param {String} title 通知标题
 * @param {Stirng} message 通知描述
 * @param {String} position 通知展示位置
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
                placement: serialize(position) // 驼峰命名序列化
            }
        })
    }
})

/**
 * 图片预览
 * @author pengqiang
 * @date 2021/09/03 15:29
 * @param {String} image 预览图片地址
 * @param {Object} options 预览图片 options 配置项
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
 * 重新计算应用高度
 * @author pengqiang
 * @date 2021/08/27 14:43
 * @param {String} 应用id
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
    PREVIEW
});

 // 按需引入
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
        childList: true, // 子元素的变动
        characterData: true, // 节点内容或节点文本的变动
        subtree: true, // 是否将观察器应用于该节点的所有后代节点
        attributes: true, // 属性发生了变化
    })
}
;// CONCATENATED MODULE: ./packages/index.js

const version = "1.0.0"

// const METHODS = require('./post-message.js')
;

// 定义 install 方法, 接收 Vue 作为参数。
const METHODD_NSMES = Object.keys(post_message)
const install = (Vue, origin="*") => {
    // 遍历注册全局组件
    window.whiteOrigin = origin
    METHODD_NSMES.forEach((name) => {
        Vue.config.globalProperties[`$zl_${name.toLocaleLowerCase()}`] = post_message[name]
    })
}

// 判断是否全局引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


 // 按需引入

/* harmony default export */ var packages_0 = ({
    // 导出对象必须有 install，才能被 Vue.use() 方法注册
    install,
    version
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=message-plus.common.js.map