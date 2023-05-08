import poster from '../../img/take1.png';
import styled from 'styled-components';

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    gap: 10px;
    width: 250px;
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
`;
const TitleText = styled.p`
    font-weight: 700;
    color: #444;
    font-size: 95%;
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
`;
const Table = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
const Card = styled.div`
    width: 100px;
    height: 80px;
    border: solid 2px rbg(159, 162, 177);
    border-radius: 10px;
    box-shadow: 0 0px 10px rgba(159, 162, 177, 0.8);
    position: relative;
    box-sizing: border-box;
    padding-top: 10px;
    text-align: center;
`;
const Caption = styled.div`
    width: 100%;
    height: 25px;
    background-color: rgba(159, 162, 177, 0.2);
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 10px;
    font-weight: 800;
    text-align: center;
    line-height: 25px;
`;
function Take1() {
    return (
        <>
            <Title>
                <Num>1</Num>
                <TitleText>TAKE1:진실은 언제나 하나!</TitleText>
            </Title>

            <Poster src={poster} />
            <Title>
                <Bar />
                <TitleText>상영 시간표</TitleText>
                <Bar />
            </Title>
            <TimeTitle>
                <p style={{ color: 'goldenrod' }}>영근터 419관</p>
                <p>스탠딩|좌석</p>
            </TimeTitle>
            <Table>
                <Card>
                    <p style={{ fontWeight: '900' }}>18:00</p>
                    <p style={{ color: 'rgba(159, 162, 177, 0.8)' }}>~20:00</p>
                    <Caption>Chap1. The TAKE</Caption>
                </Card>
                <Card>
                    <p style={{ fontWeight: '900' }}>20:00</p>
                    <p style={{ color: 'rgba(159, 162, 177, 0.8)' }}>~21:00</p>
                    <Caption>DAY1. Artist</Caption>
                </Card>
            </Table>
            <TimeTitle>
                <p style={{ color: 'goldenrod' }}>Pop! Zone</p>
                <p>4D|더빙</p>
            </TimeTitle>
            <Table>
                <Card>
                    <p style={{ fontWeight: '900' }}>11:00</p>
                    <p style={{ color: 'rgba(159, 162, 177, 0.8)' }}>~15:00</p>
                    <Caption>낮 수익사업</Caption>
                </Card>
                <Card>
                    <p style={{ fontWeight: '900' }}>19:00</p>
                    <p style={{ color: 'rgba(159, 162, 177, 0.8)' }}>~22:00</p>
                    <Caption>밤 수익사업</Caption>
                </Card>
            </Table>
        </>
    );
}
export default Take1;
