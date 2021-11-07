import axios from "axios";
import { BASE_URL } from "../Constants/urls";

export const sendPost = (body, clearFields) => {
    const refreshPage = () => {
        window.location.reload()
    };

    axios
    .post(`${BASE_URL}/posts`, body, {
        headers: {
        Authorization: localStorage.getItem("token")
        }})
    .then((response) => {
        clearFields();
        alert(`Post enviado com sucesso!`);
        refreshPage();
    })
    .catch((error) => {
        alert("Oops! Ocorreu um erro ao criar o post! Tente novamente!");
        console.log(error.response);
    })
};