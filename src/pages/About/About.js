import React from 'react';
import AboutHeaderImage from '../../images/header.jpg';

const aboutSectionStyle = {
    background: `linear-gradient(rgba(17, 17, 17, 0.856),rgba(17, 17, 17, 0.863)), url(${AboutHeaderImage}) top center no-repeat`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
}

const About = () => {
    return (
        <div style={aboutSectionStyle}>
            <h1 className="text-4xl font-bold text-center text-white py-5">About us for you need</h1>
            <div className="container px-3 mx-auto grid lg:grid-cols-2 gap-4 text-justify py-8">
                <div>
                    <h2 className="about-header text-3xl md:text-4xl text-left font-bold text-white">welcome to Galib's medizoid general Hospital</h2>
                    <p className=" text-md md:text-lg font-medium text-gray-200 py-4 border-b border-gray-400">Extraordinary crimes against the people and the state had to be avenged by agents extraordinary. Two such people are John Steed, top professional; and his partner, Emma Peel, talented amateur… otherwise known as The Avengers.</p>
                    <p className=" text-md md:text-lg font-medium text-gray-200 pt-4 ">The world looks mighty good to me, cause Tootsie Rolls are all I see. Whatever it is I think I see, becomes a Tootsie Roll to me! Tootsie Roll how I love your chocolatey chew, Tootsie Roll I think I’m in love with you. Whatever it is I think I see, becomes a Tootsie Roll to me!</p>
                </div>
                <div>
                    <h4 className="text-white text-xl mb-2">Why Choose Us?</h4>
                    <h2 className="text-2xl font-medium text-white">The Reasons That You Should Contact Us</h2>
                    <ul>
                        <li className="border-t border-gray-400 mt-3 py-2">
                            <strong className="text-lg text-white font-bold">Over 16 years of experience.</strong>
                            <p className="text-md text-white ">Nunc fringilla eros vitae nisl posuere, ut consectetur nulla feugiat. Nullam ut mauris vitae tortor sodales efficitur.</p>
                        </li>
                        <li className="border-t border-gray-400 mt-3 py-2">
                            <strong className="text-lg text-white font-bold">Over 25 years of experience.</strong>
                            <p className="text-md text-white ">Nunc fringilla eros vitae nisl posuere, ut consectetur nulla feugiat. Nullam ut mauris vitae tortor sodales efficitur.</p>
                        </li>
                        <li className="border-t border-gray-400 mt-3 py-2">
                            <strong className="text-lg text-white font-bold">Over 32 years of experience.</strong>
                            <p className="text-md text-white ">Nunc fringilla eros vitae nisl posuere, ut consectetur nulla feugiat. Nullam ut mauris vitae tortor sodales efficitur.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;