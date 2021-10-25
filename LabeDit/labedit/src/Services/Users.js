import axios from "axios";
import { BASE_URL } from "../Constants/urls";
import { goToFeed, goToLogin } from "../Router/coordinator";

export const login = (body, clearFields, history) => {
    axios
    .post(`${BASE_URL}/users/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        clearFields();
        goToFeed(history);
    })
    .catch((error) => {
        alert("Oops! Ocorreu um erro ao fazer o login! Tente novamente!");
        console.log(error.message);
    })
};

export const signUp = (body, clearFields, history) => {
    axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert(`Cadastro Realizado com Sucesso!`);
        clearFields();
        goToFeed(history);
    })
    .catch((error) => {
        alert("Oops! Ocorreu um erro ao tentar cadastrar! Tente novamente!");
        console.log(error.message);
    })


};