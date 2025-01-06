// useState() = Re-renders the component when the state valeue changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//             When you want a component to "remember" some information,
//             but you don´t want that information to trigger new renderes.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitons
//            3. Managing Timers and Intervals



import React, { useState, useEffect, useRef } from 'react'

function MyComponent() {

    /* 
    Using useEffect
    let [number, setNumber] = useState(0)

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    }) */

    const inputRef = useRef(null)

    //console.log(ref)

    useEffect(() => {
        console.log("COMPONENT RENDERED")
        //console.log(inputRef)
    }) 

    function handleClick() {
        // used only with useEffect() 
        // setNumber(n => n + 1)

        //ref.current = ref.current + 1
        //or  
        //ref.current++

        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "yellow"
    }

  return (
    <div>
        <button onClick={handleClick}>
            Click me!
        </button>
        <input ref={inputRef} />
    </div>
  )
}

export default MyComponent