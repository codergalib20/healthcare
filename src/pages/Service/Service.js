import React from 'react';
import { NavLink } from 'react-router-dom';

// service card style___________
const serViceCardStyle = {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius : '1rem'
}

const Service = ({ service }) => {
    const { name, description, id, image } = service;

    return (
        <div style={serViceCardStyle} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 ease-linear flex items-center justify-between flex-col overflow-hidden">
            <div>
            <div className="overflow-hidden w-full h-72">
                <img className="min-w-full cursor-pointer min-h-full transform scale-100 hover:scale-110 transition-all duration-300 ease-linear" src={image} alt="" />
            </div>
            <div className="py-1 px-1">
                <h3 className="text-2xl font-medium py-1">{name}</h3>
                <p className="py-1">{ description.substring(0,200)}</p>
            </div>
            </div>
            <div className="py-3 bg-indigo-900 w-full">
                <NavLink to={`/serviceItem/${id}`} className="transition-all duration-300 ease-linear text-indigo-100 border-2 border-white hover:bg-white hover:text-indigo-800 font-medium rounded-md text-lg py-1 px-3">Find Details</NavLink>
            </div>
        </div>
    );
};

export default Service;