import React,{Component} from 'react';
import { connect } from 'dva';
import { Radio,Select ,Button } from 'antd';
import styles from './IndexPage.scss';

class Checktest extends Component{
   componentDidMount() {
         this.props.examQuestions()
    }
    render(){
      let { Examquestions } = this.props
      console.log(Examquestions)
       return (
          <div className="content">
                <h2 style={{ marginTop: "10px" }}>查看试题</h2>
                 <div className="el_conent">
                    <div>
                        <span>课程类型：</span>
                        <div className="el-Button">
                        <div>
                            <span>考试类型：</span>
                             <Select defaultValue='周考二' style={{ width: 120 }} >
                             
                            </Select> 
                        </div>
                        <div>
                        <span>题目类型：</span>
                         <Select defaultValue='' style={{ width: 120 }} >

                        </Select>
                        </div>
                        <Button type="primary" icon="search">搜索</Button>  
                        </div>
                    </div>
                </div>
                 <div>
                {
                    Examquestions && Examquestions.map((el,i)=>{
                        return <div className="ant-list-item" key={i}>
                            <div className="ant-list-item-content ant-list-item-content-single">
                                <a href="">
                                    <div className="ant-list-item-meta">
                                        <div className="ant-list-item-meta-content">
                                            <h4 className="ant-list-item-meta-title">{el.title}</h4>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '10px' }}><div style={{ paddingBottom: '20px' }}>
                                        <div className="ant-tag ant-tag-blue">{el.questions_type_text}</div>
                                        <div className="ant-tag ant-tag-geekblue">{el.subject_text}</div>
                                        <div className="ant-tag ant-tag-orange">{el.exam_name}</div>
                                    </div><span style={{ marginBottom: '10px',display:'inline-block'}}>{el.user_name} 发布</span></div>
                                </a></div>
                            <ul className="ant-list-item-action">
                                <li><a href="javascript:;">编辑</a>
                                </li>
                            </ul>
                        </div>
                    })
                }
            </div>
            </div>
        );
      }
}


const mapStateToProps = state => {
    return {
        ...state.exam
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        examQuestions(){
            dispatch({
                type: 'exam/ExamQuestions'
            })
        }
    }
}
export default connect(mapStateToProps,mapDisaptchToProps)(Checktest);
