//Para fazermos login como administrador

import React from "react";
import { useHistory } from "react-router";

const LoginPage = () => {
    const history = useHistory();

    const handleClickBack = () => {
        history.goBack();
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleClickBack}>Voltar</button>
        </div>
    )
}

export default LoginPage;