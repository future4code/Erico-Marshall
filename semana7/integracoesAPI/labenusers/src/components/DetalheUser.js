import React from "react";
import styled from "styled-components";


const ContainerDetalhe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FaixaUsuarioDetalhe = styled.div`
  display: flex;
  flex-direction: column;
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

const LinhaDetalhe = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
    

const ListaUsuariosDetalhe = styled.div`
  padding: 20px;
  border: none;
  background-color: rgb(229,228,226);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`
// const BotaoDetalhe = styled.button`
//   border: none;
//   border-radius: 5px;
//   font-weight: bolder;


//   :hover {
//     color: white;
//     background-color: darkgray;
//   }

//   :active {
//     color: lightgray
//   }
// `

export default class DetalheUsuario extends React.Component {


    render () {

    const detalheDoUsuario = this.props.detalheUsuario.map((user) => {
      return <FaixaUsuarioDetalhe key={user.id}>
            <LinhaDetalhe>
                <h3>Nome:</h3>
                <p>{user.name}</p> 
            </LinhaDetalhe>
            <LinhaDetalhe>
                <h3>E-Mail:</h3>
                <p>{user.email}</p>
            </LinhaDetalhe>
          </FaixaUsuarioDetalhe>;
    })

     return (
        <ContainerDetalhe>
          <h1>Detalhe do usuário:</h1>
          <ListaUsuariosDetalhe>
            {detalheDoUsuario}
            {/* <BotaoDetalhe>Voltar</BotaoDetalhe> */}
          </ListaUsuariosDetalhe>
        </ContainerDetalhe>
     )
    }
}