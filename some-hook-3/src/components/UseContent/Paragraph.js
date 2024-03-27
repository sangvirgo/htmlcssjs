import React, { useContext } from 'react';
import { ThemeContext } from './Content';

const Paragraph = () => {
    const theme=useContext(ThemeContext)

    console.log(theme);

    return (
        <div>
            <p className={theme==='dask'?'text-black bg-white': 'text-white bg-black'}>
            The sun dipped low on the horizon, casting a warm orange glow across the tranquil countryside. As evening approached, the air became still, punctuated only by the occasional chirping of crickets. In the distance, a lone farmhouse stood nestled among rolling hills,
            </p>
        </div>
    );
}

export default Paragraph;
