import React, { Component } from 'react';
import { connect } from 'dva';
import { Select, Button, Radio } from 'antd';
import './IndexPage.scss';

const { Option } = Select;

class Checktest extends Component {
    constructor() {
        super();
        this.state = {
            examType: '',
            subject: '',
            course: ''
        }
    }
    render() {
        let { addtext: { Examquestions, examTypedata, QuestionsTypedata, subjectdata } } = this.props;
        return (
            <div className="content">
                <h2 style={{ marginTop: "10px" }}>查看试题</h2>
                <div className="el_conent">
                    <div>
                        <span>课程类型：</span>
                        <Radio.Group defaultValue="a" buttonStyle="solid" onChange={(e) => this.setState({ course: e.target.value })}>
                            <Radio.Button value="all">all</Radio.Button>
                            {
                                subjectdata.payload && subjectdata.payload.map((el, i) => {
                                    return <Radio.Button key={i} value={el.subject_id}>{el.subject_text}</Radio.Button>
                                })
                            }
                        </Radio.Group>
                        <div className="el-Button">
                            <div>
                                <span>考试类型：</span>
                                <Select defaultValue='- 请选择 -' onChange={e => { this.setState({ examType: e }) }} style={{ width: 120 }} >
                                    {
                                        examTypedata.payload && examTypedata.payload.map((item, index) => (
                                            <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                        ))
                                    }
                                </Select>
                            </div>
                            <div>
                                <span>题目类型：</span>
                                <Select defaultValue='- 请选择 -' onChange={e => { this.setState({ subject: e }) }} style={{ width: 120 }} >
                                    {
                                        QuestionsTypedata.payload && QuestionsTypedata.payload.map((item, index) => (
                                            <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                                        ))
                                    }
                                </Select>
                            </div>
                            <Button type="primary" icon="search" onClick={() => this.Search()}>搜索</Button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        Examquestions && Examquestions.map((el, i) => {
                            return <div className="ant-list-item" key={i}>
                                <div className="ant-list-item-content ant-list-item-content-single">
                                    <a onClick={() => this.btn(el.questions_id)}>
                                        <div className="ant-list-item-meta">
                                            <div className="ant-list-item-meta-content">
                                                <h4 className="ant-list-item-meta-title">{el.title}</h4>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '10px' }}><div style={{ paddingBottom: '20px' }}>
                                            <div className="ant-tag ant-tag-blue">{el.questions_type_text}</div>
                                            <div className="ant-tag ant-tag-geekblue">{el.subject_text}</div>
                                            <div className="ant-tag ant-tag-orange">{el.exam_name}</div>
                                        </div><span style={{ marginBottom: '10px', display: 'inline-block' }}>{el.user_name} 发布</span></div>
                                    </a></div>
                                <ul className="ant-list-item-action">
                                    <li onClick={() => this.editBtn(el.questions_id)}>编辑</li>
                                </ul>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
    Search = () => {
        const { examType, subject, course } = this.state;
        if (course === 'all') {
            this.props.examQuestions()
        } else {
            const payload = {
                exam_id: examType,
                questions_type_id: subject,
                subject_id: course
            }
            for (var i in payload) {
                if (payload[i] === "") {
                    delete payload[i];
                }
            }
            this.props.condition(payload)
        }
    }
    //详情
    btn = (id) => {
        this.props.history.push({
            pathname: `/home/questions/detail/${id}`
        })
    }
    //编辑
    editBtn = (id) => {
        this.props.history.push({
            pathname: `/home/questions/edit/${id}`
        })
    }
    componentDidMount() {
        this.props.examQuestions()
        this.props.examType()
        this.props.getQuestionsType()
        this.props.subject()
    }
}


const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        examQuestions() {
            dispatch({
                type: 'addtext/ExamQuestions'
            })
        },
        examType() {
            dispatch({
                type: 'addtext/examType'
            })
        },
        getQuestionsType: () => {
            dispatch({
                type: 'addtext/getQuestionsType'
            })
        },
        subject: payload => {
            dispatch({
                type: 'addtext/subject',
                payload
            })
        },
        condition: (payload) => {
            dispatch({
                type: 'addtext/condition',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Checktest);
