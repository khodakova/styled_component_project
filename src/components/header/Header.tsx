import React from 'react';
import TogglerButton from "../TogglerButton/TogglerButton";
import { useThemeContext } from "../../contexts/Theme";
import Logo from "../Logo";
import HeaderMenu from "./HeaderMenu";
import styled from "styled-components";
import { GlobalThemeProps } from "../../styles/Global";
import Hamburger from "./Hamburger";

const StyledHeader = styled.header`
    padding: 0 100px;
    height: 80px;
    background-color: ${ ({ theme }: GlobalThemeProps) => theme.background };
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        padding: 0 19px;
    }
`;

const Header = () => {
    const { themeToggler } = useThemeContext();
    return (
        <StyledHeader>
            <Logo/>
            <HeaderMenu/>
            <TogglerButton themeToggler={ themeToggler }/>
            <Hamburger/>
        </StyledHeader>
    );
};

export default Header;
