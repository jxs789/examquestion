import request from '../utils/request'

export function getexamType() {
    return request.get('/exam/examType');
}

export function getSubject() {
    return request.get('/exam/subject');
}

//试卷列表
export function examList() {
    return request.get('/exam/exam');
}
//列表详情数据
export function listDetail(params) {
    return request.get(`/exam/exam/${params}`);
}