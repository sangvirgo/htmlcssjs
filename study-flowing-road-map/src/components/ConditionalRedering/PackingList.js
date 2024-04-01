import React from 'react';
import Items from './Items';

const PakingList = () => {
    return (
        <div>
            <section>
                <h1>Sang Ride's Packing List</h1>
                <ol className='list-decimal'>
                    <li><Items isPacked={true} name="do an" /></li>
                    <li><Items isPacked={false} name="do uong" /></li>
                    <li><Items isPacked={false} name="do choi" /></li>
                </ol>
            </section>
        </div>
    );
}

export default PakingList;
