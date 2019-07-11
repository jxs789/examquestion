import Cookie from 'js-cookie';

const key = 'authorization'
export function setToken(val) {
    let date = new Date();
    let expires = date.getTime() + 10 * 60 * 60 * 1000;
    date.setTime(expires)
    Cookie.set(key, val, { expires: date })
}
//读取cookie
export function getToken() {
    return Cookie.get(key)
}

export function removeToken() {
    Cookie.remove(key)
}