import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input {
    background-color: gray;
    color: white;
    border: none;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
  }

  button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    color: white;
    background-color: gray;
  }
`

const ContainerFormulario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
class App extends React.Component {

  state = {
    usuarios: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50?random=0",
        fotoPost: "https://picsum.photos/200/150?random=0"
      },
      {
        nomeUsuario: "_emarshall",
        fotoUsuario: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150?random=1"
      },
      {
        nomeUsuario: "João Cardholder_jr",
        fotoUsuario: "https://picsum.photos/50/50?random=2",
        fotoPost: "https://picsum.photos/200/150?random=2"
      }
    ],
    inputValorNomeUsuario: "",
    inputValorFotoUsuario: "",
    inputValorPostUsuario: ""
  }

  adicionarUsuario = () => {
    const copiaUsuarios = [...this.state.usuarios];
    if(this.state.inputNomeUsuario === "") {
      alert("Preencha seu usuário!");
      return;
    }

    const novoUsuario = {
      nomeUsuario: this.state.inputValorNomeUsuario,
      fotousuario: this.state.inputValorFotoUsuario,
      fotoPost: this.state.inputValorPostUsuario
    };

    copiaUsuarios.push(novoUsuario);
    this.setState({usuarios:copiaUsuarios, inputValorNomeUsuario: "", inputValorFotoUsuario: "", inputValorPostUsuario: ""})
  }

  onChangeNomeUsuario = (event) => {
    this.setState({inputValorNomeUsuario:event.target.value});
  };

  onChangeFotoUsuario = (event) => {
    this.setState({inputValorFotoUsuario:event.target.value});
  };

  onChangePostUsuario = (event) => {
    this.setState({inputValorPostUsuario:event.target.value});
  };

  render() {
    const publicacaoUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Post key={usuario.nomeUsuario}
          nomeUsuario = {usuario.nomeUsuario}
          fotoUsuario = {usuario.fotoUsuario}
          fotoPost = {usuario.fotoPost}
        />
      );
    });

    return (
      <MainContainer>

        <ContainerFormulario>
          <input
            value={this.state.inputValorNomeUsuario}
            onChange={this.onChangeNomeUsuario}
            placeholder="Nome do usuário"
          />
          <input
            value={this.state.inputValorFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder="Foto do usuário"
          />
          <input
            value={this.state.inputValorPostUsuario}
            onChange={this.onChangePostUsuario}
            placeholder="Post do usuário"
          />

          <button onClick={this.adicionarUsuario}>Adicionar</button>
        </ContainerFormulario>
          {publicacaoUsuarios}
      </MainContainer>
    );
  }
}

export default App;