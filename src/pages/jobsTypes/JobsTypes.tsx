import React from 'react';
import styled from "styled-components";
import { Title } from "../../components/styles/Title.styled";

const StyledJobsTypes = styled.section`
    height: 2074px;
`;

const JobsTypes = () => {
    return (
        <StyledJobsTypes>
            <Title>
                Виды мемчиков
            </Title>
        </StyledJobsTypes>
    );
};

export default JobsTypes;
