import React from "react";
import styled from "styled-components";
import DetalheUsuario from "./DetalheUser";
import axios from "axios";


const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BotaoLista = styled.button`
  border: none;
  border-radius: 5px;
  font-weight: bolder;


  :hover {
    color: white;
    background-color: darkgray;
  }

  :active {
    color: lightgray
  }
`
const FaixaUsuario = styled.div`
  display: flex;
  padding: 5px;
  border: none;
  background-color: lightgray;
  border-radius: 5px;
  width: 200px;
  justify-content: space-between;
  margin: 10px 5px;

  p {
    margin: 0;
  }
`

const ListaUsuarios = styled.div`
  padding: 20px;
  border: none;
  background-color: rgb(229,228,226);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`
const headers = {
  headers: {
    Authorization: "erico-marshall-maryam"
  }
};

export default class Lista extends React.Component {

  state = {
    detalheUsuario: []
  }

  getUserById = (id) => {
    const url = 
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios
    .get(url, headers)
    .then((res) => {
      const novoDetalhe = [];
      novoDetalhe.push(res.data);
      this.setState({detalheUsuario: novoDetalhe});
    })
    .catch((error) => {
      console.log(error.response);
    });
  };


    render () {

    const userComponents = this.props.users.map((user) => {
        return <FaixaUsuario key={user.id}>
          <p>{user.name}</p>
          <BotaoLista onClick={() => this.getUserById(user.id)}>Detalhar</BotaoLista>
          <BotaoLista onClick={() => this.props.deleteUser(user.id)}>X</BotaoLista> 
        </FaixaUsuario>;
        });

     return (
        <ContainerLista>
          <h1>Usuários Cadastrados:</h1>
          <ListaUsuarios>
            {userComponents}
            <DetalheUsuario
            detalheUsuario = {this.state.detalheUsuario}
            />
          </ListaUsuarios>
        </ContainerLista>
     )
    }
}