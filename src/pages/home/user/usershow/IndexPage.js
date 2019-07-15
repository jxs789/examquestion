import React, { useEffect } from 'react';
import { connect } from 'dva';
import {  Tabs, Table } from 'antd';
import styles from './IndexPage.scss';


function IndexPage(props) {
    const columns = [
        {
            title: '用户名',
            dataIndex: 'user_name'
        },
        {
            title: '密码',
            dataIndex: 'user_pwd',
        },
        {
            title: '身份',
            dataIndex: 'identity_text',
        }]

    const columns_one = [
        {
            title: '身份名称',
            dataIndex: 'identity_text'
        }]

    const columns_tow = [
        {
            title: 'api权限名称',
            dataIndex: 'api_authority_text'
        }, {
            title: 'api权限url',
            dataIndex: 'api_authority_url'
        }, {
            title: 'api权限方法',
            dataIndex: 'api_authority_method'
        }]

    const columns_theer = [
        {
            title: '身份名称',
            dataIndex: 'identity_text'
        },
        {
            title: 'api权限名称',
            dataIndex: 'api_authority_text',
        },
        {
            title: 'api权限url',
            dataIndex: 'api_authority_url',
        },
        {
            title: 'api权限方法',
            dataIndex: 'api_authority_method',
        }]

    const columns_feer = [
        {
            title: '试图权限名称',
            dataIndex: 'view_authority_text'
        },
        {
            title: '试图id',
            dataIndex: 'view_id',
        }]

    const columns_teer = [
        {
            title: '身份',
            dataIndex: 'identity_text'
        },
        {
            title: '试图名称',
            dataIndex: 'view_authority_text',
        },
        {
            title: '试图id',
            dataIndex: 'view_id',
        }]

    const { TabPane } = Tabs;


    useEffect(() => {
        props.user();
        props.life();
        props.join();
        props.part();
        props.look();
        props.map()
    }, [])

    let { userAllList, userAllLife ,userAllJoin,userAllPart,userAllLook,userAllMap} = props
    // console.log(userAllList)
    console.log(userAllMap)
    return (
        <div className={styles.content}>
            <h2 className={styles.content_h2}>用户展示</h2>
            <div className={styles.tab}>
                <Tabs type="card">
                    <TabPane tab="用户数据" key="1">
                        <h2>用户数据</h2>
                        <Table columns={columns} rowKey='user_id' dataSource={userAllList && userAllList} />
                    </TabPane>
                    <TabPane tab="身份数据" key="2">
                        <h2>身份数据</h2>
                        <Table columns={columns_one} rowKey='identity_id' dataSource={userAllLife && userAllLife} />
                    </TabPane>
                    <TabPane tab="api接口权限" key="3">
                        <h2>api接口权限</h2>
                        <Table columns={columns_tow} rowKey='api_authority_id' dataSource={userAllJoin && userAllJoin} />
                    </TabPane>
                    <TabPane tab="身份和api接口关系" key="4">
                         <h2>身份和api接口关系</h2>
                         <Table columns={columns_theer} rowKey='identity_api_authority_relation_id' dataSource={userAllPart && userAllPart} />
                     </TabPane>
                     <TabPane tab="视图权限接口" key="5">
                         <h2>视图权限接口</h2>
                         <Table columns={columns_feer} rowKey='view_id' dataSource={userAllLook && userAllLook} />
                     </TabPane>
                     <TabPane tab="身份和视图权限关系" key="6">
                         <h2>身份和视图权限关系</h2>
                         <Table columns={columns_teer} rowKey='view_id' dataSource={userAllMap && userAllMap} />
                     </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

IndexPage.propTypes = {
};

const mapStateToProps = state => {
    return {
        ...state.user
    }
}
const mapdispatchToProps = dispatch => {
    return {
        user() {
            dispatch({
                type: 'user/userAlllist'
            })
        },
        life() {
            dispatch({
                type: 'user/userAlllife'
            })
        },
        join() {
            dispatch({
                type: 'user/userAlljoin'
            })
        },
        part() {
            dispatch({
                type: 'user/userAllpart'
            })
        },
        look() {
            dispatch({
                type: 'user/userAlllook'
            })
        },
        map() {
            dispatch({
                type: 'user/userAllmap'
            })
        }
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(IndexPage);



 // <TabPane tab="api接口权限" key="3">
                    //     <h2>api接口权限</h2>
                    //     <Table columns={columns_tow} rowKey='user_id' dataSource={userAllList && userAllList} />
                    // </TabPane>
                    // <TabPane tab="身份和api接口关系" key="4">
                    //     <h2>身份和api接口关系</h2>
                    //     <Table columns={columns_theer} rowKey='user_id' dataSource={userAllList && userAllList} />
                    // </TabPane>
                    // <TabPane tab="视图权限接口" key="5">
                    //     <h2>视图权限接口</h2>
                    //     <Table columns={columns_feer} rowKey='user_id' dataSource={userAllList && userAllList} />
                    // </TabPane>
                    // <TabPane tab="身份和视图权限关系" key="6">
                    //     <h2>身份和视图权限关系</h2>
                    //     <Table columns={columns_teer} rowKey='user_id' dataSource={userAllList && userAllList} />
                    // </TabPane>


   // <h2 className={styles.content_h3}>用户数据</h2>
