import { examQuestions } from '../services/index'
export default {
    // 命名空间
    namespace: 'exam',
    // 模块的状态
    state: {
        Examquestions:[]
    },
    // 异步操作
    effects: {
        *ExamQuestions({ payload }, { call, put }) {
            let data = yield call(examQuestions)
            yield put({
                type: "exao",
                payload: data.data
            })
        },
    },
        // 同步操作
        reducers: {
            exao(state, { payload }) {
                return { ...state, Examquestions: payload }
            },
        }
    }
