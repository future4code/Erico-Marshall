//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição

import React, { useState } from "react";

const AplicationFormPage = () => {

    const [form, setForm] = useState({});
    const [formName, setFormName] = useState("");
    const [formAge, setFormAge] = useState("");
    const [formText, setFormText] = useState("");
    const [formJob, setFormJob] = useState("");

    const handleForm = (event) => {
        setForm(event.target.value)
    }

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


    return (
        <div>
        <h1>Inscreva-se para uma viagem</h1>
        <form onSubmit={setForm}>
            <select
            name="trips"
            >
                <option>Escolha uma Viagem</option>
                <option>Lista das outras viagens</option>    
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
            <select
            name="countries"
            >
                <option>Escolha um País</option>
                <option>Lista dos paises</option>    
            </select>
            <button type="submit">Enviar</button>
        </form>
        </div>
    );
}

export default AplicationFormPage;