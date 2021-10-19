import React, { useContext } from 'react';
import { useServices } from '../../App';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useContext(useServices);
    // console.log(services);
    return (
        <div id="service-section">
            <div className=" py-5 bg-indigo-800 text-center">
               <h1 className="text-white capitalize text-3xl md:text-3xl font-bold">Our All Services</h1>
            </div>
            <div className="container py-12 mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 xl:gap-6">
                {
                    services.map(service=><Service key={service.id} service={service}></Service>)
                }
           </div>
        </div>
    );
};

export default Services;