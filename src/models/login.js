import { login, getUserInfo, Upuser, getBaseurl, getViewAuth } from '../services/index'
import { setToken, getToken } from '@/utils/index'
import { routerRedux } from 'dva/router'
import allAuthority from '../router/config'

export default {

    namespace: 'login',

    state: {
        isLogin: -1,
        userInfo: {},
        upuser: {},
        imgUrl: '',
        ViewAuthdata: [],
        myView: [],
        forbiddenView: []
    },

    subscriptions: {
        setup({ dispatch, history }) {
            //监听地址栏路径
            return history.listen(({ pathname }) => {
                //如果没有登录跳login
                if (pathname.indexOf('/login') === -1) {
                    if (!getToken()) {
                        dispatch(routerRedux.replace({
                            pathname: `/login`,
                            search: `?redirect=${encodeURIComponent(pathname)}`
                        }))
                    }
                } else {    //登录过后跳首页
                    if (getToken()) {
                        dispatch(routerRedux.replace({
                            pathname: `/home`
                        }))
                    }
                }

                if (getToken()) {
                    dispatch({
                        type: 'getUserInfo',
                    })
                }
            })
        }
    },

    //异步操作
    effects: {
        *login({ payload, type }, { call, put }) {
            let data = yield call(login, payload)
            // console.log(data)
            if (data.code === 1) {
                //设置cookie 
                setToken(data.token)
                //跳页面
            }
            //调用reduce改变登录状态
            yield put({
                type: 'updateLogin',
                payload: data.code
            })
        },
        //获取用户信息
        *getUserInfo(action, { call, put, select }) {   //获取用户信息
            let userInfo = yield select(state => state.login.userInfo);
            //1.判断用户是否有获取用户信息
            if (Object.keys(userInfo).length) {  //判断有没有获取到用户信息，获取到的是一个对象转成数组,去判断
                return;
            }
            //2.获取用户信息
            let data = yield getUserInfo();
            yield put({
                type: 'upgetuserinfo',
                payload: data.data
            })
            //路由表
            let authority = yield getViewAuth();
            console.log(authority)
            yield put({
                type: "updateViewAuth",
                payload: authority.data
            })
        },
        *getUserC({ payload, type }, { call, put }) {
            let data = yield call(Upuser, payload);
            yield put({
                type: "upusers",
                payload: data
            })
        },
        //获取图片资源地址
        *url({ payload, type }, { call, put }) {
            let data = yield call(getBaseurl, payload);
            yield put({
                type: "baseUrl",
                payload: data.data[0].path
            })
        }
    },
    //同步操作 
    reducers: {
        updateLogin(state, action) {
            return { ...state, isLogin: action.payload }
        },
        upgetuserinfo(state, action) {
            return { ...state, userInfo: action.payload }
        },
        upusers(state, action) {
            return { ...state, upuser: action.payload }
        },
        baseUrl(state, action) {
            return { ...state, imgUrl: action.payload }
        },
        updateViewAuth(state, action) {
            //筛选出我拥有的路由
            let myView = [],
                forbiddenView = [];
            allAuthority.routes.forEach(item => {
                let obj={
                    name:item.name,
                    path:item.path,
                    children:[]
                };
                item.children.forEach(value => {
                    if (action.payload.findIndex(item => item.view_id === value.view_id) !== -1) {
                        obj.children.push(value);
                       
                    } else {
                        forbiddenView.push(value)
                    }
                })
                myView.push(obj)
            })
            return { ...state, myView, forbiddenView }
        },
    },
};
