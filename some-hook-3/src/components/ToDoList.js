import React, { useReducer, useRef } from 'react';
// init state
const initState={
    job: '',
    jobs: []
}

// action
const SET_JOB='set_job';
const ADD_JOB="add_job";
const DELETE_JOB='delete_job'; 

const setJob=(payload)=> {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob=(payload)=> {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob=(payload)=> {
    return {
        type: DELETE_JOB,
        payload
    }
}


// reducer
const reducer =(state, action) => {
    switch(action.type) {
        case SET_JOB: 
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB: 
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs=[...state.jobs];
            newJobs.splice(action.payload, 1);

            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error("Invalid action.")
    }
}

const ToDoList = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    const {job, jobs} = state;

    const inputRef=useRef();

    const handleAddJob=()=>{
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }

    const handleEnter =e=>{
        if(e.key==='Enter') handleAddJob();
    }

    return (
        <div className='border border-yellow-500 border-3 border-separate m-3 p-2'>
            <h2 className='my-4 text-3xl'>TO DO LIST</h2>
            <input
                ref={inputRef}
                className='border border-2 border-black'
                value={job}
                placeholder='Enter todo...'
                onChange={e=>{
                    dispatch(setJob(e.target.value))
                }}
                onKeyUp={handleEnter}
            />

            <button onClick={handleAddJob}>
                ADD
            </button>

            <ol className='text-2xl'>
                {jobs.map((job, index)=>(
                    <li key={index}>{job} 
                        <span 
                            onClick={()=>dispatch(deleteJob(index))}
                            className='text-red-500 text-2xl ml-5 cursor-pointer'
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ol>

        </div>
    );
}

export default ToDoList;
