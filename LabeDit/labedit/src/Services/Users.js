import axios from "axios";
import { BASE_URL } from "../Constants/urls";
import { goToFeed } from "../Routes/coordinator";

export const login = (body, clearFields, history, setRightButtonText) => {
    axios
    .post(`${BASE_URL}/users/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        clearFields();
        goToFeed(history);
        setRightButtonText("Logout");
    })
    .catch((error) => {
        alert("Oops! Ocorreu um erro ao fazer o login! Tente novamente!");
        console.log(error.response.data.message);
    })
};

export const signUp = (body, clearFields, history, setRightButtonText) => {
    axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert(`Cadastro Realizado com Sucesso!`);
        clearFields();
        goToFeed(history);
        setRightButtonText("Logout");
    })
    .catch((error) => {
        alert("Oops! Ocorreu um erro ao tentar cadastrar! Tente novamente!");
        console.log(error.message);
    })
};