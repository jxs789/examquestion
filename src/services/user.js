
import request from '../utils/request'

//用户展示
export function userAll() {
    return request({
        url: '/user/user',
        method: 'GET'
    })
}

//身份数据
export function userAll_S() {
    return request({
        url: '/user/identity',
        method: 'GET'
    })
}

//api接口权限
export function userAll_J() {
    return request({
        url: '/user/api_authority',
        method: 'GET'
    })
}

//身份api接口关系
export function userAll_K() {
    return request({
        url: '/user/identity_api_authority_relation',
        method: 'GET'
    })
}

//视图接口权限
export function userAll_G() {
    return request({
        url: '/user/view_authority',
        method: 'GET'
    })
}

//身份和视图权限关系
export function userAll_M() {
    return request({
        url: '/user/identity_view_authority_relation'
    })
}

export function getIdentity() {
    return request.get('/user/identity');
}

export function getUser() {
    return request.get('/user/user');
}

export function getViewAuthority() {
    return request.get('/user/view_authority');
}

export function getApiAuthority() {
    return request.get('/user/api_authority');
}

//更新试题
export function updataUser(payload) {
    return request.put('/user/user', payload);
}

//添加试题
export function AddUser(payload) {
    return request.post('/user', payload);
}
//添加身份
export function Addidentity(params) {
    return request.get('/user/identity/edit', { params });
}
//添加api权限
export function Addapi(params) {
    return request.get('/user/authorityApi/edit',  {params} );
}
//添加视图接口权限
export function Addview(params) {
    return request.get('/user/authorityView/edit',  {params} );
}
//给身份设置api权限
export function Addapiauth(payload) {
    return request.post('/user/setIdentityApi',payload );
}
//给身份设置视图权限
export function AddIdentityView(payload) {
    return request.post('/user/setIdentityView',payload );
}
