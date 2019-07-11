import { login } from '../services/index'
<<<<<<< HEAD
import { setToken, getToken } from '@/utils/index'
import { routerRedux } from 'dva/router'
=======
<<<<<<< HEAD
=======
import { setToken, getToken } from '../utils/index'
import { routerRedux } from 'dva/router'
>>>>>>> qbc
>>>>>>> qbc

export default {

    namespace: 'login',

    state: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
        isLogin: false
    },
=======
>>>>>>> qbc
        isLogin: -1
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
            })
        }
    },

<<<<<<< HEAD
=======
>>>>>>> qbc
>>>>>>> qbc
    //异步操作
    effects: {
        *login({ payload, type }, { call, put }) {
            let data = yield call(login, payload)
            console.log(data)
<<<<<<< HEAD
=======
<<<<<<< HEAD
            //调用reduce改变登录状态
            yield put({
                type: 'updateLogin',
                payload: data.code == 1
=======
>>>>>>> qbc
            if (data.code === 1) {
                //设置cookie 
                setToken(data.token)
                //跳页面
            }
            //调用reduce改变登录状态
            yield put({
                type: 'updateLogin',
                payload: data.code
<<<<<<< HEAD
=======
>>>>>>> qbc
>>>>>>> qbc
            })
        }
    },
    //同步操作 
    reducers: {
        updateLogin(state, action) {
            return { ...state, isLogin: action.payload }
        }
    },

};
