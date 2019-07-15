import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Button, Form, Input, Select, Tabs } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

function IndexPage(props) {
  //添加用户
  useEffect(() => {

  }, [])
  const { getFieldDecorator } = props.form;
  let { identityData, userData, viewauthorityData, apiauthorityData } = props
  return (
    <div className='main_item'>
          <Button>给身份设置api接口权限</Button><br />
          <Select style={{ width: '32%' }} defaultValue="请选择身份id">
            {
              identityData && identityData.map((item) => (
                <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
              ))
            }
          </Select><br />
          <Select style={{ width: '32%' }} defaultValue="请选择身份id">
            {
              apiauthorityData && apiauthorityData.map((item) => (
                <Option value={item.api_authority_id} key={item.api_authority_id}>{item.api_authority_text}</Option>
              ))
            }
          </Select>
          <div>
            <Button type="primary" htmlType="submit" className='btn_active'>确定</Button>
            <Button>重置</Button>
          </div>
        </div>
  );
}

const MapStateToProps = (state) => {
  return { ...state }
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
    }
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
