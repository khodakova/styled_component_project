import styled from "styled-components";
import { GlobalThemeProps } from "../../styles/Global";

export const Title = styled.h1`
    font-weight: 600;
    font-size: 36px;
    color: ${ ({ theme }: GlobalThemeProps) => theme.text };
    text-align: center;
`;
