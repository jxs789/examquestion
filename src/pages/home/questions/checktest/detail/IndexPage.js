import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import ReactMarkdown from 'react-markdown';

function IndexPage(props) {
    useEffect(() => {
        props.condition({ questions_id: props.match.params.id })
    }, [])
    let { addtext: { Examquestions } } = props;

    console.log(Examquestions)
    return (
        <div className='normal'>
            <div className="content">
                <h2>试题详情</h2>
                <div className="ant-layout-content" >
                    <div className='content-top'>
                        <span>出题人：{Examquestions[0] && Examquestions[0].user_name}</span>
                        <div></div>
                    </div>
                    <h3>题目信息</h3>
                    <div className='content-down'>
                        <div className="ant-tag ant-tag-blue">{Examquestions[0] && Examquestions[0].questions_type_text}</div>
                        <div className="ant-tag ant-tag-geekblue">{Examquestions[0] && Examquestions[0].subject_text}</div>
                        <div className="ant-tag ant-tag-orange">{Examquestions[0] && Examquestions[0].exam_name}</div>
                    </div>
                    <h4>{Examquestions[0] && Examquestions[0].title}</h4>
                    <div>
                        <div className="react-markdown">
                            <ReactMarkdown source={Examquestions[0] && Examquestions[0].questions_stem} className="react_markdown" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-right">
                <ReactMarkdown className="react_markdown" source={Examquestions[0] && Examquestions[0].questions_answer} />
            </div>
        </div>
    )
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
        condition: (payload) => {
            dispatch({
                type: 'addtext/condition',
                payload
            })
        },
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(IndexPage);
