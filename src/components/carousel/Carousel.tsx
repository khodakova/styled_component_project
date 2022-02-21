import React from 'react';
import styled, { css } from "styled-components";
import { Button } from "../styles/Button";
import leftArrow from '../../assets/carousel/left-arrow.svg';
import rightArrow from '../../assets/carousel/right-arrow.svg';
import { Image } from "../styles/Image.styled";
import LeftArrow from "../LeftArrow";

const CarouselWrapper = styled.div`
    display: flex;
    position: relative;
`;

interface CarouselProps {
    children: JSX.Element[]
}

interface ICarouselSlide {
    active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${ props => (props.active ? 1 : 0) };
  transition: all 0.5s ease;
  width: 100%;
`;

interface ICarouselProps {
    currentSlide: number;
}

const StyledCarouselSlides = styled.div<ICarouselProps>`
  position: relative;
  display: flex;
  ${ props =>
    props.currentSlide &&
    css`
      transform: translateX(-${ props.currentSlide * 100 }%);
    ` };
  transition: all 0.5s ease;
`;

const StyledLeftBtn = styled.button`
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
    z-index: 10;
    cursor: pointer;
    background: rgba(0,0,0,0);
`;

const StyledRightBtn = styled(StyledLeftBtn)`
    right: 0;
`;

const Carousel = ({ children }: CarouselProps) => {
    const [ currentSlide, setCurrentSlide ] = React.useState(0);
    
    const activeSlide = children.map((slide, index) => (
        <>
            <SCarouselSlide active={ currentSlide === index } key={ index }>
                { slide }
            </SCarouselSlide>
        </>
    ));
    
    return (
        <CarouselWrapper>
            <StyledLeftBtn
                onClick={ () => {
                    setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
                } }
            >
                <Image src={ leftArrow } height='35px'/>
            </StyledLeftBtn>
            <StyledCarouselSlides currentSlide={ currentSlide }>
                { activeSlide }
            </StyledCarouselSlides>
            <StyledRightBtn
                onClick={ () => {
                    setCurrentSlide((currentSlide + 1) % activeSlide.length);
                } }
            >
                <Image src={ rightArrow } height='35px'/>
            </StyledRightBtn>
        </CarouselWrapper>
    );
};

export default Carousel;
