import { getexamType, getSubject, examList, listDetail} from '../services/index';

export default {
    namespace: 'exam',
    state: {
        examTypedata: [],
        subjectdata: [],
        examListdata: [],
        listDetaildata: []
    },

    effects: {
        //考试类型
        *getexamType({ payload, type }, { call, put }) {
            let data = yield call(getexamType)
            yield put({
                type: 'getexamtype',
                payload: data.data
            })
        },
        //课程类型
        *getSubject({ payload }, { call, put }) {
            let data = yield call(getSubject)
            yield put({
                type: 'getsubject',
                payload: data.data
            })
        },
        //试卷列表
        *examList({ payload }, { call, put }) {
            let data = yield call(examList)
            yield put({
                type: 'examlist',
                payload: data
            })
        },
        //列表详情
        *listDetail({ payload }, { call, put }) {
            console.log(payload)
            let data = yield call(listDetail,payload)
            yield put({
                type: 'listdetail',
                payload: data.data
            })
        }
    },

    reducers: {
        getexamtype(state, { payload }) {
            return { ...state, examTypedata: payload };
        },
        getsubject(state, { payload }) {
            return { ...state, subjectdata: payload };
        },
        examlist(state, { payload }) {
            return { ...state, examListdata: payload };
        },
        listdetail(state, { payload }) {
            return { ...state, listDetaildata: payload };
        }
    },

};