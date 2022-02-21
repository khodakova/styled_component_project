import React, { useState } from 'react';
import styled from "styled-components";
import { Image } from "../styles/Image.styled";
import arrowLeft from "../../assets/carousel/left-arrow.svg";
import arrowRight from "../../assets/carousel/right-arrow.svg";
import {
    StyledButtonNext,
    StyledButtonPrev,
    StyledGallery,
    StyledSmallCarousel,
    StyledUl
} from "./SmallCarousel.styled";

interface SmallCarouselProps {
    items: any[]
}

const SmallCarousel: React.FC<SmallCarouselProps> = (props) => {
    const [ position, setPosition ] = useState(0);
    const width = 395;
    const count = 3;
    
    const toLeft = () => {
        // const newPosition = position + width * count + 27 * (count - 1);
        const newPosition = position + width + 27;
        setPosition(Math.min(newPosition, 0));
    };
    
    const toRight = () => {
        // const newPosition = position - width * count - 27 * (count - 1);
        const newPosition = position - width - 27;
        // setPosition(newPosition);
        setPosition(Math.max(newPosition, -(width + 27) * (props.items.length - count)));
    };
    
    return (
        <StyledSmallCarousel>
            <StyledGallery>
                <StyledButtonPrev className="prev" onClick={ toLeft }>
                    <Image src={ arrowLeft } height='50px'/>
                </StyledButtonPrev>
                <StyledUl marginLeft={ `${ position }px` }>
                    {
                        props.items.map((item, index) =>
                            <li key={ index } id={ index.toString() }>
                                <Image src={ item.src } width='395px' objectFit='cover' borderRadius='15px'/>
                            </li>
                        )
                    }
                </StyledUl>
                <StyledButtonNext className="next" onClick={ toRight }>
                    <Image src={ arrowRight } height='50px'/>
                </StyledButtonNext>
            </StyledGallery>
        </StyledSmallCarousel>
    );
};

export default SmallCarousel;
