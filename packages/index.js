
const version = "1.0.0"

// const METHODS = require('./post-message.js')
import METHODS, { 
    postMessage, 
    MASK, 
    MESSAGE, 
    LOGONOUT, 
    PAGE, 
    CONFIRM, 
    NOTIFY,
    REFRESH,
    REPLACE,
    GO,
    BACk,
    FORWARD,
    PREVIEW 
} from './post-message'
import './mutationObserve'
// 定义 install 方法, 接收 Vue 作为参数。
const METHODD_NSMES = Object.keys(METHODS)
const install = (Vue, origin="*") => {
    // 遍历注册全局组件
    window.whiteOrigin = origin
    METHODD_NSMES.forEach((name) => {
        Vue.config.globalProperties[`$zl_${name.toLocaleLowerCase()}`] = METHODS[name]
    })
}

// 判断是否全局引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


export {
    install,
    postMessage,
    MASK, 
    MESSAGE, 
    LOGONOUT, 
    PAGE, 
    CONFIRM, 
    NOTIFY,
    REFRESH,
    REPLACE,
    GO,
    BACk,
    FORWARD,
    PREVIEW 
}; // 按需引入

export default {
    // 导出对象必须有 install，才能被 Vue.use() 方法注册
    install,
    version
}