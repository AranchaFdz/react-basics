// useEffect(function, [dependencies])

import React, { useState, useEffect } from 'react'

function MyComponent2() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    /* window.addEventListener('resize', handleResize)
    console.log('EVENT LISTENER ADDED') */

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        console.log('EVENT LISTENER ADDED')

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log('EVENT LISTENER REMOVED')
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

  return (
    <>
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
    </>
  )
}

export default MyComponent2