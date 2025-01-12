import React, { useState } from 'react' //( object distructuring to extract individual variables or functions, we dont need the whole react library)  )

function MyComponent() {

    //let [name, setName] = useState() returns an array of two elements a variable and a setter function
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0) 
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        /* name = 'Ileen'
        console.log(name) */
        setName('Ileen')
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmplyedStatus = () => {
        setIsEmployed(!isEmployed) // to reverse the value we can use the ! operator
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