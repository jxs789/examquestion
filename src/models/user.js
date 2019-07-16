
import {
    userAll, userAll_S, userAll_J, userAll_K,
    userAll_G, userAll_M, getIdentity,
    getUser, getViewAuthority, getApiAuthority, AddUser,
    updataUser, Addidentity, Addapi, Addview, Addapiauth, AddIdentityView
} from '../services/index'
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
        apiauthorityData: [],
        userCode: 0,
        identityCode: 0,
        apiCode: 0,
        viewCode: 0,
        apiauthCode: 0,
        ivCode: 0
    },
    // 异步操作
    effects: {
        *userAlllist({ payload }, { call, put }) {
            let data = yield call(userAll)
            yield put({
                type: 'userList',
                action: data.data
            });
        },
        *userAlllife({ payload }, { call, put }) {
            let data_S = yield call(userAll_S)
            yield put({
                type: 'userlife',
                action: data_S.data
            });
        },
        *userAlljoin({ payload }, { call, put }) {
            let data_J = yield call(userAll_J)
            yield put({
                type: 'userjoin',
                action: data_J.data
            });
        },
        *userAllpart({ payload }, { call, put }) {
            let data_K = yield call(userAll_K)
            yield put({
                type: 'userpart',
                action: data_K.data
            });
        },
        *userAlllook({ payload }, { call, put }) {
            let data_G = yield call(userAll_G)
            yield put({
                type: 'userlook',
                action: data_G.data
            });
        },
        *userAllmap({ payload }, { call, put }) {
            let data_M = yield call(userAll_M)
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
        //添加用户
        *Adduser({ payload }, { call, put }) {
            let data = yield call(AddUser, payload);
            yield put({
                type: 'getuserCode',
                payload: data.userCode === 1 ? 1 : 0
            })
        },
        //更新用户
        *updataUser({ payload }, { call, put }) {
            let data = yield call(updataUser, payload)
            yield put({
                type: 'getuserCode',
                payload: data.identityCode === 1 ? 1 : 0
            })
        },
        //添加身份
        *Addidentity({ payload }, { call, put }) {
            let data = yield call(Addidentity, payload)
            yield put({
                type: 'getidentityCode',
                payload: data.code === 1 ? 1 : 0
            })
        },
        //添加api接口权限
        *Addapi({ payload }, { call, put }) {
            let data = yield call(Addapi, payload)
            yield put({
                type: 'getapiCode',
                payload: data.code === 1 ? 1 : 0
            })
        },
        //添加视图接口权限
        *Addview({ payload }, { call, put }) {
            let data = yield call(Addview, payload)
            yield put({
                type: 'getviewCode',
                payload: data.code === 0 ? 0 : 1
            })
        },
        //给身份设置api接口权限
        *Addapiauth({ payload }, { call, put }) {
            let data = yield call(Addapiauth, payload)
            yield put({
                type: 'getapiauthCode',
                payload: data.code === 1 ? 1 : 0
            })
        },
        //给身份设置视图权限
        *AddIdentityView({ payload }, { call, put }) {
            let data = yield call(AddIdentityView, payload)
            yield put({
                type: 'getivCode',
                payload: data.code === 1 ? 1 : 0
            })
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
        },
        getuserCode(state, action) {
            return { ...state, userCode: action.payload }
        },
        getidentityCode(state, action) {
            return { ...state, identityCode: action.payload }
        },
        getapiCode(state, action) {
            return { ...state, apiCode: action.payload }
        },
        getviewCode(state, action) {
            return { ...state, viewCode: action.payload }
        },
        getapiauthCode(state, action) {
            return { ...state, apiauthCode: action.payload }
        },
        getivCode(state, action) {
            return { ...state, ivCode: action.payload }
        }
    }
}