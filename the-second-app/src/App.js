import logo from './logo.svg';
import './App.css';
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
import React from "react";

function Main(props) { 
  return <Header msg={props.msg} />; 
};

function Header(props) { 
  return ( 
    <div style={{ border: "10px solid whitesmoke" }}> 
      <h1>Header here</h1> 
      <Wrapper msg={props.msg} /> 
    </div> 
  ); 
};

function Wrapper(props) { 
  return ( 
    <div style={{ border: "10px solid lightgray" }}> 
      <h2>Wrapper here</h2> 
      <Button msg={props.msg} /> 
    </div> 
  ); 
};

function Button(props) { 
  return ( 
    <div style={{ border: "20px solid orange" }}> 
      <h3>This is the Button component</h3> 
      <button onClick={() => alert(props.msg)}>Click me!</button> 
    </div> 
  ); 
};

function App() { 
  const [fruits] = React.useState([
    {fruitName: 'Apple', id: 1},
    {fruitName: 'Plum', id: 2},
    {fruitName: 'Pineapple', id: 3},
  ])


  return ( 
    <div className="App">

      {/* tryen qua nhieu the he   */}
    <Header  
      msg="I passed through the Header and the Wrapper and I reached the Button component"  
    /> 

    {/* apt */}

    <h1>You should buy some of the fruits below </h1>
    <Fruits fruits={fruits}/>
    <FruitsCounter fruits={fruits}/>
    </div>
  ); 
}; 

export default App;