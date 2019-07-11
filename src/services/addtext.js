import request from '@/utils/request'

export function examType() {
  return request.get('/exam/examType');
}

export function subject() {
  return request.get('/exam/subject');
}

export function getQuestionsType() {
  return request.get('/exam/getQuestionsType');
}

export function userInfo() {
  return request.get('/user/userInfo');
}

export function submitBtn(params) {
  console.log("params...", params)
  return request.post('/exam/questions', params);
}
