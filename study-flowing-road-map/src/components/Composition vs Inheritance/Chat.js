import React from 'react';

const Chat = (props) => {
    return (
        <div>
            <h1 className='text-red-500 text-center'>{props.title}</h1>

            <p className='font-bold text-center'>{props.message}</p>
        </div>
    );
}

export default Chat;
