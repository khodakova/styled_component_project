import React from 'react';
import styled from "styled-components";
import { Button } from "../../components/styles/Button";

const StyledCatsButton = styled(Button)`
    margin: 50px auto 0;
    display: flex;
    justify-content: center;
`;

const CatsButton = () => {
    return (
        <StyledCatsButton>
            Выбрать котэка
        </StyledCatsButton>
    );
};

export default CatsButton;
