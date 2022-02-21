import React from 'react';
import { HiMoon } from 'react-icons/hi';
import { FaSun } from 'react-icons/fa';
import * as S from './TogglerButton.styled';

interface ThemeTogglerProps {
    themeToggler: () => void;
}

const TogglerButton: React.FC<ThemeTogglerProps> = ({themeToggler}) => {
    return (
        <S.Container>
            <label htmlFor="checkbox" className='switch'>
                <input
                    id="checkbox"
                    type="checkbox"
                    onClick={themeToggler}
                    onChange={() => false}
                    checked={localStorage.getItem('theme') === 'light'}
                />
                <S.Icons className="slider round">
                    {localStorage.getItem('theme') !== 'light' ? (
                        <>
                            <HiMoon style={{ marginLeft: '6.3px', height: '10px' }} />
                        </>
                    ) : (
                        <>
                            <FaSun size={0} style={{ marginLeft: '41px', height: '10px' }} />
                        </>
                    )}
                </S.Icons>
            </label>
        </S.Container>
    );
};

export default TogglerButton;
