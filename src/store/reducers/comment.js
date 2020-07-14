import { COMMENT_LIST } from "../actionsTypes"

let initState = {
    comments : []
}

export default function reducer(state=initState,action){
    switch (action.type) {
        case COMMENT_LIST:
            console.log('收到了',action)
            let newState = JSON.parse(JSON.stringify(state))
            newState.comments.push(action.payload)
            // console.log(newState)
            return newState
        default:
            return state
    }
}