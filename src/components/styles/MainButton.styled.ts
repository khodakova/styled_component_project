import styled from "styled-components";

export const MainButton = styled.button`
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
    overflow: hidden;
    &:hover {
        transform: scale(.98);
        color: #fff;
        background: #f37e24;
        box-shadow: 0 0 10px #f37518, 0 0 40px #f36c22, 0 0 80px #f36935;
        transition-delay: 1s;
        span:nth-child(1){
            left: 100%;
            transition: 1s;
        }
        span:nth-child(3){
            right: 100%;
            transition: 1s;
            transition-delay: 0.5s;
        }
        span:nth-child(2){
            top: 100%;
            transition: 1s;
            transition-delay: 0.25s;
        }
        span:nth-child(4){
            bottom: 100%;
            transition: 1s;
            transition-delay: 0.75s;
        }
    }
    span {
        position: absolute;
        display: block;
    }
    span:nth-child(1){
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg,transparent,#f36f21);
    }
    span:nth-child(3){
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg,transparent,#f36827);
    }
    span:nth-child(2){
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg,transparent,#f37536);
    }
    span:nth-child(4){
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg,transparent,#f3802a);
    }
`;
