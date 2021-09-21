import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Formulario from './components/Formulario';
import Lista from './components/Lista';


const ContainerPagina = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const headers = {
  headers: {
    Authorization: "erico-marshall-maryam"
  }
};

export default class App extends React.Component {

  state = {
    users: [],
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

  deleteUser = (id) => {

    const url =
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios
    .delete(url, headers)
    .then((res) => {
      console.log(res);
      this.getAllUsers();
      
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
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
      return <Lista 
        users = {this.state.users}
        enterFormPage = {this.enterFormPage}
        deleteUser = {this.deleteUser}
        />
    }
  }
  
  render(){

    return (
      <ContainerPagina>
        {this.renderPage()}
        <button onClick={() => this.enterFormPage()}>{this.state.pageForm === true ? "Ver Lista" : "Ver Formulário"}</button>
      </ContainerPagina>
    );
  };
}