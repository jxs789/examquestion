import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import './IndexPage.scss';
import { Button, Form, Select, message } from 'antd';

const { Option } = Select;

function IndexPage(props) {
  //添加用户
  useEffect(() => {
    props.getviewauthority()
  }, [])
  let { viewauthorityData } = props;
  let [view, setview] = useState('请选择已有视图')
  let getView = (value) => {
    setview(value)
  }
  let sure = (e) => {
    e.preventDefault();
    let view_authority_text = viewauthorityData && viewauthorityData.find(item => item.view_authority_id === view).view_authority_text
    props.Addview({
      view_id: view,
      view_authority_text
    })
    if (props.viewCode === 0) {
      message.error('视图权限重复');
    }
  }
  return (
    <div className='main_item'>
      <Button>添加视图接口权限</Button><br />
      <Select style={{ width: '32%' }}
        value={view}
        onChange={getView}>
        {
          viewauthorityData && viewauthorityData.map((item) => (
            <Option value={item.view_authority_id} key={item.view_authority_id}>{item.view_authority_text}</Option>
          ))
        }
      </Select>
      <div>
        <Button type="primary" htmlType="submit" className='btn_active' onClick={sure}>确定</Button>
        <Button>重置</Button>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => {
  return { ...state.user }
}
const MapStateToDispatch = (dispatch) => {
  return {
    getviewauthority: () => {
      dispatch({
        type: 'user/getviewauthority'
      })
    },
    Addview: (payload) => {
      dispatch({
        type: 'user/Addview',
        payload
      })
    },
  }
}

export default connect(MapStateToProps, MapStateToDispatch)(Form.create()(IndexPage));
