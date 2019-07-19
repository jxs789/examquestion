import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Button, Form, Select, message } from 'antd';
const { Option } = Select;

function IndexPage(props) {
  //添加用户
  useEffect(() => {
    props.getviewauthority()
    props.Identity()
    if (props.ivCode === 1) {
      message.success('设定成功');
    }
  }, [props.ivCode])

  let sure = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        props.AddIdentityView({
          identity_id: values.identity_id,
          view_authority_id: values.view_authority_id
        })
      }
    })


  }
  let { identityData, viewauthorityData } = props
  const { getFieldDecorator } = props.form;
  return (
    <div className='main_item'>
      <Button>给身份设置视图权限</Button><br />
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
      </Form.Item><br />
      <Form.Item>
        {getFieldDecorator('view_authority_id', {
          rules: [{ required: true, message: '请选择身份id！' }],
        })(
          <Select style={{ width: '32%' }}>
            {
              viewauthorityData && viewauthorityData.map((item) => (
                <Option value={item.view_authority_id} key={item.view_authority_id}>{item.view_authority_text}</Option>
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
    getviewauthority: () => {
      dispatch({
        type: 'user/getviewauthority'
      })
    },
    Identity: () => {
      dispatch({
        type: 'user/Identity'
      })
    },
    AddIdentityView: (payload) => {
      dispatch({
        type: 'user/AddIdentityView',
        payload
      })
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
