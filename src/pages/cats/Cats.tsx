import React from 'react';
import styled from "styled-components";
import { locationContent } from "../../locationContent";
import line from '../../assets/catsLine.svg';
import CatsButton from "./CatsButton";
import SmallCarousel from "../../components/smallCarousel/SmallCarousel";
import { Title } from "../../components/styles/Title.styled";

const StyledLocation = styled.section`
    position: relative;
    padding: 70px 0;
    height: 720px;
    overflow: hidden;
`;

const StyledImg = styled.img`
    position: absolute;
    top: 45px;
    z-index: -1;
    right: 0;
    width: 100%;
`;

const Cats = () => {
    return (
        <StyledLocation>
            <Title>
                Наши котэки
            </Title>
            <SmallCarousel items={locationContent}/>
            <StyledImg src={line}/>
            <CatsButton/>
        </StyledLocation>
    );
};

export default Cats;
