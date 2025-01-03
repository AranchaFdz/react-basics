import React, { useState } from 'react'

function MyComponent() {

    //let [name, setName] = useState(
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0) 
    const [isEmployed, setEmployed] = useState(false)

    const updateName = () => {
        /* name = 'Ileen'
        console.log(name) */
        setName('Ileen')
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmplyedStatus = () => {
        setEmployed(!isEmployed)
    }

  return (

    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
        <button onClick={toggleEmplyedStatus}>Toggle status</button>
    </div>

  )
}

export default MyComponent