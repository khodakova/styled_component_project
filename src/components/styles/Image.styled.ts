import styled from "styled-components";

export const Image = styled.img<React.CSSProperties>`
    width: ${ props => props.width || '100%' };
    height: ${ props => props.height || '100%' };
    object-fit: ${ props => props.objectFit || 'contain' };
    border-radius: ${ props => props.borderRadius || 0 };
`;
