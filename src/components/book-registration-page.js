import { useState } from "react"

export default function BookRegistration(props){

    const [title, setTitle] =useState("");
    const [author, setAuthor] =useState("");
    const [pubId, setPubId] =useState(0);

    function updateTitle(event) {
        setTitle(event.target.value)
    }
    function updateAuthor(event) {
        setAuthor(event.target.value)
    }
    function updatePublisher(event){
        setPubId(event.target.value)
    }

    async function createBook(){
        const book = {id: 0, title: title, author: author, pubId: Number(pubId)}
        const response = await fetch("http://localhost:8080/book", {
            body:JSON.stringify(book),
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        });
        if (response.status ===200){
            const body = await response.json();
            alert (`New book registered with id of ${body.id}`)
        }else{
            alert(`failed to create a book`)
        }
    }


    return(<>
        <label htmlFor="title">Title</label> 
        <input onChange= {updateTitle}name= "title" type="text" placeholder="title"/>
            <br/>
        <label htmlFor="author">author</label>
        <input onChange= {updateAuthor} name= "author" type="text" placeholder="author"/>
        
        <br/>
        <label htmlFor="pubId">Publisher ID</label>
        <input onChange= {updatePublisher} name= "pubId" type="text" placeholder="pubId"/>
        

        <button onClick={() => createBook()}>Submit  </button>
        <br/>
    </>)
}