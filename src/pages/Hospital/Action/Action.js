import React from 'react';

const Action = () => {
    return (
        <div className="bg-indigo-700 mt-8">
            <div className="container mx-auto py-14 flex flex-wrap md:flex-nowrap items-center justify-between">
                <div className="w-full md:w-6/12">
                    <h1 className="text-white font-bold text-3xl">Don’t Miss any Action!</h1>
                    <p className="text-white font-medium text-xl">But I must explain to you how alltmistaken idea of denouncing</p>
                </div>
                <div className="w-full mt-3 md:mt-0 md:w-6/12 flex  justify-between items-stretch">
                    <input className="w-9/12 px-3 outline-none" type="email" placeholder="your email address" />
                    <button className="border-2 w-3/12 outline-none text-white border-white py-2">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Action;