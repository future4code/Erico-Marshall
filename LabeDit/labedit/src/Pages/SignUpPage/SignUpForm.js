import React from "react";
import {  InputsContainer } from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import Button from "@material-ui/core/Button"
import { signUp } from "../../Services/Users";
import { useHistory } from "react-router";

const SignUpForm = ({setRightButtonText}) => {
    const [form, onChangeInput, clearFields] = useForm({username: "", email: "", password: ""});
    const history = useHistory();
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clearFields, history, setRightButtonText);
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
            <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChangeInput}
                    label={"Nome de Usuário"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChangeInput}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChangeInput}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                    >
                    Criar Conta
                </Button>

            </form>
        </InputsContainer>
    )
}

export default SignUpForm;