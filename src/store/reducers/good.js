import {
    GOOD_ADD,
    GOOD_DEL,
    GOOD_GETCATES
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
        case GOOD_ADD:
            console.log('添加成功')
            return state
        case GOOD_DEL:

            return state
        case GOOD_GETCATES:

                return state
        default:
            return state
    }
}