import React, { useCallback, useState } from 'react';
import ChildOfCallBack from './ChildOfCallBack';

const UseCallback = () => {
    const [count, setCount] = useState(0);
//khi ham nay dc mount thi no se tao ra mot vung nho nam ngoai 
// neu dependencies nay trong thi no se tra lai chinh tham chieu da duoc tao
    const handleIncrease = useCallback(()=>{
        setCount(preCount=>preCount+1);
    }, [])

    return (
        <div className='border-4 border-separate border-yellow-500 m-3'>

            <h1 className='text-5xl m-5 justify-center flex'>{count}</h1>

            <ChildOfCallBack onIncrease={handleIncrease}/>

        </div>
    );
}

export default UseCallback;
