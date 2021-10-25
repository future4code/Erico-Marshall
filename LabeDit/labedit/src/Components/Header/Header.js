import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar, LogoImage } from './styled';
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin } from "../../Router/coordinator"
import { useHistory } from 'react-router-dom';
import logo from "../../Assets/pintoBoni.png"


const Header = () => {
    const history = useHistory();
    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeed(history)} color="inherit"><LogoImage src={logo} />BoniDit</Button>
                <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
            </StyledToolbar>
        </AppBar>
    );
}

export default Header;