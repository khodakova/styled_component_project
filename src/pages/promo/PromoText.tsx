import React from 'react';
import styled from "styled-components";
import { GlobalThemeProps } from "../../styles/Global";

const StyledPromoText = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    color: ${ ({ theme }: GlobalThemeProps) => theme.text };
    max-width: 791px;
    @media (max-width: 576px) {
        font-size: 13px;
    }
`;

const PromoText = () => {
    return (
        <StyledPromoText>
            Мемасики стали неотъемлемой частью нашей жизни. Посмотрите налево - и Вы увидите свинку Пеппу, посмотрите направо - и увидите, как Роберт Дауни младший закатывает глаза. Мемы - это не просто про досуг и веселье.
            Мемы - это про образ жизни. Мемы - это способ показать себя миру.
            Путь выбора правильного мема тернист и сложен. Сколько мемасиков нужно пересмотреть, чтобы найти тот самый? Свой единственный и неповторимый мем.
            Но только зачем искать?
            Создайте свой мемасик сами!
        </StyledPromoText>
    );
};

export default PromoText;
