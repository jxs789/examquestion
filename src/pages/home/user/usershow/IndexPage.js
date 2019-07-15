import React from 'react';
import { connect } from 'dva';
import './IndexPage.scss';

function IndexPage() {
  return (
    <div>
      用户展示
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
