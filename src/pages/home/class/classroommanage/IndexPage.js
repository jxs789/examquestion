import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Table, Form, Modal, Input } from 'antd';

// const { Option } = Select;

import './IndexPage.scss';


function IndexPage(props) {
  
const columns = [
  {
    title: '教室号',
    dataIndex: 'room_text',
  }, {
    title: '操作',
    dataIndex: '',
    render: (text, rect) => <div>
      <span onClick={Delete}>删除</span>
    </div>,
  }]
  useEffect(() => {
    props.getRoom()
  }, [])
  let [getvisible, setvisible] = useState(false)
  let Delete = () => {
    console.log('删除')
  }
  let handleOk = () => {
    props.form.validateFields((err, values) => {

    })
    setvisible(false)
  }
  let handleCancel = () => {
    setvisible(false)
  }
  let addClassroom = () => {
    setvisible(true)
  }
  const { getFieldDecorator } = props.form;
  const { roomdata } = props;
  console.log(roomdata)
  return (
    <Form>
      <div className='content'>
        <h2>教室管理</h2>
        <div className='el_conent'>
          <div className='el-Button'>
            <Button type="primary" icon="plus" onClick={addClassroom}>添加教室</Button>
          </div>
          <div className='list_care'>
            <Table columns={columns} dataSource={roomdata} rowKey='room_id' />
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
        <p>*教室号:</p>
        <Form.Item>
          {getFieldDecorator('classname', {
            rules: [{ required: true, message: '请输入班级名' }],
          })(
            <Input placeholder="教室号"
            />
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
    getRoom: () => {
      dispatch({
        type: 'class/getRoom'
      })
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
