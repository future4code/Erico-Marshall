import React from "react";
import styled from "styled-components";

const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  input {
    margin: 20px 0;
  }

  button {
    margin: 50px 0;
  }
`

export default class Formulario extends React.Component {
    render () {
        return (
            <ContainerFormulario>
          <h1>Formulário de Usuários</h1>
          <label for="username"> Nome para Cadastro:</label>
          <input
            placeholder="Nome do Usuário"
            value={this.props.userName}
            onChange={this.props.handleUserName}
          />
          <label for="usermail"> E-Mail para Cadastro:</label>
          <input 
            placeholder="E-mail do Usuário"
            value={this.props.userMail}
            onChange={this.props.handleUserMail}
          />
          <button onClick={this.props.createUser}>Enviar</button>
        </ContainerFormulario>
        )
    }
}