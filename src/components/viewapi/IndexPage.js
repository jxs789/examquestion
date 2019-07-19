import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Button, Form, Select, message } from 'antd';

const { Option } = Select;

function IndexPage(props) {
  //添加用户
  useEffect(() => {
    props.getviewauthority()
  }, [])
  let { viewauthorityData } = props;

  let sure = () => {
    props.form.validateFields((err, values) => {
      let view_authority_text = viewauthorityData && viewauthorityData.find(item => item.view_authority_id === values.view).view_authority_text
      if (!err) {
        props.Addview({
          view_id:values.view,
          view_authority_text
        })
        if (props.viewCode === 0) {
          message.error('视图权限重复');
        }
      }
    })

  }
  const { getFieldDecorator } = props.form;
  return (
    <div className='main_item'>
      <Button>添加视图接口权限</Button><br />
      <Form.Item>
        {getFieldDecorator('view', {
          rules: [{ required: true, message: '请选择已有视图' }],
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
    Addview: (payload) => {
      dispatch({
        type: 'user/Addview',
        payload
      })
    },
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
