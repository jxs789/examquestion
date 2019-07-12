import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';

function IndexPage() {
  return (
    <div>
      学生管理
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
