import styled from "styled-components";

export const Button = styled.button`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    color: #f38435;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 24px;
    transition: 0.2s;
    background: rgba(0,0,0,0);
    border: 1px solid #f3621c;
    cursor: pointer;
    &:hover{
        background: #f3621c;
        transition: all .4s;
        color: white;
    }
`;
