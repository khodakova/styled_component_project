import React from 'react';
import GlobalStyles from "./styles/Global";
import Header from "./components/header/Header";
import useThemeMode from "./hooks/useThemeMode";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import { ThemeContext } from "./contexts/Theme";
import { ModalContext } from "./contexts/ModalContext";
import Promo from "./pages/promo/Promo";
import Portfolio from "./pages/portfolio/Portfolio";
import Cats from "./pages/cats/Cats";
import useModal from "./hooks/useModal";

function App() {
    const { theme, themeToggler } = useThemeMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    let { modal, handleModal, modalContent, handleClose, handleChangeContent, onKeydown } = useModal();
    
    return (
        <ThemeContext.Provider value={ { theme, themeToggler } }>
            <ThemeProvider theme={ themeMode }>
                <ModalContext.Provider value={ {
                    modal, handleModal, modalContent, handleClose, handleChangeContent, onKeydown
                } }>
                    <GlobalStyles/>
                    <Header/>
                    <Promo/>
                    <Portfolio/>
                    <Cats/>
                </ModalContext.Provider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
