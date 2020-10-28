import React, {useEffect} from 'react'
import axios from 'axios'
function LandingPage() {

    // GET request for remote image
    // 이런식으로 받아올 수 있다. 
axios({
    method: 'get',
    url: 'http://192.168.155.77:14000/HR/Employee/ReadDetailLeave?action=SO',
    responseType: 'stream'
  })
    .then(function (response) {
        console.log(response)
        console.log('성공')
        console.log(response.data.dto)

    });
    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems : 'center', width : '100%', height: '100vh'}}>
        <h2> 시작 페이지</h2>
            
        </div>
    )
}

export default LandingPage
