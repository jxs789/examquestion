import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Table, Form, Modal, Input, Select } from 'antd';
import './IndexPage.scss';

const { Option } = Select;

function IndexPage(props) {
  useEffect(() => {
    props.getGrade()
  }, [])
  const columns = [
    {
      title: '班级名',
      dataIndex: 'grade_name',
    },
    {
      title: '课程名',
      dataIndex: 'subject_text',
    }, {
      title: '教室号',
      dataIndex: 'room_text',
    }, {
      title: '操作',
      dataIndex: '',
      render: (text, rect) => <div>
        <span onClick={Edit}>修改|</span>
        <span onClick={Delete}>删除</span>
      </div>,
    }]
  let Edit = () => {
    console.log(45)
  }
  let Delete = () => {
    console.log(78)

  }
  let [getvisible, setvisible] = useState(false)
  let addClass = () => {
    setvisible(true)
  }
  let handleOk = () => {
    props.form.validateFields((err, values) => {
      if (!err) {

      }
    })
    setvisible(false)
  }
  let handleCancel = () => {
    setvisible(false)
  }

  const { getFieldDecorator } = props.form;
  let { gradedata } = props;
  console.log(props)
  return (
    <Form>
      <div className='content'>
        <h2>班级管理</h2>
        <div className='el_conent'>
          <div className='el-Button'>
            <Button type="primary" icon="plus" onClick={addClass}>添加班级</Button>
          </div>
          <div className='list_care'>
            <Table columns={columns} dataSource={gradedata} rowKey='grade_id' />
          </div>
        </div>
      </div>
      <Modal title="添加班级" visible={getvisible}
        footer={[
          <Button key='1' onClick={handleCancel}>
            取消
          </Button>,
          <Button key='2' type="primary" onClick={handleOk}>
            提交
          </Button>
        ]}
      >
        <p>*班级名:</p>
        <Form.Item>
          {getFieldDecorator('classname', {
            rules: [{ required: true, message: '请输入班级名' }],
          })(
            <Input placeholder="班级名"
            />,
          )}
        </Form.Item>
        <p>*教室号:</p>
        <Form.Item>
          {getFieldDecorator('classroom', {
            rules: [{ required: true, message: '请选择教室号' }],
          })(
            <Select style={{ width: "100%" }}>
              <Option value='78'>7878</Option>
            </Select>
          )}
        </Form.Item>
        <p>*课程名:</p>
        <Form.Item>
          {getFieldDecorator('subject', {
            rules: [{ required: true, message: '请选择课程名' }],
          })(
            <Select style={{ width: "100%" }}>
              <Option value='78'>545</Option>
            </Select>
          )}
        </Form.Item>
      </Modal>
    </Form>
  );
}

const MapStateToProps = (state) => {
  return { ...state.class }
}
const MapStateToDispatch = (dispatch) => {
  return {
    getGrade: () => {
      dispatch({
        type: 'class/getGrade'
      })
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));




