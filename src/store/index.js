import { createStore , combineReducers , applyMiddleware } from 'redux'

import thunk from 'redux-thunk'



import comment from './reducers/comment'
import todo from './reducers/todo'


const reducer = combineReducers({
    comment,
    todo

})
// console.log(reducer)
const store = createStore(reducer,applyMiddleware(thunk))

export default store