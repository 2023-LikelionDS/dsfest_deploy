import React from 'react';
import '../css/ReviewPage.css';
import ReviewList from '../components/Review/ReviewList';
import back from "../img/back_white.png";

function ReviewPage() {
  
  const onClick = () => {
    window.location.href = '/write';
  };

  return (
    <div className="review">
      <div className="write-title">상영작 후기</div>
      <div className="guestbook">
        <div className="guestbook-top-wrap">
          <div className="top-text">즐거운 관람 되셨나요?<br/>덕우의 소감을 공유해 주세요!</div>
          <button className="go-btn" onClick={onClick}>
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
