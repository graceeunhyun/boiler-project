import {combineReducers} from 'redux';
import user from './user_reducer'


const rootReducer = combineReducers({
    //user  (blaghblah.. 이런식으로 합치고 싶은 reducer 다 합치기  )
    user
})

export default rootReducer;