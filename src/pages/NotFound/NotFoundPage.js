import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            This is not Found page
            <Link to="/home">Home</Link>
        </div>
    );
};

export default NotFoundPage;