import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Formulario from './components/Formulario';
import PaginaUsuarios from './components/PaginaUsuarios';


const ContainerPagina = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BotaoPagina = styled.button`
    margin-top: 50px;
    padding: 10px;
    border: none;
    border-radius: 5px;
  
  :hover {
    color: white;
    background-color: darkgray;
  }

  :active {
    color: lightgray
  }
`
const headers = {
  headers: {
    Authorization: "erico-marshall-maryam"
  }
};

export default class App extends React.Component {

  state = {
    users: [],
    detalheUsuario: [],
    userName: "",
    userMail: "",
    pageForm: true
  };

  componentDidMount() {
    this.getAllUsers();
  };

  handleUserName = (event) => {
    this.setState({userName:event.target.value});
  };

  handleUserMail = (event) => {
    this.setState({userMail:event.target.value});
  };

  createUser = () => {
  
    const url = 
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.userName,
      email: this.state.userMail
    };

    axios
    .post(url, body, headers)
    .then((res) =>{
      this.setState({userName: ""});
      this.setState({userMail: ""});
      this.getAllUsers();
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
  };

  deleteUser = async (id, name) => {
    const url =
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    await axios.delete(url, headers)

    const confirmDelete = window.confirm(`Você tem certeza de que deseja excluir o usuário ${name}?`)
    if (confirmDelete) {
      try {
        this.getAllUsers();
      }
      catch(error) {
        alert(error.response.data.message);
      };
    }
  }



  getAllUsers = () => {
    const url = 
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    
    axios
      .get(url, headers)
      .then((res) => {
      this.setState({users: res.data});
    })
    .catch((error) => {
      console.log(error.response);
    });
  };

  enterFormPage = () => {
    this.setState({pageForm: !this.state.pageForm});
  }

  renderPage = () => {
    if (this.state.pageForm) {
      return <Formulario 
        userName = {this.state.userName}
        handleUserMail = {this.handleUserMail}
        userMail = {this.state.userMail}
        handleUserName = {this.handleUserName}
        createUser = {this.createUser}
        enterListPage = {this.enterListPage}
        />
    } else {
      return <PaginaUsuarios 
        users = {this.state.users}
        enterFormPage = {this.enterFormPage}
        deleteUser = {this.deleteUser}
        getUserById = {this.getUserById}
        detalheUsuario = {this.state.detalheUsuario}
        />
    }
  }
  
  render(){

    return (
      <ContainerPagina>
        {this.renderPage()}
        <BotaoPagina onClick={() => this.enterFormPage()}>{this.state.pageForm === true ? "Ver Lista dos Usuários" : "Ver Formulário"}</BotaoPagina>
      </ContainerPagina>
    );
  };
}