//Formulário para o administrador criar uma nova viagem

import React from "react";
import { useHistory } from "react-router";

const CreateTripPage = () => {
    const history = useHistory();

    const handleClickBack = () => {
        history.goBack();
    };

    return (
        <div>
            <h1>Formulário para o Adm criar uma nova viagem</h1>
            <button onClick={handleClickBack}>Voltar</button>
        </div>
    )
}

export default CreateTripPage;