import React, { createContext, useState } from 'react';
export const themeContext = createContext()

const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState('dark');
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
