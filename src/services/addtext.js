<<<<<<< HEAD
import request from '@/utils/request'
=======
import request from '../utils/request'
>>>>>>> qbc

export function examType() {
  return request.get('/exam/examType');
}
<<<<<<< HEAD

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
=======
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
>>>>>>> qbc
