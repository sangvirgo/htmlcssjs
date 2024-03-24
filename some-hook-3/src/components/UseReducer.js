import React, { useReducer } from 'react';

// init state
const initState=0;

// actions 
const UP_ACTION='up';
const DOWN_ACTION='down';

// Reducer
const reducer=(state, action) => {
    switch(action) {
        case UP_ACTION: 
            return state+1
        case DOWN_ACTION:
            return state-1
        default:
            throw new Error("Invalid action")
    }
}

// dispacth


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div className='border border-black m-3 border-4'>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(UP_ACTION)}>
                UP
            </button>

            <button onClick={()=>dispatch(DOWN_ACTION)}>
                DOWN
            </button>
        </div>
    );
}

export default UseReducer;


// useState dung phu hop hon so voi nhung components have simple state
// useReducer dung trong nhung state phuc tap

// cac buoc xac dinh
// 1. Init state = 0
// 2. Action: up(+1) down(-1)
// 3. Reducer
// 4. Dispatch
