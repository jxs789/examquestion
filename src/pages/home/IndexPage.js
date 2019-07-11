<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
// import { connect } from 'dva';
import styles from './IndexPage.scss'
import { Layout, Menu, Icon, Button } from 'antd';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function IndexPage() {
  return (
    <Layout className='box'>
      <div className='head'>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
      </div>
      <Layout>
        <Sider>
          <Menu
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Navigation Two</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}

IndexPage.propTypes = {
};


export default IndexPage;
=======
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Router, Route, Switch,NavLink } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon, message, Dropdown } from 'antd';


import Addtest from './addtest/IndexPage'
import Adduser from './adduser/IndexPage'
import Checktest from './checktest/IndexPage'
import Classmanage from './classmanage/IndexPage'
import Classroommanage from './classroommanage/IndexPage'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  menu = (
    <Menu onClick={this.onClick}>
      <Menu.Item key="1">个人中心</Menu.Item>
      <Menu.Item key="2">我的班级</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">设置</Menu.Item>
      <Menu.Item key="4">退出登录</Menu.Item>
    </Menu>
  );
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" style={{ width: '150px', height: 'auto' }} alt="" />
          </div>
          <Dropdown overlay={this.menu}>
            <span style={{ height: '100%', width: "150px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" style={{ width: '40px', height: '40px', verticalAlign: 'middel', borderRadius: '50%', margin: '0 10px' }} alt="" />用户名
          </span>
          </Dropdown>
        </div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>试卷管理</span>
                  </span>
                }
              >
                <Menu.Item><NavLink to='/home/addtest'/>添加试题</Menu.Item>
                <Menu.Item><NavLink to='/home/adduser'/>试题分类</Menu.Item>
                <Menu.Item><NavLink to='/home/Checktest'/>查看试题</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="user" />
                    <span>用户管理</span>
                  </span>
                }
              >
                <Menu.Item key="4"><NavLink to='/home/classmanage'/>添加用户</Menu.Item>
                <Menu.Item key="5"><NavLink to='/home/classroommanage'/>用户展示</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="team" />
                    <span>考试管理</span>
                  </span>
                }
              >
                <Menu.Item key="7">添加考试</Menu.Item>
                <Menu.Item key="8">试卷列表</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="team" />
                    <span>班级管理</span>
                  </span>
                }
              >
                <Menu.Item key="7">班级管理</Menu.Item>
                <Menu.Item key="8">学生管理</Menu.Item>
                <Menu.Item key="9">教室管理</Menu.Item>
              </SubMenu><SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="team" />
                    <span>阅卷管理</span>
                  </span>
                }
              >
                <Menu.Item key="10">待批班级</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Switch>
              <Route path="/home/addtest" component={Addtest} />
              <Route path="/home/adduser" component={Adduser} />
              <Route path="/home/checktest" component={Checktest} />
              <Route path="/home/classmanage" component={Classmanage} />
              <Route path="/home/classroommanage" component={Classroommanage} />
            </Switch>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default connect()(Home);
>>>>>>> qbc
