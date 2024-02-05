import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Example from './components/Example';


function App() {
  return ( 
    <div className="App"> 
      <Heading name="Sang" color="purple"/>
      <Main  />
      <Sidebar heading="Nguyen" promoSubHeading="Sang" />
      <h1 className="example">Example for xpressions as props: </h1>
      <Example/>
    </div> 
  ); 
} 
 
export default App;
