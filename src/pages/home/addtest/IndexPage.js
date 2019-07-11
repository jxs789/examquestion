import React, { Component } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
<<<<<<< HEAD
import { Input, Select, Button, Modal } from 'antd';
=======
import { Input, Select, Button } from 'antd';
>>>>>>> qbc
import Editor from 'for-editor'

const { Option } = Select;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topMd: '',
      downMd: '',
      value: '',
<<<<<<< HEAD
      week: '',
      courseType: '',
      examType: '',
      visible: false
    };
  }
  render() {
    const { addtext: { examTypedata, subjectdata, QuestionsTypedata } } = this.props;
=======
      week: '周考1',
      courseType: 'javaScript上',
      examType: '简答题'
    };
  }
  render() {
    const { addtext: { examTypedata } } = this.props;
    console.log(this.state.week)

>>>>>>> qbc
    return (
      <div className="bigBox">
        <p>添加试题</p>
        <div className="smallBox">
          <p>题目信息</p>
          <p>题干</p>
<<<<<<< HEAD
          <div className='inp'>
            <Input value={this.state.value} placeholder="请输入题目标题，不超过20个字" onChange={(e) => this.setState({ value: e.target.value })} /></div>
=======
          <div className='inp'><Input value={this.state.value} placeholder="请输入题目标题，不超过20个字" onChange={(e) => this.setState({ value: e.target.value })} /></div>
>>>>>>> qbc
          <div className='topMd'>
            <p>题目主题</p>
            <Editor value={this.state.topMd} lineNum={true} expand={false} placeholder='请输入内容' onChange={(e) => this.setState({ topMd: e })} />
          </div>
          <div>
            <p>请输入考试类型：</p>
<<<<<<< HEAD
            <Select defaultValue="周考一" onChange={(e) => this.setState({ week: e })} style={{ width: 120 }} >
              {
                examTypedata.payload && examTypedata.payload.map((item, index) => (
                  <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
=======
            <Select defaultValue={this.state.week} onChange={(e) => this.setState({ week: e })} style={{ width: 120 }} >
              {
                examTypedata.payload && examTypedata.payload.map((item, index) => (
                  <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
>>>>>>> qbc
                ))
              }
            </Select>
          </div>
          <div>
            <p>请输入课程类型：</p>
<<<<<<< HEAD
            <Select defaultValue='javaScript上' onChange={(e) => this.setState({ courseType: e })} style={{ width: 120 }} >
              {
                subjectdata.payload && subjectdata.payload.map((item, index) => (
                  <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                ))
              }
=======
            <Select defaultValue="javaScript上" onChange={(e) => this.setState({ courseType: e })} style={{ width: 120 }} >
              {/* <Option value="javaScript上">javaScript上</Option>
              <Option value="javaScript下">javaScript下</Option> */}
>>>>>>> qbc
            </Select>
          </div>
          <div>
            <p>请输入题目类型：</p>
<<<<<<< HEAD
            <Select defaultValue='简答题' onChange={(e) => this.setState({ examType: e })} style={{ width: 120 }} >
              {
                QuestionsTypedata.payload && QuestionsTypedata.payload.map((item, index) => (
                  <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                ))
              }
=======
            <Select defaultValue="简答题" onChange={(e) => this.setState({ examType: e })} style={{ width: 120 }} >
              {/* <Option value="简答题">简答题</Option>
              <Option value="代码阅读">代码阅读</Option>
              <Option value="代码补全">代码补全</Option>
              <Option value="修改bug">修改bug</Option>
              <Option value="手写代码">手写代码</Option> */}
>>>>>>> qbc
            </Select>
          </div>
          <div className='downMd'>
            <p>答案信息</p>
            <Editor value={this.state.downMd} lineNum={true} expand={false} placeholder='请输入内容' onChange={(e) => this.setState({ downMd: e })} />
          </div>
          <Button type="primary" onClick={() => this.Submit()}>提交</Button>
<<<<<<< HEAD
          <Modal
            title="提示框"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>确认提交吗?</p>
          </Modal>
=======
>>>>>>> qbc
        </div>
      </div>
    );
  }
  Submit = () => {
<<<<<<< HEAD
    this.setState({
      visible: true,
    });
  }
  handleOk = e => {
    console.log(e);
    let { topMd, downMd, value, week, courseType, examType } = this.state;
    // console.log(topMd, downMd, value, week, courseType, examType);
    this.setState({
      visible: false,
    });
    this.props.subType({
      questions_type_id: examType,
      questions_stem: value,
      subject_id: courseType,
      exam_id: week,
      user_id: JSON.parse(localStorage.getItem('userinfo')).user_id,
      questions_answer: downMd,
      title: topMd,
    })
    // console.log(JSON.parse(localStorage.getItem('userinfo')).user_id)
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {
    this.props.examType()
    this.props.subject()
    this.props.getQuestionsType()
    this.props.userInfo()
=======
    let { topMd, downMd, value,week,courseType,examType } = this.state;
    console.log(topMd, downMd, value,week,courseType,examType)
    
  }
  componentDidMount() {
    this.props.examType()
>>>>>>> qbc
  }
}
const MapStateToProps = (state) => {
  // console.log(state.addtext)
  return { ...state }
}
const MapStateToDispatch = (dispatch) => {
  return {
    examType: payload => {
      dispatch({
        type: 'addtext/examType',
        payload
      })
    },
<<<<<<< HEAD
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
      console.log("dispatch...", payload)
      dispatch({
        type: 'addtext/subType',
        payload
      })
    },
=======
>>>>>>> qbc
  }
}
export default connect(MapStateToProps, MapStateToDispatch)(IndexPage);
