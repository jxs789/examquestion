import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Button, Form, Input, Select, Tabs } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

function IndexPage(props) {
  //添加用户
  useEffect(() => {
    props.getviewauthority()
    props.Identity()
  }, [])
  let { identityData, userData, viewauthorityData, apiauthorityData } = props

  return (
    <div className='main_item'>
          <Button>给身份设置视图权限</Button><br />
          <Select style={{ width: '32%' }} defaultValue="请选择身份id">
            {
              identityData && identityData.map((item) => (
                <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
              ))
            }
          </Select><br />
          <Select style={{ width: '32%' }} defaultValue="请选择视图权限id">
            {
              viewauthorityData && viewauthorityData.map((item) => (
                <Option value={item.view_authority_id} key={item.view_authority_id}>{item.view_authority_text}</Option>
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
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
