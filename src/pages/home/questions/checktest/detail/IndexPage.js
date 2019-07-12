import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';

function IndexPage() {
  return (
    <div className={styles.normal}>
        <div className="content"><h2 style={{marginTop: "10px" }}>试题详情</h2>
                <div className="ant-layout-content" style={{ background: 'rgb(255, 255, 255)', padding: '24px', margin: '0px 0px 20px', borderRadius: '10px', flex: '1 1 0%' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <span>出题人：</span>
                        <div></div>
                    </div>
                    <h3>题目信息</h3>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <div className="ant-tag ant-tag-blue"></div>
                        <div className="ant-tag ant-tag-geekblue"></div>
                        <div className="ant-tag ant-tag-orange"></div>
                    </div><h4></h4><div><div className="react-markdown">
                        <pre><p></p></pre>
                        <p>示例 2:</p>
                    </div></div></div>
                <div>
                </div>
            </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
