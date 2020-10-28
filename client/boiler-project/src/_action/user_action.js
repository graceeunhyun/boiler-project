import axios from 'axios'
import {
    LOGIN_USER

} from './types'
export function loginUser(dataToSubmit) {
    
    // 로그인 하는 과정을 배열로 선언한 뒤 가져온다. 
    const request = [];

    return {
        type:LOGIN_USER,
        payload:request

    }

    

}