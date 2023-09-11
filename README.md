------------ Getting Started with Create React App ----------->
     
------------ Functional --------------------------->                                
                                                 
      function App() {
          return (
          <div>Hello World</div>
       )
      }
      export default App;

------------ Class base component ------------------->

    class App extends Component {
       render() {
          return (
             <div>
                <h1>Hello World</h1>
             </div>
          );
       }
    }
    export default App;

--------- State, props with functional component --------------->

    import { useState } from "react";
    Don't forget that we can even destructure the props

    {{name, description }}

    function App(props) { // props

       const [name, setName] = useState(""); // State

        return (
          <div> 
             <h1>Hello my name is {name}</h1>        // State
             <h1>Hello my name is {props.name}</h1>  // props
          </div>
        )
    }
    export default App;

--------- State, props with class component --------------->
   
    (The class base component function like Object with this)

    import React, { Component } from "react";

    export default class App extends Component {
      constructor(props) {    // props
       super(porps);

       this.state = {  // State
         name: "Zak",
         age:  100,
       };
    }
    render() {
      const { name } = this.state; // We can also deconstruct
      return (
       <h1>My name is {this.state.name}</h1>     // state
       <h1>My name is {this.props.name}</h1>     // props
      );
     }
    }

------------ Complete example of using state ----------------------->

    import React,  {useState } from "react";
    
    function App() {
    const [count, setCount ] = useState(0)
    
    const increment = ()  => {
    setCount(count + 1);
    }
    const decrement = ()  =>{
    if (count <= 0){
    console.log("You can go in that way");
    }else{
    setCount(count - 1);
    }
    }
    return (
      <div>
        <h1>Welcome to the counter app</h1>
          <p>The Count is: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      );
    }
    
    export default App;
