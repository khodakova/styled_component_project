export interface ThemeProps {
    background: string;
    text: string;
    header: string
}

export const darkTheme: ThemeProps = {
    background: 'var(--dark-background)',
    text: 'var(--dark-text)',
    header: 'var(--dark-header)'
};

export const lightTheme: ThemeProps = {
    background: 'var(--light-background)',
    text: 'var(--light-text)',
    header: 'var(--light-header)'
};
