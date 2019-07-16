import React, { useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Button, Form, Input, message } from 'antd';

function IndexPage(props) {
  //添加用户
  useEffect(() => {
    if (props.identityCode === 1) {
      message.success('添加成功');
    }
  }, [props.identityCode])

  const { getFieldDecorator } = props.form;
  let sure = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {

      props.Addidentity({
        identity_text: values.identity_Name
      })
    })
  }
  return (
    <div className='main_item'>
      <Button>添加身份</Button>
      <Form.Item>
        {getFieldDecorator('identity_Name')(
          <Input placeholder="请输入身份名称" />,
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
    Addidentity: (payload) => {
      dispatch({
        type: 'user/Addidentity',
        payload
      })
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
