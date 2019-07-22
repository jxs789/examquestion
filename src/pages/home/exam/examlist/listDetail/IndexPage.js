import React, { useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import ReactMarkdown from 'react-markdown';

function IndexPage(props) {
  useEffect(() => {
    console.log(props.match)
    props.listDetail(props.match.params.id)
  }, [])

  let { listDetaildata: { questions } } = props
  // console.log(props)
  return (
    <div className='content'>
      <h2>试卷详情</h2>
      <div className='wrap_box'>{
        questions && questions.map((item, index) => (
          <div key={index} className='small_box'>
            <h4>{index+1}：{item.title}</h4>
            <ReactMarkdown className='react_markdown' source={item.questions_stem} />
          </div>
        ))
      }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state.exam
  }
}

const mapDisaptchToProps = dispatch => {
  return {
    listDetail: (payload) => {
      dispatch({
        type: 'exam/listDetail',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(IndexPage);
