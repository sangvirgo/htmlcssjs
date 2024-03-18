import React, { useState } from 'react';
import ChildOfMemo from './ChildOfMemo';
// 1. memo -> Higher Order Components (HOC)
// 2. UseCallBack()

// Hooks
// HOC
// Render props


// khi thang parent render thi thang childrens cung bi render lai 

// neu khong co props nao bi change thi se khong re-render lai web

// 

const Memo = () => {
    const [count, setCount] = useState(0);

    const handleIncrease =()=>{
        setCount(preCount=>preCount+1);
    };

    return (
        <div className='border-4 border-separate border-yellow-500 '>
            <ChildOfMemo />

            <h1 className='text-5xl m-5 justify-center flex'>{count}</h1>

        <div  className='flex justify-center self-center '>
            <button onClick={handleIncrease}>
                Increase
            </button>
        </div>

        </div>
    );
}

export default Memo;
