import React, { useState } from 'react';
import axios from 'axios';
import '../../css/EventPage.css';

function EventForm() {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        if (!author || !content) {
            alert('내용을 입력해주세요.');
            e.preventDefault();
            return;
        }

        const newNangman = { author, content };

        axios
            .post('http://localhost:8000/event/', newNangman)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                if (error.response && error.response.status === 422) {
                    alert(
                        '욕설 및 성희롱 관련 단어 필터링 되고있습니다. 바르고 고운말 부탁드립니다.'
                    );
                }
                console.log(error.response.data);
            });

        // 입력 완료 후 초기화
        setAuthor('');
        setContent('');
    };

    return (
        <div className="sectionbody2">
            <div className="detailsection">
                <div className="subtitle1">
                    <p>여러분의 낭만은</p> <p>무엇인가요?</p>
                </div>
                <div className="detailtext1">
                    <p>이 게시글의 댓글을 통해 </p>
                    <p>각자의 낭만을 나누어 주세요!</p>
                    <p>오늘의 낭만도, 사소한 낭만도, 꿈같은 낭만도</p>
                    <p>모두 좋습니다. 여러분의 낭만을 들려주세요.</p>
                    <br />
                    <div className="detailtext2">
                        <p>
                            * 총학생회장단이 생각하는 낭만은 중앙본부에서
                            확인하실 &nbsp;수 있습니다! ’낭만’에 대하여 이벤트도
                            진행하고 있으니
                        </p>
                        <p>&nbsp;많은 관심과 참여 부탁드립니다.</p>
                    </div>
                </div>
            </div>
            <div className="formsection">
                <form className="form_inner" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="form_writer"
                        placeholder="이름"
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="insert"
                        placeholder="나에게 낭만이란?"
                    />
                    <button className="submitbtn" type="submit">
                        낭만 작성 완료
                    </button>
                </form>
                <p>*댓글은 수정, 삭제가 불가합니다.</p>
            </div>
        </div>
    );
}

export default EventForm;
