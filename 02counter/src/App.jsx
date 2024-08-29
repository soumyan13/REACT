import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  // let counterVal = 10;

  const addValue = () => {
    // console.log("Random value added", Math.random());
    // counter = counter + 1;
    // if (counter > 20) {
    //   counter = 20;
    // }
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    console.log("clicked");

  }

  const removeValue = () => {
    counter = counter - 1;
    if (counter < 0) {
      counter = 0;
    }

    setCounter(counter);
  }

  return (
    <>
      <h1>counter</h1>
      <h3>counter value:{counter}</h3>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
