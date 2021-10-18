import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <Services/>
            <About/>
        </div>
    );
};

export default Home;