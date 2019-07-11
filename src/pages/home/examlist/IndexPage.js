import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';

function IndexPage() {
  return (
    <div>
      试题列表
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
