import React, {Component} from 'react'
import styled from 'styled-components'
import LogoInsta from '../../img/instagram.png'
import LogoLinkedin from '../../img/linkedin.png'
import LogoTwitter from '../../img/twitter.png'

const LogoRedes = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: darkgray;
    color: white
`

const InputCompartilhar = styled.input`
    width: 100%;
    margin-right: 5px;
    border: 1px solid black;
    color: white;
    background-color: darkgray;
`

const BotaoEstilizado = styled.button`
    width: 40px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background-color: darkgray;

`

/* const EnviaCompartilhar = () => {
    console.log(`${this.state.valor} Compartilhar compartihado pelo ${redeSocial}`)
} */

export class SecaoCompartilhar extends Component {
	state = {
		valorCompartilhar: ''
	}

	onChangeCompartilhar = (event) => {
		this.setState({valorCompartilhar: event.target.value})
	}

	render() {
		return <CommentContainer>
			<InputCompartilhar
				placeholder={'O que você quer compartilhar?'}
				value={this.state.valorCompartilhar}
				onChange={this.onChangeCompartilhar}
			/>
            
			<BotaoEstilizado onClick={this.props.aoEnviar}><LogoRedes src={LogoInsta}/></BotaoEstilizado>
            <BotaoEstilizado onClick={this.props.aoEnviar}><LogoRedes src={LogoLinkedin}/></BotaoEstilizado>
            <BotaoEstilizado onClick={this.props.aoEnviar}><LogoRedes src={LogoTwitter}/></BotaoEstilizado>
		</CommentContainer>
	}
}