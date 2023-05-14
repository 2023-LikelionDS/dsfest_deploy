import poster from '../../img/take2.png';
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
    background-color: lightcoral;
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
`;
const Table = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 230px;
    gap: 10px;
    flex-wrap: wrap;
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
    font-size: 13px;
`;
const Caption = styled.div`
    width: 100%;
    height: 30px;
    background-color: #e8e8e7;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 5px;
    font-weight: 800;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #545656;
`;
function Take2() {
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
        // isOn의 상태를 변경하는 메소드를 구현
        setisOn(!isOn);
    };
    return (
        <>
            <Title>
                <Num>2</Num>
                <TitleText>TAKE2 : 무한한 공간 저 너머로</TitleText>
            </Title>

            <Poster src={poster} />
            <Title>
                <Bar />
                <TitleText>상영 시간표</TitleText>
                <Bar />
            </Title>
            <TimeTitle>
                <p style={{ color: 'lightcoral' }}>영근터 419관</p>
                <p>스탠딩|좌석</p>
            </TimeTitle>
            <Table>
                <Card>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontWeight: '600',
                            fontSize: '20px',
                            color: '#545656',
                        }}
                    >
                        18:30
                    </p>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            color: 'rgba(159, 162, 177, 0.8)',
                        }}
                    >
                        ~20:30
                    </p>
                    <Caption>제40회 운현가요제</Caption>
                </Card>
                <Card onClick={toggleHandler}>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontWeight: '600',
                            fontSize: '20px',
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
                        ~21:30
                    </p>
                    {isOn ? (
                        <Caption>하현상</Caption>
                    ) : (
                        <Caption>DAY2 Artist</Caption>
                    )}
                </Card>
            </Table>
            <TimeTitle>
                <p style={{ color: 'lightcoral' }}>Pop! Zone</p>
                <p>4D|더빙</p>
            </TimeTitle>
            <Table>
                <Card>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontWeight: '600',
                            fontSize: '20px',
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
                            fontWeight: '600',
                            fontSize: '20px',
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
export default Take2;
