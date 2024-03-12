import axios from 'axios';
import {useState} from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    axios.get('https://api.quotable.io/random').then(response=> {
    setQuote(response.data.content);
    console.log(response.data.content);
    }).catch(err=> {
      alert('error');
    })


  };

  return (
     <div >
        <button className="text-red-500 flex justify-center items-center h-full w-full border border-yellow-400" onClick={getQuote}>
          Get Quote
        </button>

        <h1 className='text-xl text to-blue-400 flex justify-center mt-7'>
          {quote || <p>{quote}</p>}
        </h1>
     </div> 
  );
}

export default App;
