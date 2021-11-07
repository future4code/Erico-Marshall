import React from "react";
import {  InputsContainer } from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import Button from "@material-ui/core/Button";
import { login } from "../../Services/Users";
import { useHistory } from "react-router";

const LoginForm = ({setRightButtonText}) => {
    const [form, onChangeInput, clearFields] = useForm({email: "", password: ""});
    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault();
        login(form, clearFields, history, setRightButtonText);
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
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
                    Fazer Login
                </Button>

            </form>
        </InputsContainer>
    )
}

export default LoginForm;