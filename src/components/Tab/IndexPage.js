import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Button, Form, Input, Select, message } from 'antd';

const { Option } = Select;

function IndexPage(props) {
  useEffect(() => {
    props.Identity()
    props.getuser()
    if (props.getuserCode === 1) {
      message.success('添加成功');
    }
  }, [props.getuserCode])

  let addUser = () => {
    props.form.validateFields((err, values) => {
      //如果是更新的话就多传一项
      if (!err) {
        props.type === 'update' ?
          props.updataUser({
            user_name: values.username,
            user_pwd: values.password,
            identity_id: values.identity_id,
            user_id: values.name_id
          }) : props.Adduser({
            user_name: values.username,
            user_pwd: values.password,
            identity_id: values.identity_id
          })
      }
    })
  }

  const { getFieldDecorator } = props.form;
  let { identityData, userData } = props;

  return (
    <>
      {
        props.type === 'update' ?
          <Form.Item>
            {getFieldDecorator('name_id', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Select style={{ width: '32%' }}>
                {
                  userData && userData.map((item) => (
                    <Option value={item.user_id} key={item.user_id}>{item.user_name}</Option>
                  ))
                }
              </Select>
            )}
          </Form.Item>
          : null}
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input placeholder="请输入用户名" />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input placeholder="请输入密码" />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('identity_id', {
          rules: [{ required: true, message: '请选择身份id!' }],
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

      <div className='oneBtn'>
        <Button type="primary" htmlType="submit"
          onClick={addUser}
          className='btn_active'>确定</Button>
        <Button>重置</Button>
      </div>
    </>
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
    //添加用户确定
    Adduser: (payload) => {
      dispatch({
        type: 'user/Adduser',
        payload
      })
    },
    getuser: () => {
      dispatch({
        type: 'user/getuser'
      })
    },
    //更新用户确定
    updataUser: (payload) => {
      dispatch({
        type: 'user/updataUser',
        payload
      })
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
