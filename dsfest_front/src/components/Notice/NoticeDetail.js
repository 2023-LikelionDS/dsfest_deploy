import React, { useEffect, useRef, useState } from 'react';
import '../../css/NoticePage.css';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import default_img from '../../img/default_image.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_IMG_URL = 'http://localhost:8000';

const NoticeImg = styled.img`
    width: 310px;
    height: 310px;
    border-radius: 10px;

    align-self: center;
`;

function NoticeDetail() {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    const [currentSlide, setCurrentSlide] = useState(1);

    const onClickToList = () => {
        window.location.href = '/notice';
    };

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/blogs/${id}`)
            .then((response) => {
                setDetail(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    const bodyRef = useRef(null);

    useEffect(() => {
        if (bodyRef.current) {
            if (
                (detail.body?.replace(/<br\s*\/?>/gm, '\n') || '').length <= 200
            ) {
                bodyRef.current.style.marginTop = '150px';
            } else {
                bodyRef.current.style.marginTop = '100px';
            }
        } else {
            console.log('bodyRef.current is null');
        }
    }, [detail, bodyRef]);

    const settings = {
        className: 'slickP',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => {
            setCurrentSlide(current + 1);
        },
    };

    return (
        <div className="insertBody2">
            <div className="detailCotainer">
                <div className="notice">
                    {' '}
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="faChevronLeft"
                        onClick={onClickToList}
                    />
                    공지사항
                </div>
                <Slider {...settings}>
                    {detail.images && detail.images.length > 0 ? (
                        detail.images.map((review) => (
                            <NoticeImg
                                src={`${DEFAULT_IMG_URL}${review.image}`}
                                key={review.id}
                            />
                        ))
                    ) : (
                        <NoticeImg src={default_img} />
                    )}
                </Slider>

                {detail.images && detail.images.length > 0 ? (
                    <div className="slider-pagination">
                        &nbsp;{currentSlide} / {detail.images.length || 1}&nbsp;
                    </div>
                ) : (
                    <div className="slider-pagination">&nbsp;1 / 1&nbsp;</div>
                )}

                <div className="detailC1">
                    <div>
                        <div className="detailTitle">{detail.title}</div>

                        {detail && detail.created && (
                            <div className="noticeDate2">
                                {new Date(detail.created)
                                    .toLocaleDateString()
                                    .replace(/\//g, '.')}
                            </div>
                        )}
                    </div>
                    {detail.pinned_order !== 0 || '' ? (
                        <div className="star">중요</div>
                    ) : (
                        <div className="noStar"></div>
                    )}
                </div>
                <div className="detailContent">{detail.body}</div>
                <div className="goList" onClick={onClickToList} ref={bodyRef}>
                    목록으로
                </div>
            </div>
        </div>
    );
}

export default NoticeDetail;
