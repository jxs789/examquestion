// import { examQuestions, examType,getQuestionsType } from '../services/index'
// export default {
//     // 命名空间
//     namespace: 'exam',
//     // 模块的状态
//     state: {
//         Examquestions: [],
//         examTypedata:[],
//         QuestionsTypedata: [],
//     },
//     // 异步操作
//     effects: {
//         *ExamQuestions({ payload }, { call, put }) {
//             let data = yield call(examQuestions)
//             yield put({
//                 type: "exao",
//                 payload: data.data
//             })
//         },
//         *examType({ payload, type }, { call, put }) {
//             let data = yield call(examType)
//             // console.log(data.data)
//             yield put({
//                 type: 'getExamtype',
//                 payload: data.data
//             })
//         },
//         *getQuestionsType({ payload }, { call, put }) {
//             let data = yield call(getQuestionsType)
//             yield put({
//                 type: 'getquestionsType',
//                 payload: data.data
//             })
//         },
//     },
//     // 同步操作
//     reducers: {
//         exao(state, { payload }) {
//             return { ...state, Examquestions: payload }
//         },
//         getExamtype(state, action) {
//             return { ...state, examTypedata: action };
//         },
//         getquestionsType(state, action) {
//             return { ...state, QuestionsTypedata: action };
//         },
//     }
// }
