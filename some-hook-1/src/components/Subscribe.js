import React, { useState } from 'react';

const Subscribe = () => {

        const [count, setCount] = useState(0);
    
        const handleScroll = () => {
            console.log('Scrolled');
        };
    
        const subscribeScrollEvent = () => {
            window.addEventListener('scroll', handleScroll);
        };
    
        const unsubscribeScrollEvent = () => {
            window.removeEventListener('scroll', handleScroll);
        };
    
        const increaseCount = () => {
            setCount(prevCount => prevCount + 1);
        };
    
        const handleSubscribe = () => {
            subscribeScrollEvent();
        };
    
        const handleUnsubscribe = () => {
            unsubscribeScrollEvent();
        };
    
        return (
            <div>
                <p>Scroll down to see effects!</p>
                <p>Count: {count}</p>
                <button onClick={increaseCount}>Increase Count</button>
                <button onClick={handleSubscribe}>Subscribe Scroll</button>
                <button onClick={handleUnsubscribe}>Unsubscribe Scroll</button>
            </div>
        );
}

export default Subscribe;
