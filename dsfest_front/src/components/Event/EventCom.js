import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/EventPage.css';

function EventCom() {
    const [nangmans, setNangmans] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/event/')
            .then((response) => {
                setNangmans(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    return (
        <div className="sectionbody3">
            <div className="detailsection">
                <div className="subtitle1">덕우들의 낭만</div>
            </div>
            <div className="commentsection">
                {nangmans.map((event) => (
                    <div nakey={event.id}>
                        <div className="writeinfo">
                            <div className="writername">{event.author}</div>
                            <div className="writedate">{event.date}</div>
                        </div>
                        <div className="comment">{event.content}</div>
                        <div className="line3"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventCom;
