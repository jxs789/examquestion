import React from 'react';
import  './IndexPage.scss';
import {  Form, Tabs } from 'antd';
import OneTab from '@/components/Tab/IndexPage'

const { TabPane } = Tabs;

function IndexPage(props) {
  //添加用户
  let callback = () => {
  }
  return (
    <div className='main_item'>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="添加用户" key="1"><OneTab type='add' /></TabPane>
        <TabPane tab="更新用户" key="2"><OneTab type='update' /></TabPane>
      </Tabs>
    </div>
  );
}

export default Form.create()(IndexPage);
