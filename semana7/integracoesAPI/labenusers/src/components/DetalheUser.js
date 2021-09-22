import React from "react";
import styled from "styled-components";
import Lista from "./Lista";
import axios from "axios";





const ContainerDetalhe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FaixaUsuarioDetalhe = styled.div`
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

const ListaUsuariosDetalhe = styled.div`
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

export default class DetalheUsuario extends React.Component {


    render () {

    const detalheDoUsuario = this.props.detalheUsuario.map((user) => {
      return <FaixaUsuarioDetalhe key={user.id}>
            <p>{user.name} - {user.email}</p>
          </FaixaUsuarioDetalhe>;
    })

     return (
        <ContainerDetalhe>
          <h1>Detalhe do usuário:</h1>
          <ListaUsuariosDetalhe>
            {detalheDoUsuario}
          </ListaUsuariosDetalhe>
        </ContainerDetalhe>
     )
    }
}