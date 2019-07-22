import { } from '../services/index'
export default {
    // 命名空间
    namespace: 'global',
    // 模块的状态
    state: {
        locale: navigator.language.indexOf('zh') !== -1 ? 'zh' : 'en'
    },
    // 异步操作
    effects: {

    },
    // 同步操作
    reducers: {
        updateLocale(state, { payload }) {
            return { ...state, locale: payload }
        }
    }
}