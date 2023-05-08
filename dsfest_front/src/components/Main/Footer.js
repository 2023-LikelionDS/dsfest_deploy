import React from 'react';
import '../../css/Footer.css';
import chapterLikelion from '../../img/chapterxlikelion_ic.svg';

function Footer() {
    return (
        <div className="footerContainer">
            <React.Fragment>
                <div className="title">
                    2023 덕성여자대학교 근화제 &lt;TAKE:&gt; 웹페이지
                    <img src={chapterLikelion} />
                </div>
            </React.Fragment>

            <div className="Container">
                <div className="liContainer">
                    <div className="header">기획</div>
                    <ul className="listDetail">
                        <li>김채이</li>
                        <li>허은</li>
                    </ul>
                </div>

                <div className="liContainer">
                    <div className="header">디자인</div>
                    <ul className="list">
                        <li className="header2">UI/UX</li>
                        <ul className="listDetail2">
                            <li>민유빈</li>
                            <li>최유나</li>
                        </ul>
                    </ul>
                    <ul className="list">
                        <li className="header2">포스터</li>

                        <li>나윤서</li>
                    </ul>
                </div>

                <div className="liContainer">
                    <div className="header">개발</div>
                    <ul className="list">
                        <li className="header2">
                            멋쟁이사자처럼 덕성여자대학교
                        </li>

                        <li className="header2">Front-end</li>

                        <ul className="listDetail">
                            <li>권희원</li>
                            <li>김채현</li>
                            <li>노하림</li>
                            <li>민유빈</li>
                        </ul>

                        <li className="header2">Back-end</li>

                        <ul className="listDetail">
                            <li>김나리</li>
                            <li>이서진</li>
                            <li>장소영</li>
                            <li>한진경</li>
                            <li>허 은</li>
                        </ul>
                    </ul>
                </div>

                <div className="liContainer">
                    <div className="header">주관</div>
                    <ul className="list">
                        <li className="header2">
                            덕성여자대학교 제39대 총학생회 챕터(Chapter)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
