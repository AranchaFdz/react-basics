// updater function = A function passed as an argument to setState() usually
//                      ex. setYear(year + 1, y => y + 1)
//                      Allow for safe updates based on the previous state 
//                      Used withh multipule state updates ans asynchronous functions
//                      Good practice to use updater functions


import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {

        // Takes the PENDING state to calulate the NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        //setCount(count + 1) (0 + 1)
        //setCount(count + 1) (0 + 1)
        //setCount(count + 1) (0 + 1)
        //setCount(count => count + 1)
        //setCount(prevCount => prevCount + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = () => {
        //setCount(c => c = 0)
        setCount(0)
    }

  return (
    
    <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter