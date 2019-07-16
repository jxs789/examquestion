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
  }, [])
  let { viewauthorityData } = props
  return (
    <div className='main_item'>
          <Button>添加视图接口权限</Button><br />
          <Select style={{ width: '32%' }} defaultValue="请选择已有视图">
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
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
