import React from 'react'

// import moment from 'moment'
// import {HashRouter} from 'react-router-dom'
import './style.scss'

import { Input , Table ,  Space , Popconfirm , Divider} from 'antd';

import {
  addTodo,
  delTodo,
  initTodo,
  updateTodo,
  // clearTodo
} from '@/store/actions/todo'



import { connect } from 'react-redux';
// import { SELECTION_ALL } from 'antd/lib/table/hooks/useSelection';

const {Search} = Input

const { Column } = Table;

function mapStateToProps(state){
    return {
        todoList : state.todo.list.todoList,
        doneList : state.todo.list.doneList
    }
}

function mapActionToProps(dispatch){
    return {
        addTodo : (payload)=>dispatch(addTodo(payload)),
        delTodo : (payload)=>dispatch(delTodo(payload)),
        initTodo : (payload)=>dispatch(initTodo(payload)),
        updateTodo : (payload)=>dispatch(updateTodo(payload)),
    }
}





class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
      //初始化表格
    componentDidMount(){
      this.props.initTodo()
    }
    //增加todo
    addTodo(value,event){
      // console.log('event',event)
      let payload = {
        title : value,
        isDone : false
      }
      this.props.addTodo(payload)
    }
    //删除
    delHandle(record){
      let payload = {
        _id : record._id
      }
      this.props.delTodo(payload)
    }
    // 修改状态
    changeTask = (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows[0]);
      let payload = {
        _id:selectedRows[0]._id,
        isDone : selectedRows[0].isDone
      }
      this.props.updateTodo(payload)
    }
    render(){
      const rowSelection = {
        onChange: this.changeTask,
        // disabled : SELECTION_ALL,
        getCheckboxProps: record => ({
          // disabled: true, //这个可以disabled

          // checked: 'checked' // 但是这货根本行不通啊。。。  = true, false , checked  都不中？
         }),
      };
      
        return (
            <div className='todo'>
                <div className='head'>
                    <div className='title'>新增待办事件</div>
                    <Divider></Divider>
                    <div className='input'>
                        <Search
                        placeholder="创建待办事件"
                        enterButton="创建"
                        size="large"
                        onSearch={this.addTodo.bind(this)}
                        allowClear={true}
                        />
                    </div>
                </div>
                <div className='con'>
                    <div className='title'>待办列表</div>
                    <Table 
                    dataSource={this.props.todoList}
                    rowSelection={rowSelection}
                    >
                      <Column title="创建时间" dataIndex="create_time" key="create_time" />
                      <Column title="事件名称" dataIndex="title" key="title" />
                      <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                          <Space size="middle">
                            <a>修改</a>
                            <Popconfirm placement="top" title='您确定要删除吗？' onConfirm={this.delHandle.bind(this,record)} okText="Yes" cancelText="No">
                              <a>删除</a>
                            </Popconfirm>
                          </Space>
                        )}
                      />
                    </Table>
                    <Divider />
                    <div className='title'>已完成</div>
                    <Table 
                    dataSource={this.props.doneList}
                    rowSelection={rowSelection}
                    defaultChecked={true}
                    
                    >
                      <Column title="创建时间" dataIndex="create_time" key="create_time" />
                      <Column title="事件名称" dataIndex="title" key="title" />
                      <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                          <Space size="middle">
                            <a>修改</a>
                            <Popconfirm placement="top" title='您确定要删除吗？' onConfirm={this.delHandle.bind(this,record)} okText="Yes" cancelText="No">
                              <a>删除</a>
                            </Popconfirm>
                            
                          </Space>
                        )}
                      />
                    </Table>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Todo)