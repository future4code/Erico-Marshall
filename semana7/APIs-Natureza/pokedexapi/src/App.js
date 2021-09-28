import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerImagem = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 10px;
`

export default class App extends React.Component {

  state = {
    pokemons: [],
    pokePicture: ""
  }


  componentDidMount() {
    this.getPokemons();
  }


  getPokemons = async () => {

    const response = await 
      axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
      this.setState({pokemons: response.data.results});
  }

  getPokePicture = async (pokemon) => {
    const url = pokemon.target.value;
    const response = await 
      axios
        .get(`${url}`);
        this.setState({pokePicture: response.data.sprites.front_default})

  }

  render (){

    const pokeList = this.state.pokemons.map((pokemon) => {
      return (
        <option key={pokemon.name} value={pokemon.url}>
          {pokemon.name}
        </option>
      )
    })
    return (
        <ContainerApp>
          <h1>Pokedéx</h1>
          <select onChange={this.getPokePicture}>
            <option>Selecione um Pokémon</option>
            {pokeList}
          </select>
          <ContainerImagem>
            {this.state.pokePicture &&
              <img src={this.state.pokePicture} alt="imagem do Pokémon escolhido"></img>
            }
          </ContainerImagem>
        </ContainerApp>
    );
  }
}

