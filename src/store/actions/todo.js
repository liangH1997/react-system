import {
    // TODO_ADD,
    // TODO_DEL,
    // TODO_UPDATE,
    TODO_CLEAR,
    TODO_GETLIST
}from '../actionsTypes'

import {
    addTask,
    delTask,
    updateState,
    getList,
    // updateTitle
} from '@/utils/todoApi'
// import { delTask } from '../../utils/todoApi'

import moment from 'moment'

function getAllList(res,dispatch){
    res.todoList.map((ele)=>{
        ele.create_time = moment(parseInt(ele.create_time)).format("YYYY-MM-DD hh:mm")
        return false
    })
    res.doneList.map((ele)=>{
        ele.create_time = moment(parseInt(ele.create_time)).format("YYYY-MM-DD hh:mm")
        return false
    })
    dispatch({
        type : TODO_GETLIST,
        payload : res
    })
}


//初始化todolist
export function initTodo(payload){
    return function(dispatch){
        getList(payload).then(res=>{
            getAllList(res,dispatch)
        })
    }
}

//添加todo
export function addTodo(payload){
    return function(dispatch){
        addTask(payload).then(()=>{
            getList({}).then(res=>{
                getAllList(res,dispatch)
            })
        })
    } 
}
// 删除
export function delTodo(payload){
    return function(dispatch){
        delTask(payload).then(()=>{
            getList({}).then(res=>{
                getAllList(res,dispatch)
            })
        })
    }
}
// 切换状态
export function updateTodo(payload){
    return function(dispatch){
        updateState(payload).then(()=>{
            getList({}).then(res=>{
                getAllList(res,dispatch)
            })
        })
    }
}

export function clearTodo(payload){
    return {
        type : TODO_CLEAR,
        payload
    }
}