import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToMenu } from "../../Routes/coordinator"
import { HeaderContainer } from './styled';

const Header = () => {
    const history = useHistory()

    return (
        <HeaderContainer>
            <button onClick={() => goToMenu(history)}>
                TMDB
            </button>
        </HeaderContainer>
    )
}

export default Header;