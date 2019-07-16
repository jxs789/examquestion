import request from '../utils/request'

//用户展示
export function userAll(){
    return request({
        url:'/user/user',
        method:'GET'
    })
}

//身份数据
export function userAll_S(){
    return request({
        url:'/user/identity',
        method:'GET'
    })
}

//api接口权限
export function userAll_J(){
    return request({
        url:'/user/api_authority',
        method:'GET'
    })
}

//身份api接口关系
export function userAll_K(){
    return request({
        url:'/user/identity_api_authority_relation',
        method:'GET'
    })
}

//视图接口权限
export function userAll_G(){
    return request({
        url:'/user/view_authority',
        method:'GET'
    })
}

//身份和视图权限关系
export function userAll_M(){
    return request({
        url:'/user/identity_view_authority_relation'
    })
}