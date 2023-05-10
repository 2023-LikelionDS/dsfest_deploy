import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Schedule/Menu';
import '../css/Schedule.css';

const Title = styled.div`
    color: #64446d;
    font-size: 20px;
    font-weight: 700;
    margin: 9.5px 0px 34.5px 0px;
    font-family: 'PretendardBold';
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
