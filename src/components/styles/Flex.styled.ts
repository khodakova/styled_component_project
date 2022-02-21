import styled from "styled-components";

export const Flex = styled.div<React.CSSProperties>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'stretch'};
    align-items: ${props => props.alignItems || 'stretch'};
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding};
    position: relative;
    max-width: ${props => props.maxWidth || '100%'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
`;
