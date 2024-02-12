import './App.css';
import Heading from './components/Heading';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Example from './components/Example';
import mylove from './mylove.jpg';
import Btn from './components/Btn';
import ModeToggle from './components/ModeToggle';
import Promo from './components/Promo';
import Child from './components/Child';

function Picture(props) {
  return <img className="mylove" src={mylove} alt="My Love" />;
}


function App() {
  return ( 
    <div className="App"> 
      <Heading name="Sang" color="purple"/>
      <Main  />
      <Sidebar heading="Nguyen" promoSubHeading="Sang" />
      <h1 className="example">Example for xpressions as props: </h1>
      <Example/>
      <Picture/>
      
      <Btn/>

      <ModeToggle />

      {/* child and parents */}
      <Promo />

      {/* flow  */}
      <Child message={new Date().getMilliseconds()}/>
    </div> 
  ); 
} 
 
export default App;
