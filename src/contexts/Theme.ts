import { createContext, useContext } from 'react';

export type ThemeType = {
    theme: string,
    themeToggler: () => void
}

export const ThemeContext = createContext<ThemeType>({
    theme: 'light',
    themeToggler: () => {}
});

export const useThemeContext = () => useContext(ThemeContext);
