import React from 'react';
import styled from "styled-components";
import img1 from "../../assets/portfolio/1.jpeg";
import img2 from "../../assets/portfolio/2.jpeg";
import img3 from "../../assets/portfolio/3.jpeg";
import img4 from "../../assets/portfolio/4.jpeg";
import { Title } from "../../components/styles/Title.styled";
import { Container } from "../../components/styles/Container.styled";
import CarouselItem from "../../components/carousel/CarouselItem";
import Carousel from "../../components/carousel/Carousel";

const StyledPortfolio = styled.section`
    position: relative;
    height: 860px;
    padding: 90px 0;
    display: flex;
    flex-direction: column;
    background-color: antiquewhite;
    align-items: center;
    overflow: hidden;
`;

const content = [
    {
        id: '1',
        text: 'atata sal;fkj aslkjfdalsdkjf asldkfjasldf',
        name: 'alsfdkj',
        src: img1
    },
    {
        id: '2',
        text: 'atata sal;fkj aslkjfdalsdkjf asldkfjasldf',
        name: 'alsfdkj',
        src: img2
    },
    {
        id: '3',
        text: 'atata sal;fkj aslkjfdalsdkjf asldkfjasldf',
        name: 'alsfdkj',
        src: img3
    },
    {
        id: '4',
        text: 'atata sal;fkj aslkjfdalsdkjf asldkfjasldf',
        name: 'alsfdkj',
        src: img4
    }
];

const Portfolio = () => {

    return (
        <StyledPortfolio>
            <Container>
                <Title>
                    Наши работы
                </Title>
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Container>
        </StyledPortfolio>
    );
};

export default Portfolio;
