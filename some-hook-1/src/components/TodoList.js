import React, { useState } from 'react';

const TodoList = () => {
    // chuyen doi sang chuoi

    // tra ve gia tri cuoi cuoi neu mot trong hai la rong
    const storageJobs =JSON.parse(localStorage.getItem('jobs')) || [];

    console.log(storageJobs);

    const [jobs, setJobs] = useState(storageJobs);
    const [inputValue, setInputValue] = useState('');

    const handleInputValue =(event) => {
        setInputValue(event.target.value);
    }

    const handleAdd = () => {
        // return to the string without space
        if(inputValue.trim() !== '' && !jobs.includes(inputValue.trim())) {

            const updatedJobs = [...jobs, inputValue];
            setJobs(updatedJobs);
            setInputValue('');

            localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        } else {
            setInputValue('')
        }
    }

    const hanleKeyEnter= (event) =>{
        if(event.key==='Enter') {
            handleAdd();
        }
    }

    const handleDelete = () => {
        localStorage.removeItem('jobs');
        setJobs([]);
    }

    return (
        <div>
            <h1>TO DO LIST</h1>
            <input 
                className='border border-red-500' 
                value={inputValue}
                onChange={handleInputValue}
                onKeyDown={hanleKeyEnter}
            />
            <button onClick={handleAdd}>
                Add 
            </button>

            <button onClick={handleDelete}>
                Delete
            </button>

            <ol>
                {jobs.map((job, index)=>(
                    <li key={index}>{job}</li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;


/*
Mounted: Khi một component được "mounted", nghĩa là nó đã được thêm vào cây DOM và hiển thị trên giao diện người dùng. Trong quá trình này, React gọi hàm componentDidMount() của component, nơi bạn có thể thực hiện các tác vụ như gọi API, cập nhật state, hoặc tương tác với các thư viện bên ngoài.

Unmounted: Khi một component được "unmounted", nghĩa là nó đã bị loại bỏ khỏi cây DOM và không còn hiển thị trên giao diện người dùng nữa. Trong quá trình này, React gọi hàm componentWillUnmount() của component, nơi bạn có thể thực hiện các tác vụ dọn dẹp như hủy đăng ký các sự kiện, hủy các timer, hoặc giải phóng bất kỳ tài nguyên nào không còn cần thiết nữa.
*/
