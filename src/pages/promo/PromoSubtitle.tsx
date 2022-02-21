import React from 'react';
import styled from "styled-components";
import { GlobalThemeProps } from "../../styles/Global";

const StyledPromoSubtitle = styled.h2`
    font-size: 36px;
    font-weight: 600;
    margin-top: 32px;
    max-width: 500px;
    color: ${ ({ theme }: GlobalThemeProps) => theme.text };
    @media (max-width: 1200px) {
        font-size: 30px;
    }
    @media (max-width: 768px) {
        font-size: 23px;
        max-width: 100%;
    }
    @media (max-width: 435px) {
        font-size: 19px;
    }
`;

const PromoSubtitle = () => {
    return (
        <StyledPromoSubtitle>
            Наша мемостудия создат мемасик Вашей мечты
        </StyledPromoSubtitle>
    );
};

export default PromoSubtitle;
