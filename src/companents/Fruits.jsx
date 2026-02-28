function Fruits() {
    const fruits = [{name: "Apple"},
                 { name: "Bannana"},
                 { name: "PineApple"},
                 { name: "Lemon"}]
   
   
    const listItems = fruits.map(fruits=> <li>{fruits.name}</li>) 
    
    return(
    <>
       <ul>{listItems}</ul>
        </>
    )
}
export default Fruits