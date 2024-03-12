import React, { useState } from 'react';

const OneWayBinding = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChange=(event) => {
        setName(event.target.value);
    }

    const handleSetName = () => {
        setName("Nguyen Luu Tan Sang");
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn việc tải lại trang sau khi gửi biểu mẫu
        console.log({
            name, 
            email
        });
    }

    return (
        <div>
            <div className=''>
            <input className='border border-black'
                type='text'
                value={name}
                onChange={handleChange}
            />
            <button onClick={handleSetName}  >
                Change 
            </button>
            {name&& <h1>Gia tri cua name: {name} </h1> }
            </div>

            {/* email */}

            <input className='border border-black '
                type='text'
                value={email}
                onChange={handleEmailChange}
            />
            <button onClick={handleSubmit} >
                Submit 
            </button>

            {email&& <h1>Gia tri cua name: {email} </h1> }
        </div>
    );
}

export default OneWayBinding;
