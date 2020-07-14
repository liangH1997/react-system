import {
    // TODO_ADD,
    // TODO_DEL,
    // TODO_UPDATE,
    GOOD_ADD,
}from '../actionsTypes'

import {
    register,
    toLogin,
    getList,
    getGoodDesc,
    addCartList,
    getCartList,
    upDateCart,
    deleteCart,
    submitCart,
    getAllCates,
    getCateGoods,
    getBanner,
    getInfo,
    addGood
} from '@/utils/goodApi'
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


//添加商品
export function addGood(payload){
    return function(dispatch){
        addGood(payload).then(res=>{
            dispatch({
                type : GOOD_ADD,
                payload : res
            })
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