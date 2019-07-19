import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Button, Form, Select, message } from 'antd';

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

  let sure = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        props.Addapiauth({
          identity_id: values.identity_id,
          api_authority_id: values.api_authority_id
        })
      }
    })
  }
  const { getFieldDecorator } = props.form;
  let { identityData, apiauthorityData } = props
  return (
    <div className='main_item'>
      <Button>给身份设置api接口权限</Button><br />
      <Form.Item>
        {getFieldDecorator('identity_id', {
          rules: [{ required: true, message: '请选择身份id！' }],
        })(
          <Select style={{ width: '32%' }}>
            {
              identityData && identityData.map((item) => (
                <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
              ))
            }
          </Select>
        )}
      </Form.Item>
      <br />
      <Form.Item>
        {getFieldDecorator('api_authority_id', {
          rules: [{ required: true, message: '请选择身份id！' }],
        })(
          <Select style={{ width: '32%' }}>
            {
              apiauthorityData && apiauthorityData.map((item) => (
                <Option value={item.api_authority_id} key={item.api_authority_id}>{item.api_authority_text}</Option>
              ))
            }
          </Select>
        )}
      </Form.Item>

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
