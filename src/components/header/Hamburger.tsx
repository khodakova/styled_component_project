import React from 'react';
import styled from "styled-components";
import { GlobalThemeProps } from "../../styles/Global";

const StyledHamburger = styled.div`
    height: 18px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
    &:hover {
        span {
            background: ${ ({ theme }: GlobalThemeProps) => theme.text };
        }
    }
    @media (max-width: 1000px) {
        display: flex;
    }
`;

const StyledSpan = styled.span`
    display: block;
    width: 27px;
    height: 4px;
    background: ${ ({ theme }: GlobalThemeProps) => theme.text };
    border-radius: 10px;
`;

const StyledSpanShort = styled(StyledSpan)`
    width: 16px;
`;


const Hamburger = () => {
    return (
        <StyledHamburger>
            <StyledSpan/>
            <StyledSpan/>
            <StyledSpanShort/>
        </StyledHamburger>
    );
};

export default Hamburger;
