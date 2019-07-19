import React from 'react';
import { Layout, Menu, Icon, Spin, Select } from 'antd';
import { Route, Switch, NavLink } from 'dva/router';
import AddTest from './questions/addtest/IndexPage'
import TestClassify from './questions/testclassify/IndexPage'
import CheckTest from './questions/checktest/IndexPage'
import Detail from './questions/checktest/detail/IndexPage' //试题详情
import Edit from './questions/checktest/edit/IndexPage' //编辑详情
import Adduser from './user/adduser/IndexPage'
import Usershow from './user/usershow/IndexPage'
import Addexam from './exam/addexam/IndexPage'
import Examlist from './exam/examlist/IndexPage'
import ListDetail from './exam/examlist/listDetail/IndexPage' //编辑详情
import Classmanage from './class/classmanage/IndexPage'
import Classroommanage from './class/classroommanage/IndexPage'
import Studentmanage from './class/studentmanage/IndexPage'

import { connect } from 'dva';
import './IndexPage.scss'

import { injectIntl } from 'react-intl';

const { SubMenu } = Menu;
const { Option } = Select;
const { Sider, Content } = Layout;

function IndexPage(props) {
  return (
    <Layout className='box'>
      <div className='head'>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />

        <Select defaultValue='中文'>
          <Option value='中文' onClick={() => { props.changeLocale('zh') }}>中文</Option>
          <Option value='英文' onClick={() => { props.changeLocale('en') }}>英文</Option>
        </Select>
      </div>
      <Layout>
        <Sider>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            <SubMenu
              title={
                <span>
                  <Icon type="mail" />
                  <span>{props.intl.formatMessage({ id: 'router.questions' })}</span>
                </span>
              }
            >
              <Menu.Item>
                <NavLink to='/home/questions/addtest'>{props.intl.formatMessage({ id: 'router.questions.add' })}</NavLink></Menu.Item>
              <Menu.Item>
                <NavLink to='/home/questions/testclassify'>{props.intl.formatMessage({ id: 'router.questions.view' })}</NavLink></Menu.Item>
              <Menu.Item>
                <NavLink to='/home/questions/checktest'>{props.intl.formatMessage({ id: 'router.questions.type' })}</NavLink></Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="appstore" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item><NavLink to='/home/user/Adduser' />添加用户</Menu.Item>
              <Menu.Item><NavLink to='/home/user/usershow' />用户展示</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="appstore" />
                  <span>试题管理</span>
                </span>
              }
            >
              <Menu.Item><NavLink to='/home/exam/addexam' />添加考试</Menu.Item>
              <Menu.Item><NavLink to='/home/exam/examlist' />试卷列表</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="appstore" />
                  <span>班级管理</span>
                </span>
              }
            >
              <Menu.Item><NavLink to='/home/class/classmanage' />班级管理</Menu.Item>
              <Menu.Item><NavLink to='/home/class/classroommanage' />教室管理</Menu.Item>
              <Menu.Item><NavLink to='/home/class/studentmanage' />学生管理</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          <Switch>
            {/* <Redirect from='/home' to='/home/questions/addtest' /> */}
            <Route path='/home/questions/addtest' component={AddTest} />
            <Route path='/home/questions/testclassify' component={TestClassify} />
            <Route path='/home/questions/checktest' component={CheckTest} />
            <Route path='/home/questions/detail/:id' component={Detail} />
            <Route path='/home/questions/edit/:id' component={Edit} />
            <Route path='/home/user/adduser' component={Adduser} />
            <Route path='/home/user/usershow' component={Usershow} />
            <Route path='/home/exam/addexam' component={Addexam} />
            <Route path='/home/exam/examlist' component={Examlist} />
            <Route path='/home/exam/listDetail/:id' component={ListDetail} />
            <Route path='/home/class/classmanage' component={Classmanage} />
            <Route path='/home/class/classroommanage' component={Classroommanage} />
            <Route path='/home/class/studentmanage' component={Studentmanage} />
          </Switch>
        </Content>
      </Layout>
      {props.global ? <div className='load'><Spin /></div> : null}
    </Layout>
  );
}

const MapStateToProps = (state) => {
  return { ...state.global, global: state.loading.global }
}
const MapStateToDispatch = (dispatch) => {
  return {
    changeLocale: payload => {
      dispatch({
        type: 'global/updateLocale',
        payload
      })
    }
  }
}

export default injectIntl(connect(MapStateToProps, MapStateToDispatch)(IndexPage));

