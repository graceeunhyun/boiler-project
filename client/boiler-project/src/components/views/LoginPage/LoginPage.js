import Axios from 'axios'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginUser } from '../../../_action/user_action';


function LoginPage(props) {
    const dispatch = useDispatch();
    
    // props 와 state 을 이용해서 바꿔줌. 
    //type 이라는 event 가 들어갈 때 내용을 바꿔줌
    const [Email, setEmail] = useState("")
    const [Password, setPassWord] = useState("")

    const onEmailHandler = (event)=> {
        setEmail(event.currentTarget.value)

    }
    const onPasswordHandler = (event)=> {
        setPassWord(event.currentTarget.value)

    }

    const onSubmitHandler = (event)=> {
        // 버튼을 눌렀을 때 무조건 page 가 refresh 가 되는데 이를 방지하기 위해서 
        // event preventDefault 동작을 수행해줌. 
        event.preventDefault();

        console.log('Email',Email);
        console.log('Password',Password);
        let body = {
            email: Email,
            password : Password
        }

        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess) {
                // 페이지를 이동 시켜주고 싶을 때의 동작 
                props.history.push('/')
            }
            else {

            }
        })

    }

    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems : 'center', width : '100%', height: '100vh'}}>
           
            <form style={{display:'flex', flexDirection:'column'}}
            onSubmit={onSubmitHandler}>
            LoginPage
            <label>Email</label>
            <input type="email" value={Email} onChange={onEmailHandler} />
            <label>Password</label>
            <input type="password"value={Password} onChange={onPasswordHandler} />
            <br />
            <button type="submit">
                Login
            </button>
            </form>
        </div>
        
    )
}

export default LoginPage