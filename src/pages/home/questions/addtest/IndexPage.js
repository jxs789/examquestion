import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Input, Select, Button, Modal, message } from 'antd';
import Editor from 'for-editor'

const { Option } = Select;

function IndexPage(props) {
    useEffect(() => {
        props.condition({ questions_id: props.match.params.id })
        props.examType()    //周考一
        props.getQuestionsType()  //简答题
        props.subject() //js上下
        props.userInfo()
        if (props.addtext.code === 1) {
            message.success('试题添加成功')
        }
    }, [props.addtext.code])

    let { addtext: { examTypedata, subjectdata, QuestionsTypedata } } = props;
    let [val, setVal] = useState('')
    let [topval, setTopVal] = useState('')
    let [examval, setexamVal] = useState("- 请选择 -")
    let [courseval, setcurVal] = useState("- 请选择 -")
    let [faceval, setfaceVal] = useState("- 请选择 -")
    let [downval, setDownVal] = useState('')
    let getVal = (e) => {
        setVal(e.target.value)
    }
    let getTop = (value) => {
        setTopVal(value)
    }
    let examSel = (value) => {
        setexamVal(value)
    }
    let curSel = (value) => {
        setcurVal(value)
    }
    let faceSel = (value) => {
        setfaceVal(value)
    }
    let getdown = (value) => {
        setDownVal(value)
    }
    let [getvisible, setvis] = useState(false)
    let handleOk = () => {
        props.subType({
            questions_type_id: faceval,
            questions_stem: val,
            subject_id: courseval,
            exam_id: examval,
            user_id: JSON.parse(localStorage.getItem('userinfo')).user_id,
            questions_answer: downval,
            title: topval,
        })
        // console.log(faceval,val,courseval,examval,downval,topval)
        setvis(false)
    }
    let handleCancel = () => {
        setvis(false)
    }
    let Submit = () => {
        setvis(true)
    }
    return (
        <div className="bigBox">
            <p>添加试题</p>
            <div className="smallBox">
                <p>题目信息</p>
                <p>题干</p>
                <div className='inp'>
                    <Input
                        onChange={getVal}
                        value={val}
                        placeholder='请输入要添加的内容'
                    />
                </div>
                <div className='topMd'>
                    <p>题目主题</p>
                    <Editor
                        onChange={getTop}
                        value={topval}
                        lineNum={true} expand={false} placeholder='请输入内容' />
                </div>
                <div>
                    <p>请输入考试类型：</p>
                    <Select style={{ width: 120 }}
                        value={examval}
                        onChange={examSel}
                    >
                        {
                            examTypedata.payload && examTypedata.payload.map((item, index) => (
                                <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                            ))
                        }
                    </Select>
                </div>
                <div>
                    <p>请输入课程类型：</p>
                    <Select
                        onChange={curSel}
                        value={courseval}
                        style={{ width: 120 }} >
                        {
                            subjectdata.payload && subjectdata.payload.map((item, index) => (
                                <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                            ))
                        }
                    </Select>
                </div>
                <div>
                    <p>请输入题目类型：</p>
                    <Select
                        onChange={faceSel}
                        value={faceval}
                        style={{ width: 120 }} >
                        {
                            QuestionsTypedata.payload && QuestionsTypedata.payload.map((item, index) => (
                                <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                            ))
                        }
                    </Select>
                </div>
                <div className='downMd'>
                    <p>答案信息</p>
                    <Editor
                        onChange={getdown}
                        value={downval} lineNum={true} expand={false} placeholder='请输入内容' />
                </div>
                <Button type="primary"
                    onClick={Submit}
                >提交</Button>
                <Modal
                    title="提示框"
                    visible={getvisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>确认提交吗?</p>
                </Modal>
            </div>
        </div>
    )

}

const MapStateToProps = (state) => {
    return { ...state }
}
const MapStateToDispatch = (dispatch) => {
    return {
        condition: (payload) => {
            dispatch({
                type: 'addtext/condition',
                payload
            })
        },
        examType: payload => {
            dispatch({
                type: 'addtext/examType',
                payload
            })
        },
        subject: payload => {
            dispatch({
                type: 'addtext/subject',
                payload
            })
        },
        getQuestionsType: () => {
            dispatch({
                type: 'addtext/getQuestionsType'
            })
        },
        userInfo: () => {
            dispatch({
                type: 'addtext/userInfo'
            })
        },
        subType: payload => {
            dispatch({
                type: 'addtext/subType',
                payload
            })
        }
    }
}

export default connect(MapStateToProps, MapStateToDispatch)(IndexPage);
