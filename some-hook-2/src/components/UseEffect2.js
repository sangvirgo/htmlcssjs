import React, { useEffect, useState } from 'react';

const UseEffect2 = () => {
    const [toggle, setToggle] = useState(false);
    const [posts, setPosts] = useState([]);


    const handleCallApi=() => {
        setToggle(!toggle);
    }

    useEffect(()=>{
        if(toggle) {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(posts=>{
                setPosts(posts);
            });
        }
    }, [toggle]);



    return (
        <div>
            <button onClick={handleCallApi}>
                Toggle
            </button>

        {toggle && (
            <ol>
                {posts.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>
        )}

        </div>
    );
}

export default UseEffect2;


/*
useEffect hook:

useEffect là một hook trong React được sử dụng để thực thi các hành động phụ (side effects) trong functional components. Các hành động phụ có thể bao gồm gọi API, tương tác với DOM, hoặc thực hiện các thao tác không đồng bộ khác.
Tham số đầu vào của useEffect:

Tham số đầu tiên của useEffect là một hàm effect. Hàm này sẽ được thực thi sau mỗi lần render.
Trong đoạn mã của bạn, hàm effect là một hàm với logic gọi API để lấy danh sách bài viết từ URL cung cấp. Hàm này chỉ được gọi khi toggle thay đổi.
Tham số thứ hai của useEffect:

Tham số thứ hai của useEffect là một mảng dependency. useEffect sẽ chỉ được gọi lại nếu một hoặc nhiều phần tử trong mảng này thay đổi so với lần render trước đó.
Trong trường hợp này, mảng dependency chỉ có một phần tử là toggle. Điều này có nghĩa là hàm effect sẽ chỉ được gọi lại khi giá trị của toggle thay đổi.
Thực thi hành động phụ:

Khi toggle thay đổi và trở thành true, useEffect sẽ gọi API để lấy danh sách bài viết từ URL. Khi dữ liệu được trả về từ API, nó sẽ được cập nhật vào state posts bằng cách sử dụng hàm setPosts.
*/