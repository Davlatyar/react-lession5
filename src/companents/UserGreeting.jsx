function UserGreeting() {

  const fruits = [{name: "Apple", calories: 95},
                 { name: "Bannana" ,calories: 95},
                 { name: "PineApple", calories: 95},
                 { name: "Lemon", calories: 95}]

    const listItems = fruits.map(fruits => <li key={fruits.id}>{fruits.name}: <b>{fruits.calories}</b> calories</li>)
    return(
      <>
      <ol>
      {listItems}
      </ol>
      </>
    )
}  

export default UserGreeting