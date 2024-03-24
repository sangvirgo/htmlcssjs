import React, { useMemo, useRef, useState } from 'react';


const UseMemo = () => {
    const nameRef=useRef();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const handleSubmit=()=>{
        setProducts([...products,{
            name,
            price: parseInt(price)
        }])
        setName('');
        setPrice('');

        nameRef.current.focus();
    }

    // no chi thuc hien tinh toan lai khi product bij thay doi

    const total= useMemo(()=>{
        console.log("re-calculation");
        const result = products.reduce((result, current)=>{
            return result+current.price
        },0);

        return result;
    }, [products])

    return (
        <div className='border-4 border-red-500 border-separate m-3'>
            <input
                ref={nameRef}
                value={name}
                placeholder='Enter name...'
                onChange={e=>setName(e.target.value)}
                className='border-2 border-black w-[100%] h-[20px]  py-4'
            />
            <br/>
            <input
                value={price}
                placeholder='Enter price...'
                onChange={e=>setPrice(e.target.value)}
                className='border-2 border-black w-[100%] h-[20px] mt-3 py-4'
                onKeyUp={(e)=>{
                    if(e.key==="Enter") handleSubmit();
                }}
            />
            <br/>
            <button onClick={handleSubmit}>
                Add
            </button>

            <h2 className='mb-5'>Total: {total}</h2>

            <ol className='list-disc ml-7'>
                {products.map((product, index) => (
                    <li key={index}>{product.name} -  {product.price}</li>
                ))}
            </ol>
        </div>
    );
}

export default UseMemo;


// Trong React, HOC (Higher-Order Component) là một kỹ thuật cho phép bạn tái sử dụng logic trong các component của bạn. HOC không phải là một tính năng của React, mà là một pattern của JavaScript.
