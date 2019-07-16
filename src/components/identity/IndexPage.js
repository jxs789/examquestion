import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Button, Form, Input, Select, Tabs } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

function IndexPage(props) {
  //添加用户
  useEffect(() => {

  }, [])
  const { getFieldDecorator } = props.form;

  return (
    <div className='main_item'>
    <Button>添加身份</Button>
    <Form.Item>
      {getFieldDecorator('identity_Name')(
        <Input placeholder="请输入身份名称" />,
      )}
    </Form.Item>
    <div>
      <Button type="primary" htmlType="submit" className='btn_active'>确定</Button>
      <Button>重置</Button>
    </div>
  </div>
  );
}

const MapStateToProps = (state) => {
  return { ...state }
}
const MapStateToDispatch = (dispatch) => {
  return {
   
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
