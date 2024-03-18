import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const [count, setCount] = useState(60);

    const timeId=useRef();
    const preCount=useRef();
    // thoery about useRef
    // it is alway returns a property named current with the value we set
    // console.log(useRef(99));

    useEffect(()=>{
        preCount.current=count;
    }, [count])

    const handleStart=()=> {
        timeId.current =setInterval(() => {
            setCount(preCount=>preCount-1)
        }, 1000);

        console.log('Start =>', timeId.current );
    }

    const handleStop=()=> {
        clearInterval(timeId.current);
        console.log('Stop =>', timeId.current );
    }

    // (current time, previous time)
    console.log(count, preCount.current);

    return (
        <div className='border border-dotted border-red-700'>
            <h1 className='flex self-center justify-center text-3xl m-3 text-red-400'>{count}</h1>

            <div className='flex justify-center'>
                <button onClick={handleStart}>
                    Start
                </button>

                <button onClick={handleStop}>
                    Stop
                </button>
            </div>
        </div>
    );
}

export default UseRef;
