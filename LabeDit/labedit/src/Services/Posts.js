import axios from "axios";
import { BASE_URL } from "../Constants/urls";
import { goToFeed } from "../Routes/coordinator";

export const sendPost = (body, clearFields, history) => {
    axios
    .post(`${BASE_URL}/posts`, body, {
        headers: {
        Authorization: localStorage.getItem("token")
        }})
    .then((response) => {
        goToFeed(history);
        clearFields();
        alert(`Post Enviado com sucesso!`);
    })
    .catch((error) => {
        alert("Oops! Ocorreu um erro ao criar o post! Tente novamente!");
        console.log(error.response);
    })
};