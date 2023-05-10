import React from 'react';

import '../css/Main.css';

function Main() {
    return (
        <div className="mainBody">
            <div className='main-btn-wrap'>
                <div className="main-notice">
                    <div className="main-title">
                        공지사항
                    </div>
                    <div className="main-content">
                        #총학생회_챕갈피
                    </div>
                </div>
                <div className='main-timetable'>
                    <div className="main-title">
                        상영 시간표
                    </div>
                    <div className="main-content">
                        #총학생회_챕갈피
                    </div>
                </div>
                <div className="main-review">
                    <div className="main-title">
                        상영작 후기
                    </div>
                    <div className="main-content">
                        #총학생회_챕갈피
                    </div>
                </div>
                <div className="main-event">
                    <div className="main-title">
                        낭만에 대하여
                    </div>
                    <div className="main-content">
                        #총학생회_챕갈피
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
