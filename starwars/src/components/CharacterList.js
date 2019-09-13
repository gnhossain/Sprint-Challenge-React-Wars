import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

export default function CharacterList(){
    const[character, setCharacter] = useState([]);


    useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then (response => {
        const character = response.data.results;
        console.log("Wars", character);
        setCharacter(character);
    })
    .catch (error => {
        console.log ("The data was not returned", error);
        
    });  
}, []);

return (
        <div className = "Wars">
            {character.map(item => {
          return <CharacterCard name={item.name} hair_color={item.hair_color} gender={item.gender}/>;
        })}
            {/* <CharacterCard character={character}/> */}
        </div>
    )
}