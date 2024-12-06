import { useEffect, useState } from "react"

export default function CreateUser(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userList, setUserList]= useState([])
    

    const ListElement = userList.map((n)=>
    <tr key={n.id}>
        <td>{n.username}</td>
    </tr>
    )

    function updateUsername(event) {
        setUsername(event.target.value)
    }
    function updatePassword(event) {
        setPassword(event.target.value)
    }

    async function getUsers(){
        const req = await fetch ("http://localhost:8080/users");
        const body = await req.json();
        setUserList([...body])
        
    }

    async function createUser() {
        const user = {username: username, password: password}
        const response = await fetch ("http://localhost:8080/users", {
            body:JSON.stringify(user),
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            }
        });
        
        if(response.status === 200){
            const body = await response.json();
            alert(`New User Created with id of ${body.id}`)
            

        }else{
            alert(`Could not create User`);
        }
    }
    useEffect(()=> {getUsers()})


    return (<>
        <h1>User Registration</h1>

   

        <label htmlFor="username">Username</label>
        <input onChange= {updateUsername} type="text" placeholder="username"></input>
        <br/>

        <label htmlFor="password">Password</label>
        <input onChange= {updateUsername} type="text" placeholder="password"></input>
        <br/>
        <button onClick={()=> createUser()}>Submit</button>

        <ul>
            <th>Username</th>
            <li>
                {ListElement}
            </li>
        </ul>

        
    </>)
}