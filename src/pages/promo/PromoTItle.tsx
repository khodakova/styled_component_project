import React from 'react';
import styled from "styled-components";
import { GlobalThemeProps } from "../../styles/Global";

const StyledPromoTitle = styled.h1`
    font-size: 66px;
    font-weight: 700;
    line-height: 58px;
    color: ${ ({ theme }: GlobalThemeProps) => theme.text };
    max-width: 891px;
    @media (max-width: 1200px) {
        font-size: 56px;
    }
    @media (max-width: 768px) {
        font-size: 40px;
        line-height: 36px;
    }
    @media (max-width: 435px) {
        font-size: 30px;
    }
`;

const PromoTitle = () => {
    return (
        <StyledPromoTitle>
            Профессиональный подбор мемасиков
        </StyledPromoTitle>
    );
};

export default PromoTitle;
