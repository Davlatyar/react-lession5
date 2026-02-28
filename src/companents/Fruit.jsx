function Fruit() {
  const Fruit = [{name: "Apple"},
                 { name: "Bannana"},
                 { name: "PineApple"},
                 { name: "Lemon"}]


     const Itemlist = Fruit.map (Fruit => <li>{Fruit.name}</li> )
                

    return(
        <>
        <ul>
            {Itemlist}
        </ul>
        </>
    )
}

export default Fruit