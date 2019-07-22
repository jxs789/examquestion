import request from '../utils/request';

export function getUserInfo() {
    return request.get('/user/userInfo');
}

export function Upuser(params) {
    return request.put("/user/user", params)
}

export function getBaseurl(data) {
    console.log(data)
    return request.post("http://123.206.55.50:11000/upload", data)
}

//获取视图权限信息
export function getViewAuth() {
    return request.get("/user/view_authority")
}