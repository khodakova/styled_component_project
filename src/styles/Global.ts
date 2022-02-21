import { createGlobalStyle, withTheme } from "styled-components";
import { ThemeProps } from "./themes";

export type GlobalThemeProps = {
    theme: ThemeProps;
};

const globalStyles = createGlobalStyle`
  :root {
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;
    --dark-header: #ffffff;
    
    --light-background: #ffffff;
    --light-text: #333333;
    --light-header: #ffffff;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Montseraat;
    width: 100%;
    background-color: ${ ({ theme }: GlobalThemeProps) => theme.background };
    transition: background-color 0.50s linear;
  }
  
  header {
    background-color: ${({theme}: GlobalThemeProps) => theme.header};
  }
  
  p {
    font-size: 16px;
    color: ${ ({ theme }: GlobalThemeProps) => theme.text };
    margin: 0;
  }
  
`;

export default withTheme(globalStyles);
