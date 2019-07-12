import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {  Route, Switch,NavLink } from 'dva/router';
import AddTest from './questions/addtest/IndexPage'
import TestClassify from './questions/testclassify/IndexPage'
import CheckTest from './questions/checktest/IndexPage'
// import Detail from './questions/checktest/detail/IndexPage'
import './IndexPage.scss'
const { SubMenu } = Menu;
const { Sider, Content } = Layout;

function IndexPage() {
  return (
    <Layout className='box'>
      <div className='head'>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
      </div>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            theme="dark"
          >
            <SubMenu
              title={
                <span>
                  <Icon type="mail" />
                  <span>试题管理</span>
                </span>
              }
            >
              <Menu.Item><NavLink to='/home/questions/addtest'>添加试题</NavLink></Menu.Item>
              <Menu.Item><NavLink to='/home/questions/testclassify'>试题分类</NavLink></Menu.Item>
              <Menu.Item><NavLink to='/home/questions/checktest'>查看试题</NavLink></Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="appstore" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item>添加用户</Menu.Item>
              <Menu.Item>用户展示</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="appstore" />
                  <span>试题管理</span>
                </span>
              }
            >
              <Menu.Item>添加考试</Menu.Item>
              <Menu.Item>试卷列表</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="appstore" />
                  <span>班级管理</span>
                </span>
              }
            >
              <Menu.Item>班级管理</Menu.Item>
              <Menu.Item>教室管理</Menu.Item>
              <Menu.Item>学生管理</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
            <Switch>
              <Route path='/home/questions/addtest' component={AddTest} />
              <Route path='/home/questions/testclassify' component={TestClassify} />
              <Route path='/home/questions/checktest' component={CheckTest} />
            </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

IndexPage.propTypes = {
};


export default IndexPage;


// <Route path='/home/questions/checktest/detail' component={Detail} />
