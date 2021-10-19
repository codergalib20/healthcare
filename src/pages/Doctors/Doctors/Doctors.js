import React, { useEffect, useState } from 'react';
import SliderBanerImage from '../../../images/image-1.jpg';
import Doctor from '../Doctor/Doctor';

const sliderBanner = {
    background: `url(${SliderBanerImage}) center center no-repeat`,
    backgroundAttachment: 'fixed',
    backgroundSize : 'cover'
}
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    },[])
    return (
        <div>
            <div className=" bg-green-700 py-6 text-center">
                <div className="container mx-auto">
                  <h1 className="text-3xl uppercase text-white">Top {doctors.length} doctors</h1>
                </div>
            </div>
            <div className="container py-3 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    doctors.map(doctor=><Doctor key={doctor.id} doctor={doctor}/>)
                }
            </div>
        </div>
    );
};

export default Doctors;