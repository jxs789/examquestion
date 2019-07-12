import { examType, subject, getQuestionsType, submitBtn,userInfo,insertQuestions} from '../services/index'

export default {
    namespace: 'addtext',
    state: {
        examTypedata: [],
        subjectdata: [],
        QuestionsTypedata: [],
        userInfoData:[]
    },

    effects: {
        *examType({ payload, type }, { call, put }) {
            let data = yield call(examType)
            // console.log(data.data)
            yield put({
                type: 'getExamtype',
                payload: data.data
            })
        },
        *subject({ payload }, { call, put }) {
            let data = yield call(subject)
            // console.log(data.data)
            yield put({
                type: 'getSubject',
                payload: data.data
            })
        },
        *getQuestionsType({ payload }, { call, put }) {
            let data = yield call(getQuestionsType)
            yield put({
                type: 'getquestionsType',
                payload: data.data
            })
        },
        *userInfo({ payload }, { call, put }){
            let data = yield call(userInfo)
            console.log(data.data)
            localStorage.setItem('userinfo',JSON.stringify(data.data))
            yield put({
                type: 'getuserInfo',
                payload: data.data
            })
        },
        *sertQuestions({payload},{call,put}){
            console.log('sertQuestions...',payload);
            let data = yield call(insertQuestions,payload)
        },
        *subType({ payload }, { call, put }) {
            console.log("generator...", payload);
            let data = yield call(submitBtn, payload)
        },
    },

    reducers: {
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

    },

};