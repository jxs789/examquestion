import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Button, Form, Select,message } from 'antd';

const { Option } = Select;

function IndexPage(props) {
  //添加用户
  useEffect(() => {
    props.Identity()
    props.getapiauthority()
    if (props.apiauthCode === 1) {
      message.success('设定成功');
    }
  }, [props.apiauthCode])

  let [identity_id, setOne] = useState('请选择身份id')
  let [api_authority_id, setTwo] = useState('请选择身份id')
  let getOne = (value) => {
    setOne(value)
  }
  let getTwo = (value) => {
    setTwo(value)
  }
  let sure = () => {
    props.Addapiauth({
      identity_id,
      api_authority_id
    })
  }
  let { identityData, apiauthorityData } = props
  return (
    <div className='main_item'>
      <Button>给身份设置api接口权限</Button><br />
      <Select style={{ width: '32%' }} onChange={getOne} value={identity_id}>
        {
          identityData && identityData.map((item) => (
            <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
          ))
        }
      </Select><br />
      <Select style={{ width: '32%' }} defaultValue="请选择身份id" onChange={getTwo} value={api_authority_id}>
        {
          apiauthorityData && apiauthorityData.map((item) => (
            <Option value={item.api_authority_id} key={item.api_authority_id}>{item.api_authority_text}</Option>
          ))
        }
      </Select>
      <div>
        <Button type="primary" htmlType="submit" className='btn_active' onClick={sure}>确定</Button>
        <Button>重置</Button>
      </div>
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
    getapiauthority: () => {
      dispatch({
        type: 'user/getapiauthority'
      })
    },
    Addapiauth: (payload) => {
      dispatch({
        type: 'user/Addapiauth',
        payload
      })
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
