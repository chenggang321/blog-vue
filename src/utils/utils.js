import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
/**
 * 防抖函数
 * @param method 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
export function debounce(method, delay) {
    let timer = null;
    return function () {
        let self = this,
            args = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(function () {
            method.apply(self, args);
        }, delay);
    }
}

//是否到底部
export function isReachBottom() {
    let bodyScrollHeight = 0
    let documentScrollHeight = 0
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight
    }

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 获取滚动条的高度
    let winHeight = document.documentElement.clientHeight || document.body.clientHeight // 一屏的高度
    let scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight // 获取文档总高度
    return scrollTop >= (parseInt(scrollHeight) - winHeight) - 100
}

// 自动加载文件
export function loadFrames(context) {
    return context.keys().reduce((total, fileName) => {
        let lastName = fileName.split('/').pop().replace(/\.\w+$/, '');
        if (lastName === 'index') lastName = fileName.split('/').splice(-2)[0];
        const componentName = upperFirst(camelCase(lastName));
        const fileContent = context(fileName).default || context(fileName);
        return {
            ...total,
            [componentName]: fileContent
        }
    }, {});
}

export default {
    debounce,
    isReachBottom,
    loadFrames
}
