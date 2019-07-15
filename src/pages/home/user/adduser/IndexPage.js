import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Button, Form, Input, Select, Tabs } from 'antd';

import OneUser from '@/components/oneUser/IndexPage'  //第一个
import Identity from '@/components/identity/IndexPage'  //第二个
import Authorityapi from '@/components/authorityapi/IndexPage'  //第三个
import Viewapi from '@/components/viewapi/IndexPage'  //第四个
import Identityapi from '@/components/identityapi/IndexPage'  //第五个
import Viewauth from '@/components/viewauth/IndexPage'  //第六个

const { Option } = Select;
const { TabPane } = Tabs;

function IndexPage(props) {

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
    <Form className='main'>
      <h2>添加用户</h2>
      <div className='main_box'>
        <OneUser />
        <Identity />
        <Authorityapi />
        <Viewapi />
        <Identityapi />
        <Viewauth />
        {/* {第一个} */}

        {/* {第二个} */}

        {/* {第三个} */}

        {/* {第四个} */}

        {/* {第五个} */}

        {/* {第六个} */}

      </div>
    </Form>
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
    },
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));