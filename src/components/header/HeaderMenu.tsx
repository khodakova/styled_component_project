import React from 'react';
import { menuItems } from "../../menuItems";
import styled from "styled-components";
import { GlobalThemeProps } from "../../styles/Global";

const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 581px;
    @media (max-width: 1000px) {
        display: none;
    }
    @media (max-width: 768px) {
        width: 100%;
        max-width: 470px;
    }
`;

const StyledMenuItem = styled.a`
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: ${ ({ theme }: GlobalThemeProps) => theme.text };
    cursor: pointer;
`;

const HeaderMenu = () => {
    return (
        <StyledMenu>
            {
                menuItems.map((item, idx) =>
                    <StyledMenuItem key={idx}>
                        { item }
                    </StyledMenuItem>
                )
            }
        </StyledMenu>
    );
};

export default HeaderMenu;
