import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
        <div>
          {publicacaoUsuarios}
        </div>
      </MainContainer>
    );
  }
}

export default App;
