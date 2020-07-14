import React  from 'react'
// import {HashRouter} from 'react-router-dom'
import './style.scss'

import { connect } from 'react-redux'
import {addCom} from '@/store/actions/comment'

import { Input , Rate , Button , Table, Checkbox ,Divider} from 'antd';

import { 
    FrownOutlined, 
    MehOutlined, 
    SmileOutlined 
    } from '@ant-design/icons';

const { TextArea } = Input;

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

const columns = [
    {
      title: '评价时间',
      dataIndex: 'time',
      render: time => <a>{time}</a>,
    },
    {
      title: '评分',
      dataIndex: 'levl',
    },
    {
      title: '评语',
      dataIndex: 'text',
    },
  ];

function mapStateToProps(state){
    return {
        comments : state.comment.comments
    }
}

function mapActionToProps(dispatch){
    return {
        toAdd : (payload)=>dispatch(addCom(payload))
    }
}

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state={
            levl : 5 ,
            text : ''
        }
    }
    change(value){
        console.log('评分',value)
        this.setState({
            levl : value
        })
    }
    changeText(e){
        console.log('评价内容',e.target.value)
        this.setState({
            text : e.target.value
        })
    }
    submit(){
        let d = new Date()
        let newState = this.state
        newState.time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '/' + (d.getHours()) + ':' + d.getMinutes() + ':' + d.getSeconds()
        newState.key = Date.now()
        this.props.toAdd(newState)
    }
    render(){
        // const [selectionType] = useState('checkbox');
        // console.log(this.props)
        return (
            <div className='comment'>
                <div className='title'>学员评价</div>
                <Divider></Divider>
                <div className='con'>
                    <TextArea rows={8} onBlur={this.changeText.bind(this)}/>
                    <div className='rate'>
                        <Rate
                        defaultValue={this.state.levl}
                        character={({ index }) => {
                            return customIcons[index + 1];
                        }}
                        onChange={this.change.bind(this)}
                        />
                    </div>
                    <Button type="primary" onClick={this.submit.bind(this)}>提交评价</Button>
                    <div className='comList'>
                        <Table
                        rowSelection={{
                            type: Checkbox,
                            ...rowSelection,
                          }}
                            columns={columns}
                            dataSource={this.props.comments}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Comment)