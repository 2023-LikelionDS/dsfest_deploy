import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Schedule/Menu';
const Title = styled.h2`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #64446d;
    margin: 10px;
`;

function SchedulePage() {
    return (
        <div className="insertBody">
            <Title>상영 시간표</Title>
            <Menu />
        </div>
    );
}

export default SchedulePage;
