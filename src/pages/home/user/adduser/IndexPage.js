import React from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Form } from 'antd';

import OneUser from '@/components/oneUser/IndexPage'  //第一个
import Identity from '@/components/identity/IndexPage'  //第二个
import Authorityapi from '@/components/authorityapi/IndexPage'  //第三个
import Viewapi from '@/components/viewapi/IndexPage'  //第四个
import Identityapi from '@/components/identityapi/IndexPage'  //第五个
import Viewauth from '@/components/viewauth/IndexPage'  //第六个

function IndexPage(props) {
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
      </div>
    </Form>
  );
}

const MapStateToProps = (state) => {
  return { ...state.user }
}
const MapStateToDispatch = (dispatch) => {
  return {
    // Identity: () => {
    //   dispatch({
    //     type: 'user/Identity'
    //   })
    // },
    // getuser: () => {
    //   dispatch({
    //     type: 'user/getuser'
    //   })
    // },
    // getviewauthority: () => {
    //   dispatch({
    //     type: 'user/getviewauthority'
    //   })
    // },
    // getapiauthority: () => {
    //   dispatch({
    //     type: 'user/getapiauthority'
    //   })
    // },
    // //添加用户确定
    // Adduser: (payload) => {
    //   dispatch({
    //     type: 'user/Adduser',
    //     payload
    //   })
    // },
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));