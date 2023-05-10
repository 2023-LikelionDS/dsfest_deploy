import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/EventPage.css';
import Pagination from 'react-js-pagination';

function EventCom() {
    const [nangmans, setNangmans] = useState([]);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        axios
            .get('http://localhost:8000/event/')
            .then((response) => {
                setNangmans(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, [activePage]);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    const items = nangmans.slice((activePage - 1) * 5, activePage * 5);

    return (
        <div className="sectionbody3">
            <div className="detailsection">
                <div className="subtitle1">덕우들의 낭만</div>
            </div>
            <div className="commentsection">
                {items.map((event) => (
                    <div key={event.id}>
                        <div className="writeinfo">
                            <div className="writername">{event.author}</div>
                            <div className="writedate">{event.date}</div>
                        </div>
                        <div className="comment">{event.content}</div>
                        <div className="line3"></div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {nangmans.length === 0 ? (
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={nangmans.length + 1}
                        firstPageText={''}
                        lastPageText={''}
                        prevPageText={'<'}
                        nextPageText={'>'}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                ) : (
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={nangmans.length}
                        firstPageText={''}
                        lastPageText={''}
                        prevPageText={'<'}
                        nextPageText={'>'}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                )}
            </div>
        </div>
    );
}

export default EventCom;
