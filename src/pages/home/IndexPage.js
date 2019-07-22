import React, { useEffect, useState } from 'react';
import { Layout, Menu, Icon, Spin, Select, Dropdown, Modal } from 'antd';
import { Route, Switch, NavLink, Redirect } from 'dva/router';

import { connect } from 'dva';
import './IndexPage.scss'

import { injectIntl } from 'react-intl';

const { SubMenu } = Menu;
const { Option } = Select;
const { Sider, Content } = Layout;


function IndexPage(props) {
  useEffect(() => {
  }, [])
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          个人中心
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          我的班级
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          设置
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );
  let [url, seturl] = useState('https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png')
  let [flag, setFlag] = useState(false)
  // console.log(props)
  let updateAvatar = () => {
    setFlag(true)
  }
  let handleOk = () => {
    setFlag(false)
  }
  let handleCancel = () => {
    setFlag(false)
  }

  let load = (e, res) => {
    let formData = new FormData();
    formData.append(e.target.files[0].name, e.target.files[0]);
    props.getUrl(formData)
    props.setUser({ user_id: res.user_id, avatar: props.imgUrl })
  }
  let { userInfo, myView, forbiddenView } = props;

  return (
    <Layout className='box'>
      <div className='head'>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />

        <Select defaultValue='中文'>
          <Option value='中文' onClick={() => { props.changeLocale('zh') }}>中文</Option>
          <Option value='英文' onClick={() => { props.changeLocale('en') }}>英文</Option>
        </Select>
        <Dropdown overlay={menu}>
          <a>
            <img src={props.imgUrl ? props.imgUrl : url} onClick={updateAvatar} className='head_img' />
            {userInfo.user_name}
          </a>
        </Dropdown>
      </div>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            // defaultOpenKeys={[myView[0].name]}
            // defaultSelectedKeys={[myView[0].children[0].name]}
            mode="inline"
          >
            {
              myView && myView.map(item => (
                <SubMenu
                  key={item.name}
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>{props.intl.formatMessage({ id: item.name })}</span>
                    </span>
                  }
                >{
                    item.children.map(val => val.name ? (
                      <Menu.Item key={val.name}>
                        <NavLink to={val.path}>{props.intl.formatMessage({ id: val.name })}</NavLink>
                      </Menu.Item>
                    ) : null)
                  }
                </SubMenu>
              ))
            }
          </Menu>
        </Sider>
        <Content>
          <Switch>
            {/* <Redirect from=''></Redirect> */}
            {
              myView && myView.map(item => (
                item.children.map(val => (
                  <Route key={val.path} path={val.path} component={val.component} />
                ))
              ))
            }
            {
              forbiddenView && forbiddenView.map(item => {
                <Redirect key={item.path} from={item.path} to='/403' />
              })
            }
            {/* <Redirect to='/404' /> */}
          </Switch>
        </Content>
      </Layout>
      {props.global ? <div className='load'><Spin /></div> : null}
      <Modal title="更改头像" visible={flag} onOk={handleOk} onCancel={handleCancel}>
        <input type="file" onChange={(e) => load(e, userInfo)} />
      </Modal>
    </Layout>
  );
}

const MapStateToProps = (state) => {
  return {
    ...state.global,
    ...state.login, global: state.loading.global,
    myView: state.login.myView,
    forbiddenView: state.login.forbiddenView
  }
}
const MapStateToDispatch = (dispatch) => {
  return {
    changeLocale: payload => {
      dispatch({
        type: 'global/updateLocale',
        payload
      })
    },
    //上传图片
    getUrl: payload => {
      // console.log(payload)
      dispatch({
        type: "login/url",
        payload
      })
    },
    setUser: payload => {
      // console.log(payload)
      dispatch({
        type: "login/getUserC",
        payload
      })
    },
  }
}

export default injectIntl(connect(MapStateToProps, MapStateToDispatch)(IndexPage));