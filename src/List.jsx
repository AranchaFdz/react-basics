import PropTypes from "prop-types"

function List(props) {

/*     
      Ejemplo 1:
      const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]

      return (fruits) this gets eliminated so that you can visualize it as an ordered list

      const listItems = fruits.map(fruit => <li>{fruit}</li>)

      return (<ol>{listItems}</ol>)


      Ejemplo 2:
      const fruits = [{id: 1, name:"apple", calories: 95}, 
                    {id: 2, name:"orange", calories: 45}, 
                    {id: 3, name:"banana", calories: 105},
                    {id: 4, name:"coconut", calories: 159},
                    {id: 5, name:"pineapple", calories: 37}] 

      const listItems = fruits.map(fruit => <li>{fruit.name}</li>)  Warning each child in a list should have a unique "key" prop in consloe

      ADD id

      const listItems = Fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp; 
                                            <b>{fruit.calories}</b></li>) <b>make the text bold</b>

      return (<ol>{listItems}</ol>)

      Ejemplo 3:
      const fruits = [{id: 1, name:"apple", calories: 95}, 
                    {id: 2, name:"orange", calories: 45}, 
                    {id: 3, name:"banana", calories: 105},
                    {id: 4, name:"coconut", calories: 159},
                    {id: 5, name:"pineapple", calories: 37}]

                    //fruits.sort((a, b) => a.name.localeCompare(b.name)) // ALPHABETICAL ( a for the first item and b for the second item)
                    //fruits.sort((a, b) => b.name.localeCompare(a.name)) // REVERSE
                    //fruits.sort((a, b) => a.calories - b.calories) // CALORIES NUMERIC ORDER
                    //fruits.sort((a, b) => b.calories - a.calories) // CALORIES REVERSE NUMERIC ORDER

                    const listItems = Fruits.map(fruit => <li key={fruit.id}>
                                                                {fruit.name}: &nbsp; 
                                                                <b>{fruit.calories}</b></li>) 

    How to filter objects by a certain criteria

    const fruits = [{id: 1, name:"apple", calories: 95}, 
                    {id: 2, name:"orange", calories: 45}, 
                    {id: 3, name:"banana", calories: 105},
                    {id: 4, name:"coconut", calories: 159},
                    {id: 5, name:"pineapple", calories: 37}]

                    //fruits.sort((a, b) => a.name.localeCompare(b.name)) // ALPHABETICAL ( a for the first item and b for the second item)
                    //fruits.sort((a, b) => b.name.localeCompare(a.name)) // REVERSE
                    //fruits.sort((a, b) => a.calories - b.calories) // CALORIES NUMERIC ORDER
                    //fruits.sort((a, b) => b.calories - a.calories) // CALORIES REVERSE NUMERIC ORDER
    
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

    const listItems = lowCalFruits.map(lowCalFruit =>   <li key={lowCalFruit.id}>
                                                        {lowCalFruit.name}: &nbsp; 
                                                        <b>{lowCalFruit.calories}</b></li>) 

    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

    const listItems = highCalFruits.map(highCalFruit =>     <li key={highCalFruit.id}>
                                                            {highCalFruit.name}: &nbsp; 
                                                            <b>{highCalFruit.calories}</b></li>) 
                                                            
    const listItems = fruits.map(fruit =>   <li key={fruit.id}>
                                            {fruit.name}: &nbsp; 
                                            <b>{fruit.calories}</b></li>) */
    
    const category = props.category
    const itemList = props.items

    const listItems = itemList.map(item =>  <li key={item.id}>
                                            {item.name}: &nbsp; 
                                            <b>{item.calories}</b></li>)

    
    

  return (
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>
    
  )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
    })),
}

List.defaultProps = {
  category: "Category",
  items: [],
}

export default List