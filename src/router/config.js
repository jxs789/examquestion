import AddTest from '@/pages/home/questions/addtest/IndexPage'
import TestClassify from '@/pages/home/questions/testclassify/IndexPage'
import CheckTest from '@/pages/home/questions/checktest/IndexPage'
import Detail from '@/pages/home/questions/checktest/detail/IndexPage' //试题详情
import Edit from '@/pages/home/questions/checktest/edit/IndexPage' //编辑详情
import Adduser from '@/pages/home/user/adduser/IndexPage'
import Usershow from '@/pages/home/user/usershow/IndexPage'
import Addexam from '@/pages/home/exam/addexam/IndexPage'
import Examlist from '@/pages/home/exam/examlist/IndexPage'
import ListDetail from '@/pages/home/exam/examlist/listDetail/IndexPage' //编辑详情
import Classmanage from '@/pages/home/class/classmanage/IndexPage'
import Classroommanage from '@/pages/home/class/classroommanage/IndexPage'
import Studentmanage from '@/pages/home/class/studentmanage/IndexPage'

export default {
    routes: [{
        name: 'router.questions',
        path: '',
        children: [{
            name: 'router.questions.add',
            path: '/home/questions/addQuestions',
            view_id: 'main-addQuestions',
            component: AddTest
        }, {
            name: 'router.questions.view',
            path: '/home/questions/viewQuestions',
            view_id: 'main-questionsType',
            component: TestClassify
        }, {
            name: 'router.questions.type',
            path: '/home/questions/classifyQuestions',
            view_id: 'main-watchQuestions',
            component: CheckTest
        }, {
            name: '',
            path: '/home/questions/detail/:id',
            view_id: 'main-questionsDetail',
            component: Detail
        }, {
            name: '',
            path: '/home/questions/edit/:id',
            view_id: 'main-editQuestions',
            component: Edit
        }]
    }, {
        name: 'router.user',
        path: '',
        children: [
            {
                name: 'router.user.add',
                path: '/home/user/adduser',
                view_id: 'main-addUser',
                component: Adduser
            }, {
                name: 'router.user.show',
                path: '/home/user/usershow',
                view_id: 'main-showUser',
                component: Usershow
            }
        ]
    }, {
        name: 'router.exam',
        path: '',
        children: [
            {
                name: 'router.exam.add',
                path: '/home/exam/addexam',
                view_id: 'main-addExam',
                component: Addexam
            }, {
                name: 'router.exam.list',
                path: '/home/exam/examlist',
                view_id: 'main-examList',
                component: Examlist
            }, {
                name: '',
                path: '/home/exam/listDetail/:id',
                view_id: 'main-examDetail',
                component: ListDetail
            }
        ]
    }, {
        name: 'router.classroom',
        path: '',
        children: [{
            name: 'router.classroom.class',
            path: '/home/class/classmanage',
            view_id: 'main-grade',
            component: Classmanage
        },
        {
            name: 'router.classroom.management',
            path: '/home/class/classroommanage',
            view_id: 'main-room',
            component: Classroommanage
        }, {
            name: 'router.classroom.student',
            path: '/home/class/studentmanage',
            view_id: 'main-student',
            component: Studentmanage
        }
        ]
    }]
}