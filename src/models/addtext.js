<<<<<<< HEAD
import { examType, subject, getQuestionsType, submitBtn,userInfo } from '../services/index'
=======
import { examType } from '../services/index'
>>>>>>> qbc

export default {
    namespace: 'addtext',
    state: {
<<<<<<< HEAD
        examTypedata: [],
        subjectdata: [],
        QuestionsTypedata: [],
        userInfoData:[]
=======
        examTypedata: []
>>>>>>> qbc
    },

    effects: {
        *examType({ payload, type }, { call, put }) {
            let data = yield call(examType)
<<<<<<< HEAD
            // console.log(data.data)
=======
>>>>>>> qbc
            yield put({
                type: 'getExamtype',
                payload: data.data
            })
        },
<<<<<<< HEAD
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
        *subType({ payload }, { call, put }) {
            console.log("generator...", payload);
            let data = yield call(submitBtn, payload)
            console.log(data)
=======
        *subType({ payload, type }, { call, put }) {
            
            // let data = yield call(examType)
            // console.log(data.data)
            // yield put({
            //     type: 'getExamtype',
            //     payload: data.data
            // })
>>>>>>> qbc
        }
    },

    reducers: {
<<<<<<< HEAD
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
        }
=======
        getExamtype(state,action) {
            return { ...state, examTypedata:action};
        },
>>>>>>> qbc
    },

};