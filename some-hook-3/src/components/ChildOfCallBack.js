import React, { useState, memo } from 'react';



const ChildOfCallBack = ({onIncrease}) => {

    console.log('re-render');

    return (
        <div  className='flex justify-center self-center '>
            <button onClick={onIncrease}>
                Increase
            </button>
        </div>
    );
}

export default memo(ChildOfCallBack);
