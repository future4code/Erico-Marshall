import axios from "axios";
import { BASE_URL } from "../Constants/urls";

export const sendComment = (id, body, clearFields) => {
    const refreshPage = () => {
        window.location.reload()
    }

    axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
        Authorization: localStorage.getItem("token")
        }})
    .then((response) => {
        clearFields();
        alert(`Comentário enviado com sucesso!`);
        refreshPage();
    })
    .catch((error) => {
        alert("Oops! Ocorreu um erro ao enviar o comentário! Tente novamente!");
        console.log(error.response);
    })
};