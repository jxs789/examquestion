import { examType, subject, getQuestionsType, submitBtn, userInfo, examQuestions, condition, insertQuestions,Questions } from '../services/index'

export default {
    namespace: 'addtext',
    state: {
        Examquestions: [],
        examTypedata: [],
        subjectdata: [],
        QuestionsTypedata: [],
        userInfoData: [],
        questions: [],
        code: 0
    },

    effects: {
        //查看试题里面的所有试题
        *ExamQuestions({ payload }, { call, put }) {
            let data = yield call(examQuestions)
            yield put({
                type: "exao",
                payload: data.data
            })
        },
        //考试类型
        *examType({ payload, type }, { call, put }) {
            let data = yield call(examType)
            // console.log(data.data)
            yield put({
                type: 'getExamtype',
                payload: data.data
            })
        },
        //课程类型
        *subject({ payload }, { call, put }) {
            let data = yield call(subject)
            // console.log(data.data)
            yield put({
                type: 'getSubject',
                payload: data.data
            })
        },
        //题目类型
        *getQuestionsType({ payload }, { call, put }) {
            let data = yield call(getQuestionsType)
            yield put({
                type: 'getquestionsType',
                payload: data.data
            })
        },
        //用户
        *userInfo({ payload }, { call, put }) {
            let data = yield call(userInfo)
            localStorage.setItem('userinfo', JSON.stringify(data.data))
            yield put({
                type: 'getuserInfo',
                payload: data.data
            })
        },
        //添加页 的 提交 编辑页的提交
        *subType({ payload }, { call, put }) {
            let data = yield call(submitBtn, payload)
            yield put({
                type: 'getCode',
                payload: data.code === 1 ? 1 : -1
            })
        },
        *sertQuestions({ payload }, { call, put }) {
            console.log('sertQuestions...', payload);
            let data = yield call(insertQuestions, payload)
        },
        //搜索试题
        *condition({ payload }, { call, put }) {
            let data = yield call(condition, payload)
            yield put({ type: 'exao', payload: data.data })
        },
        //查看试题所有数据
        *getDatas({ payload }, { call, put }) {
            let data = yield call(Questions)
            yield put({
                type: "exo",
                payload: data.data
            })
        },
    },

    reducers: {
        exao(state, { payload }) {
            return { ...state, Examquestions: payload }
        },
        getExamtype(state, action) {
            return { ...state, examTypedata: action };
        },
        getSubject(state, action) {
            return { ...state, subjectdata: action };
        },
        getquestionsType(state, action) {
            return { ...state, QuestionsTypedata: action };
        },
        getuserInfo(state, action) {
            return { ...state, userInfoData: action };
        },
        getCode(state, action) {
            return { ...state, code: action.payload }
        },
        exo(state, { payload }) {
            return { ...state, questions: payload }
        },
    },

};