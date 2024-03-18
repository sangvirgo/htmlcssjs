import React, { memo } from 'react';

const ChildOfMemo = () => {
    console.log('re-render');

    return (
        <div>
            <h1>
                Hello cac tenh iu cua taoooooo kakakkaaaakkaa 
            </h1>
        </div>
    );
}

export default memo(ChildOfMemo);
