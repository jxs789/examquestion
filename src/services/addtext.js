import request from '../utils/request'

export function examType() {
  return request.get('/exam/examType');
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