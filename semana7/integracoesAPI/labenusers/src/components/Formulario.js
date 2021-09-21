import React from "react";
import styled from "styled-components";

const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  input {
    margin: 20px 0;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: lightgray;
    font-size: 18px;
  }
`
const BotaoFormulario = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px;

  :hover {
    color: white;
    background-color: darkgray;
  }

  :active {
    color: lightgray
  }
`

export default class Formulario extends React.Component {
    render () {
        return (
            <ContainerFormulario>
          <h1>Formulário de Usuários</h1>
          <label htmlFor="username"> Nome para Cadastro:</label>
          <input
            placeholder="Nome do Usuário"
            value={this.props.userName}
            onChange={this.props.handleUserName}
          />
          <label htmlFor="usermail"> E-Mail para Cadastro:</label>
          <input 
            placeholder="E-mail do Usuário"
            value={this.props.userMail}
            onChange={this.props.handleUserMail}
          />
          <BotaoFormulario onClick={this.props.createUser}>Enviar</BotaoFormulario>
        </ContainerFormulario>
        )
    }
}