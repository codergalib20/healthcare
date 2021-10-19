import React from 'react';

const Doctor = ({ doctor }) => {
    const {name,para,division,email,phone,image } = doctor;
    return (
        <div className="transition-all ease-linear duration-300 border-4 border-white shadow-md hover:shadow-2xl ">
            <div className="overflow-hidden">
              <img className="transition-all duration-300 ease-linear cursor-pointer transform scale-100 hover:scale-110" src={image} alt={email} />
            </div>
            <div className="p-1">
                <h3 className="text-2xl font-medium  text-gray-800">{name}</h3>
                <span className="text-gray-400  font-medium text-3xl">{division}</span>
                <p className="flex items-center py-1">
                    <span className="text-red-600 mr-3"><i class="fas fa-envelope"></i></span>
                    {email}
                </p>
                <p className="flex items-center py-1">
                    <span className="text-red-600 mr-3"><i class="fas fa-phone-alt"></i></span>
                    { phone}
                </p>
                <p className="text-sm text-justify text-gray-600 font-semibold">{ para}</p>
            </div>
        </div>
    );
};

export default Doctor;