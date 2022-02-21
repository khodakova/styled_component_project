import styled from "styled-components";
import { MainButton } from "../styles/MainButton.styled";

export const StyledSmallCarousel = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1326px;
    padding: 10px 40px;
`;

export const StyledGallery = styled.div`
    width: 100%;
    overflow: hidden;
`;

interface StyledUlProps {
    marginLeft?: string
}

export const StyledUl = styled.ul<StyledUlProps>`
    width: 9999px;
    margin: 0;
    padding: 0;
    list-style: none;
    transition: all .25s;
    margin-left: ${props => props.marginLeft || 0};
    li {
        max-width: 395px;
        height: 350px;
        display: inline-block;
        margin-right: 27px;
    }
`;

export const StyledButton = styled(MainButton)`
    position: absolute;
    top: 40%;
    padding: 0;
    background: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, .5);
    display: block;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    &:focus {
        outline: none;
    }
    &:hover {
        background: antiquewhite;
        cursor: pointer;
    }
`;

export const StyledButtonPrev = styled(StyledButton)`
    left: 7px;
`;

export const StyledButtonNext = styled(StyledButton)`
    right: 7px;
`;
