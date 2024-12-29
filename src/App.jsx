// How to style react components with CSS
// ------------------------------------
// ( not including external frameworks or preprocessors)

// 1. External
// 2. Modules
// 3. Inline


import Button from './Button/Button.jsx'
import ButtonInline from './ButtonInline.jsx'

function App() {

  return(
    <>
      <Button />
      <hr />
      <ButtonInline />
    </>
  )
}

export default App
