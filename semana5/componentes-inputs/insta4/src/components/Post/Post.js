import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'



const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    favorito: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      });
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickFavorito = () => {
    if (!this.state.favorito) {
      this.setState({
        favorito: true
      })
    } else {
      this.setState({
        favorito: false
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  aoEnviarCompartilhamento = () => {
    this.setState({
      compartilhando: false
    })
  }

  render() {
    let iconeFavorito

    if (this.state.favorito) {
      iconeFavorito = iconeCoracaoPreto
    } else {
      iconeFavorito = iconeCoracaoBranco
    }


    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    console.log(this.state.comentando)
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar 

    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar aoEnviar={this.aoEnviarCompartilhamento}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeFavorito}
          onClickIcone={this.onClickFavorito}
        />

        <IconeComContador
          icone = {iconeComentario}
          onClickIcone={this.onClickCompartilhar}
        />

      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post