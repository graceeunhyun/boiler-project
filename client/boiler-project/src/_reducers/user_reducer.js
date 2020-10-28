import {
    LOGIN_USER
} from '../_action/types'

export default function (state = {}, action) {
    // 왜 action.type 을 이렇게 써야하는지? 
    // 아 action.type 에 LOGIN_USER 등등이 들어가기 때문에 
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess:action.payload}
            break;
    
        default:
            // 여기서 무조건 return state 을 해주어야지 오류가 나지 않는다. 
            return state;
    }

}