import { examType } from '../services/index'

export default {
    namespace: 'addtext',
    state: {
        examTypedata: []
    },

    effects: {
        *examType({ payload, type }, { call, put }) {
            let data = yield call(examType)
            yield put({
                type: 'getExamtype',
                payload: data.data
            })
        },
        *subType({ payload, type }, { call, put }) {
            
            // let data = yield call(examType)
            // console.log(data.data)
            // yield put({
            //     type: 'getExamtype',
            //     payload: data.data
            // })
        }
    },

    reducers: {
        getExamtype(state,action) {
            return { ...state, examTypedata:action};
        },
    },

};