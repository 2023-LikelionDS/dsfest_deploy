import poster from '../../img/take3.png';
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
    background-color: skyblue;
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
    color: #444;
    font-size: 90%;
    font-family: 'PretendardBold';
`;
const Poster = styled.img`
    width: 250px;
    margin: 20px;
`;
const Bar = styled.div`
    width: 72px;
    height: 1px;
    background-color: #ddd;
`;
const TimeTitle = styled.div`
    margin-top: 40px;
    width: 210px;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    font-weight: 800;
    font-family: 'PretendardBold';
`;
const Table = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 230px;
    flex-wrap: wrap;
`;
const Card = styled.div`
    width: 110px;
    height: 100px;
    border: 1px solid rgba(188, 188, 188, 0.8);
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(159, 162, 177, 0.8);
    position: relative;
    box-sizing: border-box;
    padding-top: 20px;
    text-align: center;
    font-family: 'PretendardBold';
    background-color: #fff;
`;
const Caption = styled.div`
    width: 100%;
    height: 30px;
    background-color: rgba(159, 162, 177, 0.2);
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
`;
function Take3() {
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
        // isOn의 상태를 변경하는 메소드를 구현
        setisOn(!isOn);
    };
    return (
        <>
            <Title>
                <Num>3</Num>
                <TitleText>TAKE3 : 우리 다시 다 만나는 거다</TitleText>
            </Title>

            <Poster src={poster} />
            <Title>
                <Bar />
                <TitleText>상영 시간표</TitleText>
                <Bar />
            </Title>
            <TimeTitle>
                <p style={{ color: '#0c71ab' }}>영근터 419관</p>
                <p>스탠딩|좌석</p>
            </TimeTitle>
            <Table>
                <Card>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontWeight: '600',
                            fontSize: '20px',
                            color: '#403f3c',
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
                    <Caption>Chap.3 우리가 써 내려갈 덕성의 한 페이지</Caption>
                </Card>
                <Card onClick={toggleHandler}>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontWeight: '600',
                            fontSize: '20px',
                            color: '#403f3c',
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
                        <Caption>다비치</Caption>
                    ) : (
                        <Caption>DAY3 Artist</Caption>
                    )}
                </Card>
                <Card>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '30px',
                            color: '#403f3c',
                        }}
                    >
                        21:00
                    </p>
                    <Caption>불꽃놀이</Caption>
                </Card>
            </Table>
            <TimeTitle>
                <p style={{ color: '#0c71ab' }}>Pop! Zone</p>
                <p>4D|더빙</p>
            </TimeTitle>
            <Table>
                <Card>
                    <p
                        style={{
                            fontFamily: 'Wix Madefor Display',
                            fontWeight: '600',
                            fontSize: '20px',
                            color: '#403f3c',
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
                            color: '#403f3c',
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
export default Take3;
