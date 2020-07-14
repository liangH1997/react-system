import {COMMENT_LIST} from '../actionsTypes'

export function addCom(payload){
    //返回一个action
    return {
        type: COMMENT_LIST,
        payload
    }
}