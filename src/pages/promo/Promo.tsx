import React from 'react';
import styled from "styled-components";
import PromoTitle from "./PromoTItle";
import PromoSubtitle from "./PromoSubtitle";
import PromoText from "./PromoText";
import PromoBtn from "./PromoBtn";
import { Container } from "../../components/styles/Container.styled";
// import promo from '../../assets/promo.jpg';
import promo from '../../assets/promo.png';
import promoLight from '../../assets/promo-light.jpg';
import { GlobalThemeProps } from "../../styles/Global";

const StyledPromo = styled.section`
    position: relative;
    padding: 149px 99px;
    width: 100%;
    //background: ${({ theme }: GlobalThemeProps) => `url(${promo}) center center/cover no-repeat`};//url(${promo}) center center/cover no-repeat;
    //background: url(${({theme}) => theme === 'light' ? promoLight : promo}) center center/cover no-repeat;
    background: url(${promo}) center center/cover no-repeat;
    @media (max-width: 1200px) {
        padding: 199px 99px 0;
    }
    @media (max-width: 768px) {
        padding: 199px 29px 0;
    }
`;

const Promo = () => {
    return (
        <StyledPromo>
            <Container>
                <PromoTitle/>
                <PromoSubtitle/>
                <PromoText/>
                <PromoBtn/>
            </Container>
        </StyledPromo>
    );
};

export default Promo;
