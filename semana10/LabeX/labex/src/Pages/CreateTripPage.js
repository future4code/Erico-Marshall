//Formulário para o administrador criar uma nova viagem
import React from "react";
import { useHistory } from "react-router";
import { FormContainer, PageContainer } from "./style";
import { useProtectedPage } from "./AdminHome";
import axios from "axios";
import useForm from "../Hooks/useForm";

const CreateTripPage = () => {
    useProtectedPage();

    const {form, onChangeInput, cleanFields} = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})
    
    const history = useHistory();

    const handleClickBack = () => {
        history.goBack();
    };

    const getCreateTrip = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trips`,
         form, {headers:{
             auth: token
         }})
        .then(response => {
            alert("Viagem cadastrada com sucesso!");
            cleanFields();
        })
        .catch(error => {
            alert("Não foi possível cadastrar a sua viagem");
            console.log(error.message);
        })
    };

    return (
        <PageContainer>
            <h1>Criar uma nova viagem</h1>
            <button onClick={handleClickBack}>Voltar</button>
            <FormContainer>
                <form onSubmit={getCreateTrip}>
                    <input
                    name="name"
                    required
                    type="text"
                    placeholder="Nome da Viagem"
                    value={form.name}
                    onChange={onChangeInput}
                    />
                    <input
                    name="planet"
                    required
                    type="text"
                    placeholder="Planeta"
                    value={form.planet}
                    onChange={onChangeInput}
                    />
                    <input
                    name="date"
                    type="date"
                    placeholder="Data da Viagem"
                    value={form.date}
                    onChange={onChangeInput}
                    />
                    <input
                    name="description"
                    type="text"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={onChangeInput}
                    />
                    <input
                    name="durationInDays"
                    type="number"
                    placeholder="Duração da Viagem"
                    value={form.durationInDays}
                    onChange={onChangeInput}
                    />
                    <button>Criar Viagem</button>
                </form>
            </FormContainer>
        </PageContainer>
    )
}

export default CreateTripPage;