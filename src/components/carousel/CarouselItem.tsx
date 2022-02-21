import React from 'react';
import styled from "styled-components";
import { Flex } from "../styles/Flex.styled";
import { Image } from "../styles/Image.styled";
import img1 from '../../assets/cover.jpg';

const CarouselItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 10px;
`;

const CarouselItem = () => {
    return (
        <Flex alignItems='center' height='600px'>
            <Image src={img1}/>
        </Flex>
    );
};

export default CarouselItem;
