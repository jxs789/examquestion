import request from '../utils/request';

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

export function AddUser(payload) {
    return request.post('/user',payload);
}