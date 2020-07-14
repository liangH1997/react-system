import {
    TODO_ADD,
    TODO_DEL,
    TODO_UPDATE,
    TODO_CLEAR,
    TODO_GETLIST
}from '../actionsTypes'

// import {addTask,getTodo,getDone,delTask,updateState,updateTitle} from '@/utils/todoApi'


let initState = {
    list : {
        todoList : [],
        doneList : []
    }
}

export default function todoList(state=initState,action){
    let newState = JSON.parse(JSON.stringify(state))
    // console.log(action.payload)
    switch (action.type) {
        case TODO_ADD:
            console.log('添加成功')
            return state
        case TODO_DEL:

            return state
        case TODO_UPDATE:

            return state
        case TODO_CLEAR:

            return state
        case TODO_GETLIST:
            newState.list = action.payload
            return newState
        default:
            return state
    }
}