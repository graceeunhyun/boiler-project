import React, {useEffect} from 'react'
import axios from 'axios'
function LandingPage() {

    // GET request for remote image
    // 이런식으로 받아올 수 있다. 
// axios({
//     method: 'get',
//     url: 'http://192.168.155.77:14000/HR/Employee/ReadDetailLeave?action=SO',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//         console.log(response)
//         console.log('성공')
//         console.log(response.data.dto)

//     });
    
    return (
        <div>
            LandingPage 
            
        </div>
    )
}

export default LandingPage
