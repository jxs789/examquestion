import React from 'react';
import { connect } from 'dva';
import './IndexPage.scss';

function IndexPage() {
  return (
    <div>
      添加用户
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);