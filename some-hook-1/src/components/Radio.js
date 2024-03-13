import React, { useState } from 'react';

// call api
const courses= [
    {
        id: 1,
        name: 'Html, css'
    },
    {
        id: 2,
        name: 'sql'
    },
    {
        id:3,
        name: 'java spring'
    }
]

const Radio = () => {
    // neu muon truyen gia tri mac dinh vao thi truyen thang vao useState
    const [checked, setChecked] = useState();

    const handleChecked=(course) => {
        setChecked(course.id);
    }
    
    console.log(checked);

    const handleSubmit = () => {
        // call api
        console.log({id: checked});
    }

    return (
        <div>
            <div className='mt-8 text-red-500 ml-8 text-[40px]'>
            {courses.map(course=> (
                <div className='m-3' key={course.id}>
                    <input 
                        type='radio'
                        checked={checked===course.id}
                        onChange={() => handleChecked(course)}
                    />
                    {course.name}
                </div>
            ))}
            </div>

            <button onClick={handleSubmit}>
                Register
            </button>
        </div>
    );
}

export default Radio;
