import React from 'react';
import { Link } from 'react-router-dom';

// service card style___________
const serViceCardStyle = {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius : '1rem'
}

const Service = ({ service }) => {
    const { name, description, id, image } = service;
    const url = `/serviceItem/${id}`;
    return (
        <div style={serViceCardStyle} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 ease-linear flex items-center justify-between flex-col border-8 border-white overflow-hidden">
            <div>
            <div className="overflow-hidden w-full h-72">
                <img className="min-w-full cursor-pointer min-h-full transform scale-100 hover:scale-110 transition-all duration-300 ease-linear" src={image} alt="" />
            </div>
            <div className="py-4 px-5">
                <h3 className="text-2xl font-medium py-2">{name}</h3>
                <p className="py-2">{ description.substring(0,200)}</p>
            </div>
            </div>
            <div className="py-4 bg-gray-300 w-full">
                <Link className="transition-all duration-300 ease-linear text-white bg-red-500 hover:bg-red-700 font-medium rounded-md text-lg py-2 px-5" to={url}>Find Details</Link>
            </div>
        </div>
    );
};

export default Service;