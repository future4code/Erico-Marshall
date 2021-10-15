//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React, {useState} from "react";
import axios from "axios";
import { useGetAllTrips } from "../Hooks/GetTrips";
import { PageContainer, FormContainer } from "./style";
import { useHistory } from "react-router";
import useForm from "../Hooks/useForm";

const AplicationFormPage = () => {
    const { form, onChangeInput, cleanFields } = useForm({name: "", age: "", applicationText: "", profession: "", country: ""})

    const [trips] = useGetAllTrips(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trips`);

    const history = useHistory();

    const [tripId, setTripId] = useState("");

    const handleClickBack = () => {
        history.push("/trips");
    };

    const handleTripId = (event) => {
       setTripId(event.target.value);
    };

    const applyToTrip = (event) => {
        event.preventDefault();
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trips/${tripId}/apply`, form)
        .then(response => {
            alert("Formulário enviado com sucesso!");
            cleanFields();
        })
        .catch(error => {
            alert("Não foi possível enviar o seu formulário");
            console.log(error.message);
        })
    };

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
                    onChange={handleTripId}
                    name="trips">
                        <option>Escolha uma Viagem</option>
                        {tripList}    
                    </select>
                    <input
                    name="name"
                    required
                    type="text"
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChangeInput}
                    />
                    <input
                    name="age"
                    required
                    type="number"
                    min="18"
                    placeholder="Idade"
                    value={form.age}
                    onChange={onChangeInput}
                    />
                    <input
                    name="applicationText"
                    placeholder="Texto de Candidatura"
                    required
                    type="text"
                    value={form.applicationText}
                    onChange={onChangeInput}
                    />
                    <input
                    name="profession"
                    placeholder="Profissão"
                    required
                    type="text"
                    value={form.profession}
                    onChange={onChangeInput}
                    />
                    <input
                    name="country"
                    placeholder="País"
                    required
                    type="text"
                    value={form.country}
                    onChange={onChangeInput}
                    />
                    <button>Enviar</button>
                </form>
            </FormContainer>
        </PageContainer>
    );
}

export default AplicationFormPage;