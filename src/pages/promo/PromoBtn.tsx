import React from 'react';
import styled from "styled-components";
import { MainButton } from "../../components/styles/MainButton.styled";

const StyledPromoBtn = styled(MainButton)`
    margin-top: 30px;
`;

const PromoBtn = () => {
    return (
        <StyledPromoBtn>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Заказать
        </StyledPromoBtn>
    );
};

export default PromoBtn;
