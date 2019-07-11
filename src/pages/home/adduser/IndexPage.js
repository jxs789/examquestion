import React, { Component, useEffect } from 'react';
import { Modal, Button, Input, Table, message } from 'antd';
import { connect } from 'dva';
import './IndexPage.scss'
const columns = [
    {
        title: '类型ID',
        dataIndex: 'questions_type_id',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: '类型名称',
        dataIndex: 'questions_type_text',
    },
    {
        title: '操作',
        dataIndex: 'questions_type_sort',
    }
];


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
class Adduser extends Component {
    
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
         this.props.getData()
    };
    render() {
        let { arr } = this.state;
        let { questions } = this.props
        // console.log(this.props.questions)
        return (
            <div className="content">
                <h2 style={{ marginTop: "10px" }}>考试分类</h2>
                <div className="el_conent">
                    <Button type="primary" onClick={this.showModal}>
                        + 添加类型
                    </Button>
                    <Modal
                        title="创建新类型"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}>
                        <Input placeholder="请输入类型名称" value={this.state.value} onChange={(e) => {
                            this.setState({
                                value: e.target.value
                            })
                        }}></Input>
                    </Modal>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={questions} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ...state.user
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        getData(){
            dispatch({
                type: 'user/getDatas'
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Adduser)





























  // this.setState({
        //     arr:newProps.exo.data
        // })

        // if(newProps.addCode){
        //     if(newProps.addCode.code*1===1*1 && newProps.addCode){
        //         this.setState({
        //             value:''
        //         })
        //     }
        // }


    //      handleOk = e => {
    //     let {arr} = this.state;
    //     this.props.type({
    //         text:this.state.value,
    //         sort:arr.length+1
    //     })
    //     message.info('数据插入成功');
    //     this.setState({
    //         visible: false,
    //     });
    // };