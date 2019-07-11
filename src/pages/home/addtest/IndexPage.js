import React, { Component } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Input, Select, Button } from 'antd';
import Editor from 'for-editor'

const { Option } = Select;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topMd: '',
      downMd: '',
      value: '',
      week: '周考1',
      courseType: 'javaScript上',
      examType: '简答题'
    };
  }
  render() {
    const { addtext: { examTypedata } } = this.props;
    console.log(this.state.week)

    return (
      <div className="bigBox">
        <p>添加试题</p>
        <div className="smallBox">
          <p>题目信息</p>
          <p>题干</p>
          <div className='inp'><Input value={this.state.value} placeholder="请输入题目标题，不超过20个字" onChange={(e) => this.setState({ value: e.target.value })} /></div>
          <div className='topMd'>
            <p>题目主题</p>
            <Editor value={this.state.topMd} lineNum={true} expand={false} placeholder='请输入内容' onChange={(e) => this.setState({ topMd: e })} />
          </div>
          <div>
            <p>请输入考试类型：</p>
            <Select defaultValue={this.state.week} onChange={(e) => this.setState({ week: e })} style={{ width: 120 }} >
              {
                examTypedata.payload && examTypedata.payload.map((item, index) => (
                  <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                ))
              }
            </Select>
          </div>
          <div>
            <p>请输入课程类型：</p>
            <Select defaultValue="javaScript上" onChange={(e) => this.setState({ courseType: e })} style={{ width: 120 }} >
              {/* <Option value="javaScript上">javaScript上</Option>
              <Option value="javaScript下">javaScript下</Option> */}
            </Select>
          </div>
          <div>
            <p>请输入题目类型：</p>
            <Select defaultValue="简答题" onChange={(e) => this.setState({ examType: e })} style={{ width: 120 }} >
              {/* <Option value="简答题">简答题</Option>
              <Option value="代码阅读">代码阅读</Option>
              <Option value="代码补全">代码补全</Option>
              <Option value="修改bug">修改bug</Option>
              <Option value="手写代码">手写代码</Option> */}
            </Select>
          </div>
          <div className='downMd'>
            <p>答案信息</p>
            <Editor value={this.state.downMd} lineNum={true} expand={false} placeholder='请输入内容' onChange={(e) => this.setState({ downMd: e })} />
          </div>
          <Button type="primary" onClick={() => this.Submit()}>提交</Button>
        </div>
      </div>
    );
  }
  Submit = () => {
    let { topMd, downMd, value,week,courseType,examType } = this.state;
    console.log(topMd, downMd, value,week,courseType,examType)
    
  }
  componentDidMount() {
    this.props.examType()
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
  }
}
export default connect(MapStateToProps, MapStateToDispatch)(IndexPage);
