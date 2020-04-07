import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger';
import {loadFrames} from "../utils/utils"; // 修改日志

// 批量导入modules中内容
const modules = loadFrames(require.context('./modules'));


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules,
    plugins: debug ? [createLogger()] : [], // 开发环境下显示vuex的状态修改
})
