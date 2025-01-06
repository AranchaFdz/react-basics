/* 
WITH PROPS....

import React, { useState } from 'react'
import ComponentB from "./ComponentB"

function ComponentA() {

  const [user, setUser] = useState('Factoria F5');

  return (
    <div className='box'>
        <h1>
            ComponentA
        </h1>
        <h2>{`Hello ${user}`}</h2>
        <ComponentB user={user}/>

    </div>
  )
}

export default ComponentA */

// WITH CONTEXT

import React, { useState, createContext } from 'react'
import ComponentB from "./ComponentB"

export const UserContext = createContext()

function ComponentA() {

  const [user, setUser] = useState('Factoria F5');

  return (
    <div className='box'>
        <h1>
            ComponentA
        </h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>

    </div>
  )
}

export default ComponentA