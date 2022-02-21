import styled from "styled-components";
import leftArrow from '../assets/carousel/left-arrow.svg';
import { Image } from "./styles/Image.styled";
import React from "react";

const StyledLeftArrow = styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-radius: 100%;
    border: 2px solid #f3621c;
    top: 50%;
    transform: translateY(-50%);
`;

interface LeftArrowProps {
    setCurrentSlide(slide: number): void,
    currentSlide: number,
    length: number,
    onClick: void
}

const LeftArrow: React.FC<LeftArrowProps> = ({setCurrentSlide, currentSlide, length, onClick}) => {
    return (
        <StyledLeftArrow
            onClick={() => onClick }
        >
            <Image src={ leftArrow } height='35px'/>
        </StyledLeftArrow>
    )
};

export default LeftArrow;
