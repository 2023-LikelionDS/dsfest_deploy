import React, {useState} from 'react'
import '../../css/ReviewPage.css';
import reviewdata from "../../data/reviewsData.json";
// import Pagination from 'react-js-pagination';

function ReviewList() {
  // const [review, setReview] = useState=('');
  const colorList = ["#ECDFEC", "#D7BFD8", "#C5A8CB", "#A98BB8"];

  // const [page, setPage] = useState(1);

  // const handlePageChange = (page) => {
  //   setPage(page);
  // };

  const setBackgroundColor = (el) => {
    if(el % 4 === 0) {
      return colorList[0];
    }
    else if(el % 4 === 1) {
      return colorList[1];
    }
    else if(el % 4 === 2) {
      return colorList[2];
    }
    else{
      return colorList[3];
    }
  }

  return (
    <div className="reviewList">
        <div className="account-review">{reviewdata.length}개의 리뷰</div>

        <div className="reviews-wrap">
          {reviewdata.map((el, index) => 
            <div className="review-content" key={index} style={{width:"48%", border:"none",
            backgroundColor: setBackgroundColor(index),
            }}>
              {el.content}
            </div>
          )}
        </div>

        {/* <div className="reviewPagination">
          {reviewdata.length < 1 || reviewdata === undefined? <div /> :
            <Pagination
              activePage={page}
              itemsCountPerPage={8}
              totalItemsCount={reviewdata && reviewdata.length}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
            />
          }
        </div> */}
    </div>
  )
}

export default ReviewList
