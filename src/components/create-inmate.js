import { useEffect, useState } from "react"

export default function CreateInmate(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [siteName, setSiteName] = useState("");
    const [indigent, setIndigent] = useState(true);
    const [inmateList, setInmateList] = useState([])

    const ListElement =inmateList.map((n)=>
        <tr key={n.id}>
            <td><button onClick={()=> getInmates(n)}>View</button></td>
            <td>{n.firstName}</td>
            <td>{n.lastName}</td>
            <td>{n.siteName}</td>
            <td>{n.indigent}</td>
           
        </tr>)
    
    function updateFirstName(event){
        setFirstName(event.target.value)
    }
    function updateLastName(event){
        setLastName(event.target.value)
    }
    function updateSiteName(event){
        setSiteName(event.target.value)
    }

    async function CreateInmate(){
        const site = {id:0, firstName:firstName, lastName: lastName, siteName: siteName, indigent: Boolean(indigent)};
        const response = await fetch("http://localhost:8080/inmates", {
            body: JSON.stringify(site),
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        });
        if (response.status === 200){
            const body = response.json();
            alert(`New inmate created with id ${body}`)}
        else{
            alert(`Couldn't create inmate`)
        }
    }
    async function getInmates(){
        const request = await fetch ("http://localhost:8080/inmates")
        const body = await request.json();
        setInmateList([...body])
    }
    useEffect(() => {getInmates()})

    return(<>
        <h1>Inmate page</h1>

        <label htmlFor="firstName">First Name</label>
        <input onChange= {updateFirstName} type="text" placeholder="First Name"/>
        <br/>

        <label htmlFor="lastName">Last Name</label>
        <input onChange= {updateLastName}type="text" placeholder="Last Name"/>
        <br/>
        
        <label htmlFor="site_name">Site Name</label>
        <input onChange = {updateSiteName} type="text" placeholder="Site Name"/>
        <br/>
        <label htmlFor="indigent">Indigent</label>
        <input type="checkbox"></input>
        <br/>
        <button onClick={() => CreateInmate()}>Submit</button>

        <ul>
            <th>First Name</th><th>Last Name</th><th>Site Name</th><th>Indigent</th>
            <li>
                {ListElement}
            </li>
        </ul>

    
       

    </>)
}