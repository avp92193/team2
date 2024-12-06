import { useState } from 'react';
import './App.css';
import CreateSite from './components/create-site';
import BookRegistration from './components/book-registration-page';
import CreateUser from './components/create-user';
import CreateInmate from './components/create-inmate';
import PokeAPI from './components/pokeapi';

function App(props) {

  const host = props.host;
  const [chosenSite, setChosenSite] = useState([]);
  const setPageDisplay= props.setPageDisplay;


  const [site, setSite] = useState([]);

  async function getPotluck(id){
    console.log(id);
    if(id){

    }

  }


  return (<>
  
  <h2>Team 2 </h2>
  <PokeAPI/>
   </>
  );
}

export default App;
