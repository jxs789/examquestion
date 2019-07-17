import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Select, Button, Radio, Table, Form } from 'antd';
import './IndexPage.scss';

const { Option } = Select;

function IndexPage(props) {
  useEffect(() => {
    props.getexamType()
    props.getSubject()
    props.examList()
  }, [])
  const columns = [
    {
      title: '试卷信息',
      dataIndex: 'title',
      render: (text, rect) => (
        <div>
          <h4>{rect.title}</h4>
          <p>考试时间：</p>
        </div>
      )
    },
    {
      title: '班级',
      dataIndex: 'grade_name',
      render: (text, rect) => (
        <div>
          <h4>考试班级：</h4>
          <p>{rect.grade_name}</p>
        </div>
      )
    },
    {
      title: '创建人',
      dataIndex: 'user_name',
    }, {
      title: '开始时间',
      dataIndex: 'start_time',
    }, {
      title: '结束时间',
      dataIndex: 'end_time',
    }, {
      title: '操作',
      dataIndex: '',
      render: (text, rect) => <a onClick={() => hrefDetail(rect.exam_exam_id)}>详情</a>,
    }]
  //查询
  let about = () => {
    props.form.validateFields((err, values) => {
      // console.log(values)
    });
  }
  //详情
  let hrefDetail = (id) => {
    props.history.push({
      pathname: `/home/exam/listDetail/${id}`
    })
  }
  const { examTypedata, subjectdata, examListdata: { exam } } = props
  const { getFieldDecorator } = props.form;

  return (
    <Form>
      <div className='content'>
        <h2>试卷列表</h2>
        <div className='el_conent'>
          <div className='el-Button'>
            <div>
              <span>考试类型：</span>
              <Form.Item>
                {getFieldDecorator('exam_type', {
                  // rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Select style={{ width: 200 }} >
                    {
                      examTypedata && examTypedata.map((item, index) => (
                        <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                      ))
                    }
                  </Select>
                )}
              </Form.Item>
            </div>
            <div>
              <span>题目类型：</span>
              <Form.Item>
                {getFieldDecorator('subject_type', {
                  // rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Select style={{ width: 200 }} >
                    {
                      subjectdata && subjectdata.map((item, index) => (
                        <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                      ))
                    }
                  </Select>
                )}
              </Form.Item>
            </div>
            <Button type="primary" icon="search" onClick={about}>查询</Button>
          </div>
        </div>
        <div className='el_list'>
          <div className='list_hot'>
            <div className='list_her'>
              <span>试卷列表</span>
              <div className='list_tab'>
                <Radio.Group style={{ marginBottom: 16 }}>
                  <Radio.Button value="small">全部</Radio.Button>
                  <Radio.Button value="default">进行中</Radio.Button>
                  <Radio.Button value="large">已结束</Radio.Button>
                </Radio.Group>
              </div>
            </div>
            <div className='list_care'>
              <Table columns={columns} dataSource={exam} rowKey='exam_exam_id' />
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

const MapStateToProps = (state) => {
  return { ...state.exam }
}
const MapStateToDispatch = (dispatch) => {
  return {
    getexamType: () => {
      dispatch({
        type: 'exam/getexamType'
      })
    },
    getSubject: () => {
      dispatch({
        type: 'exam/getSubject'
      })
    },
    examList: () => {
      dispatch({
        type: 'exam/examList'
      })
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));




