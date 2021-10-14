//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React, { useState } from "react";
import axios from "axios";
import { useGetAllTrips } from "../Hooks/GetTrips";
import { PageContainer, FormContainer, FormText } from "./style";
import { useHistory } from "react-router";

const AplicationFormPage = () => {

    const [trips] = useGetAllTrips(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trips`);

    const history = useHistory();

    const handleClickBack = () => {
        history.goBack();
    };

    const [formName, setFormName] = useState("");
    const [formAge, setFormAge] = useState("");
    const [formText, setFormText] = useState("");
    const [formJob, setFormJob] = useState("");
    const [formCountry, setFormCountry] = useState("");

    const handleFormName = (event) => {
        setFormName(event.target.value);
    };

    const handleFormAge = (event) => {
        setFormAge(event.target.value);
    };

    const handleFormText = (event) => {
        setFormText(event.target.value);
    };

    const handleFormJob = (event) => {
        setFormJob(event.target.value);
    };

    const handleFormCountry = (event) => {
        setFormCountry(event.target.value);
    };

    const applyToTrip = () => {
        const body = {
            name: formName,
            age: formAge,
            aplicationText: formText,
            profession: formJob,
            country: formCountry
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trips/:id/apply`, body)
        .then(response => {
            setFormName("");
            setFormAge("");
            setFormText("");
            setFormJob("");
            setFormCountry("");
            alert("Formulário enviado com sucesso!");
            return response;
        })
        .catch(error => {
            alert("Não foi possível enviar o seu formulário");
            console.log(error);
        })
    }

    const tripList = trips && trips.map(trip => {
        return (
            <option key={trip.id} value={trip.id}>
                {trip.name}
            </option>
        )
    })

    return (
        <PageContainer>
        <h1>Inscreva-se para uma viagem</h1>
        <button onClick={handleClickBack}>Voltar</button>
            <FormContainer>
                <form onSubmit={applyToTrip}>
                    <select
                    name="trips"
                    >
                        <option>Escolha uma Viagem</option>
                        <option>Lista das outras viagens</option>
                        {tripList}    
                    </select>
                    <input
                    required
                    type="text"
                    placeholder="Nome"
                    value={formName}
                    onChange={handleFormName}
                    />
                    <input
                    required
                    type="number"
                    min="18"
                    placeholder="Idade"
                    value={formAge}
                    onChange={handleFormAge}
                    />
                    <input
                    className="FormText"
                    placeholder="Texto de Candidatura"
                    required
                    type="text"
                    value={formText}
                    onChange={handleFormText}
                    />
                    <input
                    placeholder="Profissão"
                    required
                    type="text"
                    value={formJob}
                    onChange={handleFormJob}
                    />
                    <input
                    placeholder="País"
                    required
                    type="text"
                    value={formCountry}
                    onChange={handleFormCountry}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </FormContainer>
        </PageContainer>
    );
}

export default AplicationFormPage;