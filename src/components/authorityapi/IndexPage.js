import React, { useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Button, Form, Input, message } from 'antd';

function IndexPage(props) {

  useEffect(() => {
    if (props.apiCode === 1) {
      message.success('添加成功');
    }
  }, [props.apiCode])

  let sure = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.Addapi({
          api_authority_text: values.Permission_Name,
          api_authority_url: values.Permission_Url,
          api_authority_method: values.Permission_method
        })
      }
    })
  }
  const { getFieldDecorator } = props.form;

  return (
    <div className='main_item'>
      <Button>添加api接口权限</Button>
      <Form.Item>
        {getFieldDecorator('Permission_Name',{
            rules: [{ required: true, message: '请输入api接口权限名称!' }],
          })(
          <Input placeholder="请输入api接口权限名称" />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('Permission_Url',{
            rules: [{ required: true, message: '请输入api接口权限url!' }],
          })(
          <Input placeholder="请输入api接口权限url" />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('Permission_method',{
            rules: [{ required: true, message: '请输入api接口权限名称!' }],
          })(
          <Input placeholder="请输入api接口权限名称" />,
        )}
      </Form.Item>
      <div><Button type="primary" htmlType="submit"
        onClick={sure}
        className='btn_active'>确定</Button>
        <Button>重置</Button></div>
    </div>
  );
}

const MapStateToProps = (state) => {
  return { ...state.user }
}
const MapStateToDispatch = (dispatch) => {
  return {
    Addapi: (payload) => {
      dispatch({
        type: 'user/Addapi',
        payload
      })
    },
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
