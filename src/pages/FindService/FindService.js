import React from 'react';

const FindService = ({ findService }) => {
    const { name, id, para1, para2,description,image,li1,li2,li3,li4,li5 } = findService
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4" >
            <div className="text-center w-full my-8  md:my-4">
                <img className="m-auto w-full" src={image} alt="" />
            </div>
            <div className="xl:col-span-2">
                <h2 className="text-4xl font-bold text-indigo-600">{name}</h2>
                <p className="md:text-lg font-medium text-gray-500 pb-3 text-justify">{description}</p>
                <div className="border-b border-red-300"></div>
                <div className="flex py-7">
                    <ul className="mr-10">
                        <li><span className="text-lg w-10 h-10 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-linkedin-in"></i></span></li>
                        <li><span className="text-lg w-10 h-10 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-facebook-f"></i></span></li>
                        <li><span className="text-lg w-10 h-10 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-twitter"></i></span></li>
                        <li><span className="text-lg w-10 h-10 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fas fa-envelope"></i></span></li>
                        <li><span className="text-lg w-10 h-10 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-google-plus-g"></i></span></li>
                    </ul>
                    <ul className="flex flex-col justify-between">
                        <li className="text-md h-10"><span className="text-red-500 mr-3"><i class="fas fa-long-arrow-alt-right"></i></span> { li1}</li>
                        <li className="text-md h-10"><span className="text-red-500 mr-3"><i class="fas fa-long-arrow-alt-right"></i></span> { li2}</li>
                        <li className="text-md h-10"><span className="text-red-500 mr-3"><i class="fas fa-long-arrow-alt-right"></i></span> { li3}</li>
                        <li className="text-md h-10"><span className="text-red-500 mr-3"><i class="fas fa-long-arrow-alt-right"></i></span> { li4}</li>
                        <li className="text-md h-10"><span className="text-red-500 mr-3"><i class="fas fa-long-arrow-alt-right"></i></span> { li5}</li>
                    </ul> 
                </div>
                <p className="md:text-lg font-medium text-gray-500 pb-3 text-justify">{para1}</p>
                <p className="md:text-lg font-medium text-gray-500 pb-3 text-justify">{ para2}</p>
            </div>
        </div>
    );
};

export default FindService;