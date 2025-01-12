import List from "./List"


function App() {

  const fruits =  [{id: 1, name:"apple", calories: 95}, 
                  {id: 2, name:"orange", calories: 45}, 
                  {id: 3, name:"banana", calories: 105},
                  {id: 4, name:"coconut", calories: 159},
                  {id: 5, name:"pineapple", calories: 37}]

  const vegetables =  [{id: 6, name:"patatos", calories: 110}, 
                      {id: 7, name:"celery", calories: 15}, 
                      {id: 8, name:"carrots", calories: 25},
                      {id: 9, name:"corn", calories: 63},
                      {id: 10, name:"broccoli", calories: 50}]

  return(
    <>
    {/* 
    <List items={fruits} category="Fruits"/>
    <List items={vegetables} category="Vegetables"/>
    
    If one of these lists dond't have items, don't render it
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null} 
    
    insted of using the terneary operator, you can use the && and logical operator dont need null
    we will aoways have the condition so
    if the condition is true, render the component
    if the condition is false, don't render the component


    Know eliminate category and see what happens
    Then eliminate the items and you will see that nothing renders upps
    Add default props
    */}

    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  )
}

export default App
