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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'_emarshall'}
          fotoUsuario={'https://picsum.photos/51/51'}
          fotoPost={'https://picsum.photos/300/200'}
        />
        <Post
          nomeUsuario={'joao_Cardholder_jr'}
          fotoUsuario={'https://picsum.photos/52/52'}
          fotoPost={'https://picsum.photos/301/201'}
        />
      </MainContainer>
    );
  }
}

export default App;
