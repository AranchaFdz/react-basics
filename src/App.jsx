// props = properties
// props = read-only properties that are shared between components.
//        A parent component can send data to a child component.
//        <Component key=value />

// propTypes = a mechanism that ensures that the passed value
//           is of the correct datatype
//           age: PropTypes.number

// DefaultProps = default values for props in case they are not
//                passed from the parent component
//                name: "Guest"


import Student from "./Student"
function App() {

  return(
    <>
      < Student name="Lidia" age={20} isStudent={true}/>
      < Student name="Oscar" age={42} isStudent={false}/>
      < Student name="Max" age={50} isStudent={false}/>
      < Student name="María" age={28} isStudent={true}/>
      < Student/>
    </>
  )
}

export default App
