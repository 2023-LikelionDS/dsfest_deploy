import React, {useState} from 'react';
import axios from 'axios';
import '../css/WriteReviewPage.css'
import { useNavigate } from "react-router-dom";
import back from "../img/back_purple.png";

function WriteReviewPage() {
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    const navigateToPurchase = () => {
        navigate('/review');
    };

    const handleSubmit = (e) => {
        if (!content) {
            alert('내용을 입력해주세요.');
            e.preventDefault();
            return;
        }

        axios
            .post('http://localhost:8000/review/', {content})
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
            if (error.response && error.response.status === 422) {
                alert(
                    '욕설 및 성희롱 관련 단어 필터링 되고있습니다. 바르고 고운말 부탁드립니다'
                );
            }
            console.log(error.response.data);
        });

        e.preventDefault();
        navigate("/review");
    }

    return (
        <div className="writeReview">
            <div className="write-title">상영작 후기</div>
            <div className="write-top">
                <img
                    src={back}
                    alt="뒤로"
                    width="20px"
                    height="20px"
                    className="back-arrow"
                    onClick={navigateToPurchase}
                />
            </div>

            <div className="write-bottom">
                <form className="review-form" onSubmit={handleSubmit}>
                    <textarea
                        type="text"
                        placeholder="<TAKE:> 후기를 남겨 주세요!"
                        name="content"
                        className="review-content"
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button
                        className="review-post-button"
                        type="submit"
                    >
                        작성 완료
                    </button>
                </form>
            </div>
        </div>
    );
}

export default WriteReviewPage;
