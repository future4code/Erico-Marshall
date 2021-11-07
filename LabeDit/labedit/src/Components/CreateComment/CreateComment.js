import React from "react";
import useForm from "../../Hooks/useForm";
import { sendComment } from "../../Services/Comments";
import { InputsContainer } from "./styled";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const CreateComment = ({postId}) => {
    const [form, onChangeInput, clearFields] = useForm({body: ""});

    const onSubmitForm = (event) => {
        event.preventDefault();
        sendComment(postId, form, clearFields);
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
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
                    Enviar Comentário
                </Button>
            </form>
        </InputsContainer>
    )
};

export default CreateComment;