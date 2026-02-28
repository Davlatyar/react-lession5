function Fruit() {
  const Fruit = [{name: "Apple"},
                 { name: "Bannana"},
                 { name: "PineApple"},
                 { name: "Lemon"}]


     const Itemlist = Fruit.map (Fruit => <li>{Fruit.name}</li> )
                
    const vegatables = 
                [{name: "Potatoes"},
                 { name: "Tomato"},
                 { name: "Onion"},
                 { name: "Corn"}]


    return(
        <>
        <ul>
           {Fruit.lengt > 0 && <List items = {Fruit} category = "fruits"/>}
           {vegatables.length > 0 && <List items = {vegatables} category = "vegatables"></List>}
            
        </ul>
        </>
    )
}

export default Fruit