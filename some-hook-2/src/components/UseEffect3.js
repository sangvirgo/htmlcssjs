import React, { useEffect, useState } from 'react';

const UseEffect3 = () => {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=> {
        const handleResize=()=> {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);


        // clearnup function
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [width])


    const handleToggle=() => {
        setToggle(!toggle);
    }


    return (
        <div>
            <button onClick={handleToggle}>
                Show Width
            </button>

            {toggle && (width)}
        </div>
    );
}

export default UseEffect3;
