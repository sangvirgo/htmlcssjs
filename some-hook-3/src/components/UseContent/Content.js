import React from 'react';
import Paragraph from './Paragraph';
import ThemeContext from './ThemeContext';

const Content = () => {

    return (
        <ThemeContext>
        <div>
            <button >
                Change 
            </button>

            <Paragraph/>
        </div>
        </ThemeContext>
    );
}

export default Content;
