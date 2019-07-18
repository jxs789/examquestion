import React, { } from 'react';
import { connect } from 'dva';
import { Button, Table } from 'antd';

import './IndexPage.scss';

const columns = [
  {
    title: '教室号',
    dataIndex: 'start_time',
  }, {
    title: '操作',
    dataIndex: '',
    render: (text, rect) => <div>
      <span>删除</span>
    </div>,
  }]

function IndexPage() {
  return (
    <div>
      <div className='content'>
        <h2>教室管理</h2>
        <div className='el_conent'>
          <div className='el-Button'>
            <Button type="primary" icon="plus" >添加班级</Button>
          </div>
          <div className='list_care'>
            <Table columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
