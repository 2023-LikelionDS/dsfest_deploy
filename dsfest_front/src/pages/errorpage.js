import React from 'react';
import '../css/error.css';

function errorPage() {
    return (
        <div className="errorBody">
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}

export default errorPage;
