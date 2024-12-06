import { useEffect, useState } from "react";

export default function CreateSite(props){

    const host = "http://localhost:8080" ;
    const setChosenSite = props.setChosenSite;
    const setPageDisplay = props.setPageDisplay;
    const setIndigent = props.setIndigent;
    const [siteList, setSiteList] = useState([]);
    const [state, setState] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [accountOwner, setAccountOwner] = useState("");
    const [contact, setContact]= useState("");
    const [capacity, setCapacity] = useState(0);

    const ListElement =siteList.map((n)=>
    <tr key={n.id}>
        <td><button onClick={()=> getSites(n)}>View</button></td>
        <td>{n.state}</td>
        <td>{n.address}</td>
        <td>{n.accountOwner}</td>
        <td>{n.contact}</td>
        <td>{n.capacity}</td>
    </tr>)

    function updateState(event){
        setState(event.target.value)
    }
    function updateName(event){
        setName(event.target.value)
    }   
    function updateAddress(event){
        setAddress(event.target.value)
    }
    function updateAccountOwner(event){
        setAccountOwner(event.target.value)
    }
    function updateContact(event){
        setContact(event.target.value)
    }
    function updateCapacity(event){
        setCapacity(event.target.value)
    }
    
    async function getSites() {
        const req = await fetch ("http://localhost:8080/sites");
        const body = await req.json();
        setSiteList([...body]);
    }
    async function createSite() {
        const site = {id: 0, name: name, state: state, address: address, accountOwner: accountOwner, contact: contact, capacity: Number(capacity)}
        const response = await fetch (`${host}/sites`, {
            body:JSON.stringify(site),
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            }
        });
        
        if(response.status === 200){
            const body = await response.json();
            alert(`New Site Created with id of ${body.id}`)
            

        }else{
            alert(`Could not create Site`);
        }
    }
    useEffect(() => {getSites()})
    
    return(<>
    <h2>Create a Site</h2>
    <label htmlFor="name">Site Name</label>
    <input onChange= {updateName}type="text" placeholder="Site Name"/>
    <br/>

    <label htmlFor="state">State</label>
    <input onChange= {updateState}type="text" placeholder="State"/>
    <br/>
    <label htmlFor="address">Address</label>
    <input onChange= {updateAddress}type="text" placeholder="address"/>
    <br/>
    <label htmlFor="accountOwner">Account Owner</label>
    <input onChange= {updateAccountOwner}type="text" placeholder="Account Owner"/>
    <br/>
    <label htmlFor="contact">Contact</label>
    <input onChange= {updateContact}type="text" placeholder="Contact"/>
    <br/>
    <label htmlFor="capacity">Capacity </label>
    <input onChange= {updateCapacity}type= "text" placeholder="Capacity "/>
    <button onClick={() => createSite()}>Submit</button>
    <br/>
    <button onClick={() => getSites()}>Get Sites</button>

    <ul>
        <th>Name</th><th>State</th><th>Address</th><th>Account Owner</th><th>Contact</th><th>Capacity</th>
        <li>
            {ListElement}
        </li>
    </ul>
    
    </>)
}