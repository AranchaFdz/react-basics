

function Button() {

    // first way
    // return(<button>Click me 😏</button>)
    // second way
    // const handleClick = () => console.log("OUCH!")

    // return(<button onClick={handleClick}>Click me 😏</button>)


    // third way
    // const handleClick = () => console.log("OUCH!")

    // const handleClick2 = (name) => console.log(`${name} stop clicking me!`); using perameters like name

    // return(<button onClick={handleClick2("Arancha")}>Click me 😏</button>) it executes right away and we dont want that so....
    //  return(<button onClick={() => handleClick2("Arancha")}>Click me 😏</button>) that prevents calling this function right away
    
    /* Adding a count variable
    
    let count = 0;
    const handleClick = (name) {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    }

        return (
        <button onClick={() => handleClick("Arancha")}>Click me 😏</button>
    )

    // Events, see al the perameters of the event. target property text content
    // e = event

        /* const handleClick = (e) => console.log(e)

        rerturn (
            <button onClick={(e) => handleClick(e)}>Click me 😏</button>
        ); */


        const handleClick = (e)  => e.target.textContent = "OUCH! 😧"

        return (<button onClick={(e) => handleClick(e)}> Click me 😏</button>)

        //return (<button onDoubleClick={(e) => handleClick(e)}> Click me 😏</button>)
            
        }


export default Button