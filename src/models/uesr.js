import { Questions } from '../services/index'
export default {
    // 命名空间
    namespace: 'user',
    // 模块的状态
    state: {
        questions: []
    },
    // 异步操作
    effects: {
        *getDatas({ payload }, { call, put }) {
            let data = yield call(Questions)
            yield put({
                type: "exo",
                payload: data.data
            })
        },
        
    },
        // 同步操作
        reducers: {
            exo(state, { payload }) {
                return { ...state, questions: payload }
            },
        }
    }
