import fetch from './fetch'

// 添加事件
export function addTask(data){
    return fetch({
                url : '/thing/addTask',
                method : 'POST',
                data
            })
}

// 获取todolist
export function getTodo(params){
    return fetch({
                url : '/thing/getTodo',
                method : 'GET',
                params
            })
}

// 获取Donelist
export function getDone(params){
    return fetch({
                url : '/thing/getDone',
                method : 'GET',
                params
            })
}

// 获取list
export function getList(params){
    return fetch({
                url : '/thing/getList',
                method : 'GET',
                params
            })
}

// 删除Task
export function delTask(params){
    return fetch({
                url : '/thing/delTask',
                method : 'GET',
                params
            })
}

// 修改title
export function updateTitle(data){
    return fetch({
                url : '/thing/updateTitle',
                method : 'POST',
                data
            })
}

// 改变状态
export function updateState(data){
    return fetch({
                url : '/thing/updateState',
                method : 'POST',
                data
            })
}

export default {
    addTask,
    getTodo,
    getDone,
    getList,
    delTask,
    updateTitle,
    updateState
}