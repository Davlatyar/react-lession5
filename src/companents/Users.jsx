import { useState } from "react"

function Users() {
    const [users,setUsers] = useState([])   
    
    const FetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => setUsers(json))
        console.log("Users fetched..");
        
    }

    useEffect(FetchUsers, [])
    console.log(users);
    
    

    
    return(<>
    </>)
}
export default Users