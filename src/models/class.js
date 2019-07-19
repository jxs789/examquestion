import { getGrade, getRoom } from '../services/index';

export default {
    namespace: 'class',

    state: {
        gradedata: [],
        roomdata:[]
    },

    effects: {
        *getGrade({ payload, type }, { call, put }) {
            let data = yield call(getGrade)
            yield put({
                type: 'getgrade',
                payload: data.data
            })
        },
        *getRoom({ payload, type }, { call, put }) {
            let data = yield call(getRoom)
            yield put({
                type: 'getroom',
                payload: data.data
            })
        }
    },

    reducers: {
        getgrade(state, { payload }) {
            return { ...state, gradedata: payload };
        },
        getroom(state, { payload }) {
            return { ...state, roomdata: payload };
        }
    },

};
