import React from 'react';

const Items = ({isPacked, name}) => {
    return (
    <div className={isPacked? 'text-red-500 ' : ''}>
        {isPacked ? 
        (<del>
            name + '✔' 
        </del>)
        : name}
    </div>
    );
}

export default Items;

/*
In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
The shortcuts are common, but you don’t have to use them if you prefer plain if.
*/
