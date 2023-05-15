import poster from '../../img/take1.png';
import styled from 'styled-components';
import { useState } from 'react';

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    gap: 10px;
    width: 250px;
    font-family: 'PretendardBold';
`;
const Num = styled.div`
    background-color: gold;
    color: #fff;
    font-weight: 700;
    border-radius: 15%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'PretendardBold';
`;
const TitleText = styled.p`
    font-weight: 700;
    color: #4f4f4f;
    font-size: 90%;
    font-family: 'PretendardBold';
`;
const Poster = styled.img`
    width: 250px;
    margin: 20px;
    height: 350px;
`;
const Bar = styled.div`
    width: 72px;
    height: 1.5px;
    background-color: #ddd;
`;
const TimeTitle = styled.div`
    margin-top: 40px;
    width: 230px;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    font-weight: 800;
    font-family: 'PretendardBold';
    color: #a6a6a6;
    letter-spacing: -0.5px;
`;
const Table = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 230px;
    flex-wrap: wrap;
    letter-spacing: -1px;
`;
const Card = styled.div`
    width: 110px;
    height: 100px;
    border: 1px solid #cecfcf;
    border-radius: 5px;
    box-shadow: 0 0 2px #cecfcf;
    position: relative;
    box-sizing: border-box;
    padding-top: 20px;
    text-align: center;
    font-family: 'PretendardBold';
    background-color: #fff;
    cursor: pointer;
`;
const Caption = styled.div`
    width: 100%;
    height: 30px;
    background-color: #e8e8e7;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 11px;
    font-weight: 800;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #545656;
`;
function Take1() {
    const [isOn, setisOn] = useState(false);
    const [isOnMovie, setisOnMovie] = useState(false);
    const toggleHandler = () => {
        // isOn의 상태를 변경하는 메소드를 구현
        setisOn(!isOn);
    };
    const toggleHandler2 = () => {
        // isOn의 상태를 변경하는 메소드를 구현
        setisOnMovie(!isOnMovie);
    };
    return (
        <>
            <Title>
                <Num>1</Num>
                <TitleText>TAKE1 : 진실은 언제나 하나!</TitleText>
            </Title>

            <Poster src={poster} />
            <Title>
                <Bar />
                <TitleText>상영 시간표</TitleText>
                <Bar />
            </Title>
            <TimeTitle>
                <p style={{ color: '#db9112' }}>영근터 419관</p>
                <p
                    style={{
                        fontFamily: 'Pretendard',
                        fontWeight: '600',
                        fontSize: '7px',
                    }}
                >
                    스탠딩 | 좌석
                </p>
            </TimeTitle>
            <Table>
                <Card onClick={toggleHandler2}>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontWeight: '600',
                            fontSize: '20px',
                            color: '#545656',
                        }}
                    >
                        15:00
                    </p>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            color: 'rgba(159, 162, 177, 0.8)',
                        }}
                    >
                        ~17:00
                    </p>
                    {isOnMovie ? (
                        <Caption>써니</Caption>
                    ) : (
                        <Caption>영화 상영</Caption>
                    )}
                </Card>
                <Card>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontWeight: '600',
                            fontSize: '20px',
                            color: '#545656',
                        }}
                    >
                        18:00
                    </p>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            color: 'rgba(159, 162, 177, 0.8)',
                        }}
                    >
                        ~20:00
                    </p>
                    <Caption>Chap.1 The TAKE</Caption>
                </Card>
                <Card onClick={toggleHandler}>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontSize: '20px',
                            fontWeight: '600',
                            color: '#545656',
                        }}
                    >
                        20:00
                    </p>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            color: 'rgba(159, 162, 177, 0.8)',
                        }}
                    >
                        ~21:00
                    </p>
                    {isOn ? (
                        <Caption>미란이</Caption>
                    ) : (
                        <Caption>DAY1 Artist</Caption>
                    )}
                </Card>
            </Table>
            <TimeTitle>
                <p
                    style={{
                        fontFamily: 'Wix Madefor Display',
                        color: '#db9112',
                    }}
                >
                    Pop! Zone
                </p>
                <p
                    style={{
                        fontFamily: 'Pretendard',
                        fontWeight: '600',
                        fontSize: '7px',
                    }}
                >
                    4D | 더빙
                </p>
            </TimeTitle>
            <Table>
                <Card>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontSize: '20px',
                            fontWeight: '600',
                            color: '#545656',
                        }}
                    >
                        11:00
                    </p>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            color: 'rgba(159, 162, 177, 0.8)',
                        }}
                    >
                        ~15:00
                    </p>
                    <Caption>낮 수익사업</Caption>
                </Card>
                <Card>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontSize: '20px',
                            fontWeight: '600',
                            color: '#545656',
                        }}
                    >
                        16:00
                    </p>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            color: 'rgba(159, 162, 177, 0.8)',
                        }}
                    >
                        ~22:00
                    </p>
                    <Caption>밤 수익사업</Caption>
                </Card>
            </Table>
        </>
    );
}
export default Take1;
