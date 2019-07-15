import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Button, Form, Input, Select, Tabs } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

function IndexPage(props) {
  //添加用户
  useEffect(() => {
    props.Identity()
    props.getuser()
  }, [])

  let [identity_id, setidentity] = useState("请选择身份id")
  let getidentity = (value) => {
    setidentity(value)
  }
  let addUser = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      props.Adduser({
        user_name: values.username,
        user_pwd: values.password,
        identity_id
      })
    });
  }
  const { getFieldDecorator } = props.form;
  let { identityData, userData } = props;
  console.log(props.type)

  return (
    <>
      {
        props.type === 'update' ? (
          <Select style={{ width: '32%' }} >
            {
              userData && userData.map((item) => (
                <Option value={item.user_id} key={item.user_id}>{item.user_name}</Option>
              ))
            }
          </Select>
        ) : null}
      <Form.Item>
        {getFieldDecorator('username')(
          <Input placeholder="请输入用户名" />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password')(
          <Input placeholder="请输入密码" />,
        )}
      </Form.Item>
      <Select style={{ width: '32%' }} value={identity_id} onChange={getidentity}>
        {
          identityData && identityData.map((item) => (
            <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
          ))
        }
      </Select>
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
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
