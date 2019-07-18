import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Table, Form, Modal, Input, Select } from 'antd';
import './IndexPage.scss';

const { Option } = Select;

function IndexPage(props) {
  useEffect(() => {

  }, [])
  const columns = [
    {
      title: '班级名',
      dataIndex: 'grade_name',
    },
    {
      title: '课程名',
      dataIndex: 'user_name',
    }, {
      title: '教室号',
      dataIndex: 'start_time',
    }, {
      title: '操作',
      dataIndex: '',
      render: (text, rect) => <div>
        <span>修改</span>
        <span>删除</span>
      </div>,
    }]

  let [getvisible, setvisible] = useState(false)
  let addClass = () => {
    setvisible(true)
  }
  let handleOk = () => {
    props.form.validateFields((err, values) => {

    })
    setvisible(false)
  }
  let handleCancel = () => {
    setvisible(false)
  }
  // let { } = props
  const { getFieldDecorator } = props.form;

  return (
    <Form>
      <div className='content'>
        <h2>班级管理</h2>
        <div className='el_conent'>
          <div className='el-Button'>
            <Button type="primary" icon="plus" onClick={addClass}>添加班级</Button>
          </div>
          <div className='list_care'>
            <Table columns={columns} />
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
        <Form.Item>
          {getFieldDecorator('classname', {
            rules: [{ required: true, message: '请输入班级名' }],
          })(
            <Input placeholder="班级名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('classroom', {
            rules: [{ required: true, message: '请选择教室号' }],
          })(
            <Select style={{ width: "100%" }}>
              <Option value='78'>7878</Option>
            </Select>
          )}
        </Form.Item>
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

  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));




