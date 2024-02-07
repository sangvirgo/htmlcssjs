import React, { useState } from 'react';

function ModeToggle() {
    const [isBlack, setIsBlack]= useState(false);

    const toggleDarkMode=() => {
        setIsBlack(!isBlack);
    };

    return (
        <div>
            <div className={`container ${isBlack ? "black" : "white"}`}>I Love You</div>
            <button className="btn-clickme" onClick={toggleDarkMode}>
                Toggle Dark Mode
            </button>
        </div>
    );
}

export default ModeToggle;