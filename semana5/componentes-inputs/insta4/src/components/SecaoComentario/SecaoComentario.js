import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentarios: [],
		valorComentario: ''
	}

	adicionarComentario = () => {
		const copiaComentarios = [...this.state.comentarios];

		const novoComentario = {
			comentario:this.state.valorComentario
		};

		copiaComentarios.push(novoComentario);
		this.setState({comentarios: copiaComentarios, valorComentario: ""})
	}

	aoEnviarComentario = (event) => {
		console.log(event.target.value);
		this.setState({valorComentario: event.target.value})
	}

	render() {
		const componentes = this.state.comentarios.map((cadaComentario) => {
			return (
				<CommentContainer key = {cadaComentario.comentario}>
					<p>{cadaComentario}</p>
				</CommentContainer>
			)
		})


		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={this.aoEnviarComentario}
			/>
			<button onClick={this.adicionarComentario}>Enviar</button>
			<div>{componentes}</div>
		</CommentContainer>
	}
}
