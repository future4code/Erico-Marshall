import React from "react";
import { LoginPageContainer, LogoImage, SignUpButtonContainer } from "./styled";
import logo from "../../Assets/pintoBoni.png";
import Button from "@material-ui/core/Button"
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";
import { goToSignUp } from "../../Routes/coordinator";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage();
    const history = useHistory();
  
    return (
        <LoginPageContainer>
            <LogoImage src={logo}/>
            <LoginForm 
            setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin={"normal"}
                    >
                Crie Aqui sua conta!
            </Button>
            </SignUpButtonContainer>
        </LoginPageContainer>
    )
}

export default LoginPage;