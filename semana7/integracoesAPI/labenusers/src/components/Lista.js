import React from "react";
import styled from "styled-components";


const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  input {
    margin: 20px 0;
  }

  button {
    margin: 20px 0;
  }
`

export default class Lista extends React.Component {
    render () {

    const userComponents = this.props.users.map((user) => {
        return <p key={user.id}>{user.name}<button onClick={() => this.props.deleteUser(user.id)}>X</button> </p>;
        });

     return (
        <ContainerLista>
          <h1>Usuários Cadastrados:</h1>
          {userComponents}
        </ContainerLista>
     )
    }
}