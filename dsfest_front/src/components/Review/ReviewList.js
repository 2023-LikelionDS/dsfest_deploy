import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../../css/ReviewPage.css';
import Pagination from 'react-js-pagination';

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const colorList = ["#ECDFEC", "#D7BFD8", "#C5A8CB", "#A98BB8"];

  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const items = reviews.slice((activePage - 1) * 8, (activePage - 1) * 8 + 8);

  useEffect(() => {
    axios
        .get('http://127.0.0.1:8000/review/')
        .then((response) => {
          setReviews(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}, []);

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
        <div className="account-review">{reviews.length}개의 리뷰</div>

        <div className="reviews-wrap">
          {items.map((el, index) => 
            <div className="review-content" key={index} style={{width:"145px", border:"none", 
            backgroundColor: setBackgroundColor(index),
            }}>
              {el.content}
            </div>
          )}
        </div>

        {reviews.length === 0 ? (
          <Pagination
              activePage={activePage}
              itemsCountPerPage={8}
              totalItemsCount={reviews.length + 1}
              pageRangeDisplayed={5}
              prevPageText={'‹'}
              nextPageText={'›'}
              onChange={handlePageChange}
          />
      ) : (
          <Pagination
              activePage={activePage}
              itemsCountPerPage={8}
              totalItemsCount={reviews.length}
              pageRangeDisplayed={5}
              prevPageText={'‹'}
              nextPageText={'›'}
              onChange={handlePageChange}
          />
      )}
    </div>
  )
}

export default ReviewList
