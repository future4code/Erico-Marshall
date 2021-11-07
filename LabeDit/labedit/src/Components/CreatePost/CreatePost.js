import React from "react";
import useForm from "../../Hooks/useForm";
import { sendPost } from "../../Services/Posts";
import { InputsContainer } from "./styled";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const CreatePost = () => {
    const [form, onChangeInput, clearFields] = useForm({title: "", body: ""});

    const onSubmitForm = (event) => {
        event.preventDefault();
        sendPost(form, clearFields);
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"title"}
                    value={form.title}
                    onChange={onChangeInput}
                    label={"Título do Post"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                />
                <TextField
                    name={"body"}
                    value={form.body}
                    onChange={onChangeInput}
                    label={"Texto"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                    >
                    Enviar Post
                </Button>

            </form>
        </InputsContainer>
    )
};

export default CreatePost;