import React from 'react';
import { Link } from 'react-router-dom';
import FindServiceBanner from '../../images/image-1.jpg';
const findPageBanner = {
    background: `linear-gradient(rgba(51, 51, 51, 0.678),rgba(17, 17, 17, 0.678)), url(${FindServiceBanner})`
}
const FindItemBanner = ({ findService }) => {
    const {name } = findService;
    return (
        <div className="py-5 h-56 flex items-center justify-center" style={findPageBanner}>
            <span className="text-xl text-gray-400 flex items-center">
                <Link className="text-white" to="/home">Home</Link>
                <span className="px-2 text-3xl text-red-600">/</span>
                {name}
            </span>
        </div>
    );
};

export default FindItemBanner;