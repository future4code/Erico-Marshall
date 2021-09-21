import React from "react";
import styled from "styled-components";



const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const BotaoLista = styled.button`
  border: none;
  border-radius: 100%; 


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
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

export default class Lista extends React.Component {
    render () {

    const userComponents = this.props.users.map((user) => {
        return <FaixaUsuario key={user.id}><p>{user.name}</p><BotaoLista onClick={() => this.props.deleteUser(user.id)}>X</BotaoLista> </FaixaUsuario>;
        });

     return (
        <ContainerLista>
          <h1>Usuários Cadastrados:</h1>
          <ListaUsuarios>
            {userComponents}
          </ListaUsuarios>
        </ContainerLista>
     )
    }
}