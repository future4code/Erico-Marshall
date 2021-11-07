//Para fazermos login como administrador
import React, { useState } from "react";
import { useHistory } from "react-router";
import { PageContainer, LoginContainer } from "./style";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassoword] = useState("");
    const aluno = "erico-marshall-maryam"

    const history = useHistory();

    const handleClickBack = () => {
        history.goBack();
    };

    const handleLoginEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleLoginPassword = (event) => {
        setPassoword(event.target.value);
    };

    const onSubmitLogin = async () => {
        const body = {
            email: email,
            password: password
        }
        try {
            await axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`, body) 
            .then(response => {
                localStorage.setItem('token', response.data.token);
                history.push('/admin')
            });
        } catch(error) {
            console.log("deu erro:", error.response);
        };
    };

    return (
        <PageContainer>
            <h1>Login</h1>
            <button onClick={handleClickBack}>Voltar</button>
            <LoginContainer>
                <input
                placeholder="email"
                type="email"
                value={email}
                onChange={handleLoginEmail}
                />
                <input
                placeholder="senha"
                type="password"
                value={password}
                onChange={handleLoginPassword}
                />
                <button onClick={onSubmitLogin}>Enviar</button>
            </LoginContainer>
        </PageContainer>
    )
}

export default LoginPage;