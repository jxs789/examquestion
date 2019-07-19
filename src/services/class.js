import request from '../utils/request';

export function getGrade() {
  return request.get('/manger/grade')
}

export function getRoom() {
  return request.get('/manger/room')
}