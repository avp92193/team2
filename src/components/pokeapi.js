import { useState } from "react";
import PokeViewer from "./pokeViewer";

export default function PokeAPI(){

    const [pokeName, setPokeName] = useState("");
    const [pokemon, setPokemon]= useState({})

    async function fetchThatPokemon(event) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        const fetchedPokemon = await response.json();
        console.log(fetchedPokemon)
        setPokemon(fetchedPokemon)
        
    }
    function updatePokemon(event) {
        const name = event.target.value;
        setPokeName(name);
    }

    return(<>
        <h1>PokeAPI</h1>
        <label>Pokemon</label>
        <input onChange= {updatePokemon} type="text" placeholder="squirtle"/>
        <button onClick={fetchThatPokemon}>Get That Pokemon</button>

            {pokemon.name ? <PokeViewer name={pokemon.name} height={pokemon.height} width={pokemon.width} spriteUrl={pokemon.sprites.front_default} /> : <h4>No Pokemon yet</h4>}

    </>)
}