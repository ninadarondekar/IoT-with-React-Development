import React from 'react'
import { useState } from 'react'

const Eventspage = () => {
    // const [state, setState] = useState(state)
    const [number, setNumber] = useState(0)

    // arrow function 
    const increment = () => {
        setNumber(number + 1)

    }

    const decrement = () => {
        setNumber(number - 1)

    }
    
    return (
    <>
       <button onClick={increment}>Increment</button> 
       <h1>Number: {number}</h1>
       <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Eventspage