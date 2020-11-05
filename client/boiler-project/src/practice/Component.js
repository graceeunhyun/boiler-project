import React from 'react'

function Component() {
    const object = {a:1, b:2, c:3};
    const nextObject = { ...object, b:2};
    const array = [
        {id:1, value:true},
        {id:2, value:true},
        {id:3, value:false}
    ];
    let nextArray = array.concat({id:4});
    nextArray.filter(item=>item.id!=2) // 2인 항목 제거
    nextArray.map(item=>(item.id===1?{...item, value:false}:item)); // 오호 이 ... 은 전개 연산자와 같은 거 같음! 


    return (
        <div>
            
        </div>
    )
}

export default Component
