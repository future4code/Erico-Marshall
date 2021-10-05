import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import PokeCard from './components/PokeCard/PokeCard';
import React, {useState, useEffect} from 'react';

const  App = () => {

  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect ( () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokelist(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const changePokeName = event => {
    setPokeName(event.target.value);
  };

    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
}

export default App;
