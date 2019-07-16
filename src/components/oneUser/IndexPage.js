import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Button, Form, Input, Select, Tabs } from 'antd';
import OneTab from '@/components/oneTab/IndexPage'

const { Option } = Select;
const { TabPane } = Tabs;

function IndexPage(props) {
  //添加用户
  useEffect(() => {
    props.Identity()
    props.getuser()
    props.getviewauthority()
    props.getapiauthority()
  }, [])
  let callback = () => {
  }

  const { getFieldDecorator } = props.form;
  let { identityData, userData, viewauthorityData, apiauthorityData } = props
  return (
    <div className='main_item'>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="添加用户" key="1"><OneTab type='add' /></TabPane>
        <TabPane tab="更新用户" key="2"><OneTab type='update' /></TabPane>
      </Tabs>
    </div>
  );
}

const MapStateToProps = (state) => {
  return { ...state.user }
}
const MapStateToDispatch = (dispatch) => {
  return {
    Identity: () => {
      dispatch({
        type: 'user/Identity'
      })
    },
    getuser: () => {
      dispatch({
        type: 'user/getuser'
      })
    },
    getviewauthority: () => {
      dispatch({
        type: 'user/getviewauthority'
      })
    },
    getapiauthority: () => {
      dispatch({
        type: 'user/getapiauthority'
      })
    },
    //添加用户确定
    Adduser: (payload) => {
      dispatch({
        type: 'user/Adduser',
        payload
      })
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
