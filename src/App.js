import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Messi', "Suarez", "Coutinho", "Neto", "Jordi Alba", "Ivan Rakitic", "Jan Oblak"];
  const products = [
    {name: "Photoshop", price: "$999"},
    {name: "Illastrator", price: "$666"},
    {name: "PDF reader", price: "$6"}
  ];
  // const productNames = products.map(product => product.name);

  // const playerNames = names.map(name => name);
  const person = {
    name : "Hello",
    job : "Greeting"
  };

  const style = {
    color: "red",
    backgroundColor: "yellow"
  }            
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className = "" style = {style}>My heading : {person.name} {person.job}</h1>
        <p style={{backgroundColor: "cyan", color: "tomato"}}>My first React paragraph</p>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }       
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Person name="HELLO World"></Person> */}
        <Person name={names[0]}></Person>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}






function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count} </h1>  
      <button onMouseMove={() => setCount( count + 1)}>Increase</button>
      <button onClick={() => setCount( count - 1)}>Decrease</button>
    </div>
  )
}



function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic users</h3>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}













function Person(props){
  const personStyle = {
    border: "2px solid red",
    margin: "10px"
  }
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hello again</h3>
  </div>
  )
}


function Product(props){
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px", 
    float: "left"
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}

export default App;
