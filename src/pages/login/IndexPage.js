import React, { useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

function IndexPage(props) {
  //点击跳转
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({ user_name: values.username, user_pwd: values.password });
      }
    });
  }
  //判断是否登陆成功
  useEffect(() => {
    if (props.isLogin === 1) {
      message.success('登录成功');
      let path = "/";
      if (props.location.search) {
         path = decodeURIComponent(props.location.search.split('=')[1])
      }
      props.history.push('/home')
      console.log(props)
    } else if (props.isLogin === 0) {
      message.error('用户名密码不正确');
    }
  }, [props.isLogin])
  const { getFieldDecorator } = props.form;

  return (
    <div className='login'>
      <div className='login_Box'>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              validateTrigger: 'onBlur',
              rules: [
                { required: true, message: '请输入用户名!' },
                { min: 6, max: 15, message: '请输入6~15位!' }
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
              />
              )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              validateTrigger: 'onBlur',
              rules: [
                { required: true, message: '请输入密码！密码不能为空' },
                { pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入正确的密码!' }
              ],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
              />
              )}
          </Form.Item>
          <Form.Item>
            <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码
          </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
          </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
}

IndexPage.propTypes = {
};

const MapStateToProps = (state) => {
  return { ...state.login }
}
const MapStateToDispatch = (dispatch) => {
  return {
    login: payload => {
      dispatch({
        type: 'login/login',
        payload
      })
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
