import React from 'react';
import '../css/ReviewPage.css';
import ReviewList from '../components/Review/ReviewList';
import back from "../img/back_white.png";
import { useNavigate } from "react-router-dom";

function ReviewPage() {
  const navigate = useNavigate();

  const navigateToPurchase = () => {
    navigate("/write");
  };

  return (
    <div className="review">
      <div className="guestbook">
        <div className="write-top">
            <img src={back} alt="뒤로" width="20px" height="20px" className="back-arrow-none" onClick={navigateToPurchase}/>
            <div className="write-title">상영작 후기</div>
        </div>
        <div className="guestbook-top-wrap">
          <div className="top-text">즐거운 관람 되셨나요?<br/>덕우의 소감을 공유해 주세요!</div>
          <button className="go-btn" onClick={navigateToPurchase}>
          {'<'}TAKE:{'>'}리뷰 작성하러 가기 
            <img className="white-arrow" src={back} alt="arrow" width="15px" height="14px"/> 
          </button>
        </div>
      </div>

      <ReviewList />

    </div>
  )
}

export default ReviewPage
