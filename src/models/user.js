
import { userAll, userAll_S, userAll_J, userAll_K, userAll_G, userAll_M, getIdentity, getUser, getViewAuthority, getApiAuthority, AddUser } from '../services/index'
export default {
    // 命名空间
    namespace: 'user',
    // 模块的状态
    state: {
        userAllList: [],
        userAllLife: [],
        userAllJoin: [],
        userAllPart: [],
        userAllLook: [],
        userAllMap: [],
        identityData: [],
        userData: [],
        viewauthorityData: [],
        apiauthorityData: []
    },
    // 异步操作
    effects: {
        *userAlllist({ payload }, { call, put }) {
            let data = yield call(userAll)
            // console.log(data)
            yield put({
                type: 'userList',
                action: data.data
            });
        },
        *userAlllife({ payload }, { call, put }) {
            let data_S = yield call(userAll_S)
            // console.log(data_S)
            yield put({
                type: 'userlife',
                action: data_S.data
            });
        },
        *userAlljoin({ payload }, { call, put }) {
            let data_J = yield call(userAll_J)
            // console.log(data_J)
            yield put({
                type: 'userjoin',
                action: data_J.data
            });
        },
        *userAllpart({ payload }, { call, put }) {
            let data_K = yield call(userAll_K)
            // console.log(data_K)
            yield put({
                type: 'userpart',
                action: data_K.data
            });
        },
        *userAlllook({ payload }, { call, put }) {
            let data_G = yield call(userAll_G)
            console.log(data_G)
            yield put({
                type: 'userlook',
                action: data_G.data
            });
        },
        *userAllmap({ payload }, { call, put }) {
            let data_M = yield call(userAll_M)
            console.log(data_M)
            yield put({
                type: 'usermap',
                action: data_M.data
            });
        },
        *Identity({ payload }, { call, put }) {
            let data = yield call(getIdentity);
            yield put({ type: 'setIdentity', payload: data.data });
        },
        *getuser({ payload }, { call, put }) {
            let data = yield call(getUser);
            yield put({ type: 'setUser', payload: data.data });
        },
        *getviewauthority({ payload }, { call, put }) {
            let data = yield call(getViewAuthority);
            yield put({ type: 'setviewauthority', payload: data.data });
        },
        *getapiauthority({ payload }, { call, put }) {
            let data = yield call(getApiAuthority);
            yield put({ type: 'setapiauthority', payload: data.data });
        },
        *Adduser({ payload }, { call, put }) {
            let data = yield call(AddUser, payload);
        },
    },
    // 同步操作
    reducers: {
        userList(state, action) {
            return { ...state, userAllList: action.action };
        },
        userlife(state, action) {
            return { ...state, userAllLife: action.action };
        },
        userjoin(state, action) {
            return { ...state, userAllJoin: action.action };
        },
        userpart(state, action) {
            return { ...state, userAllPart: action.action };
        },
        userlook(state, action) {
            return { ...state, userAllLook: action.action };
        },
        usermap(state, action) {
            return { ...state, userAllMap: action.action };
        },
        setIdentity(state, { payload }) {
            return { ...state, identityData: payload }
        },
        setUser(state, { payload }) {
            return { ...state, userData: payload }
        },
        setviewauthority(state, { payload }) {
            return { ...state, viewauthorityData: payload }
        },
        setapiauthority(state, { payload }) {
            return { ...state, apiauthorityData: payload }
        }
    }
}