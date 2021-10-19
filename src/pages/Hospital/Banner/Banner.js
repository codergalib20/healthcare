import React from 'react';
import { Link } from 'react-router-dom';
import HospitalBannerImage from '../../../images/Three-Musketeers.jpg';

const hospitalBanner = {
    background: `url(${HospitalBannerImage}) top left no-repeat`,
    minHeight: '500px',
    backgroundSize: 'cover'
}
const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-screen">
            <div style={hospitalBanner}></div>
            <div className="flex flex-col justify-evenly py-3 px-2 md:px-5 bg-indigo-600">
                <h2 className="uppercase text-2xl md:text-4xl text-white">OUR PHILOSOPHY</h2>
                <h3 className="text-2xl text-white">This is the subtitle for the heading</h3>
                <p className=" text-white text-lg font-medium text-justify">Patients have an important role to play at each stage of their care and the five safety tips will serve to encourage them to be more involved in their health care.</p>
                <p className=" text-white text-lg font-medium text-justify">Patients can do a lot of small things to make their health-care experience as safe as possible.</p>
                <p className=" text-white text-lg font-medium text-justify">Hospitals are places of recovery and healing but there are also safety risks for patients, such as infections, falls and medication errors that can happen despite our best efforts.</p>
                <Link className="transition-all mt-3 md:mt-0 duration-300 ease-linear text-lg bg-purple-100 hover:text-white hover:bg-purple-900  w-40 text-center  text-gray-800 py-2 font-medium" to="/">Learn more</Link>
            </div>
        </div>
    );
};

export default Banner;