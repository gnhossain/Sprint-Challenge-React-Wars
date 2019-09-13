import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList(){
    const[character, setCharacter] = useState([]);


    useEffect(() => {
    axios
    .get('https://swapi.co/api/people')
    .then (response => {
        const character = response.data;
        console.log("Wars", character);
        setCharacter(character);
    })
    .catch (error => {
        console.log ("The data was not returned", error);
        
    });  
}, []);

return (
        <div className = "Wars">
            <CharacterCard character={character}/>
        </div>
    )
}