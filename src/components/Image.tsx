import React from 'react';
import styled from "styled-components";

interface ImageProps {
    src: string,
    alt: string,
    width?: string,
    height?: string
}

const StyledImg = styled.img<React.CSSProperties>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    object-fit: contain;
`;

const Image: React.FC<ImageProps> = (props) => {
    return (
        <StyledImg {...props}/>
    );
};

export default Image;
