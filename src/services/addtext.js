import request from '../utils/request'

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
  return request.post('/exam/questions', params);
}
//获取试题分类
export function Questions(){
  return request({
    url:'/exam/getQuestionsType',
    method:'GET'
  })
}
//获取所有试题
export function examQuestions(){
  return request({
    url:'/exam/questions/new',
    method:'GET'
  })
}
export function insertQuestions(params){
  return request({
    url:'/exam/insertQuestionsType',
    method:'GET',
    params
  })
}
//搜索试题
export function condition(params){
  return request.get('/exam/questions/condition',{params})
}