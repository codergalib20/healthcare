import React from 'react';
import footerBackgroundImage from '../../images/footer_lodyas.png';
import FooterLogo from '../../images/medizoid_Logo.webp';
import PaymentCardImage from '../../images/payment-cart.png';


const footerStyleCoustom = {
    background: `url(${footerBackgroundImage}) center center no-repeat`,
    backgroundSize: 'cover',
    backgroundAttachment : 'fixed'
}
const Footer = () => {
    return (
        <div>
            {/* ==============Footer Top================ */}
            <section style={footerStyleCoustom} >
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                    <div className="md:border-r py-5 md:border-red-500">
                        <img className=" w-56" src={FooterLogo} alt="" />
                        <ul className="flex items-center flex-wrap h-full">
                            <li><span className="text-lg w-10 h-10 mr-3 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-linkedin-in"></i></span></li>
                            <li><span className="text-lg w-10 h-10 mr-3 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-facebook-f"></i></span></li>
                            <li><span className="text-lg w-10 h-10 mr-3 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-twitter"></i></span></li>
                            <li><span className="text-lg w-10 h-10 mr-3 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fas fa-envelope"></i></span></li>
                            <li><span className="text-lg w-10 h-10 mr-3 flex items-center justify-center bg-yellow-400 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-google-plus-g"></i></span></li>
                        </ul>
                    </div>
                    <div className="md:border-r px-6 md:border-red-500">
                        <ul className="py-4">
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Sitemap</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Latest News</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Special Services</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Terms of Services</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Surgery & Transplant Guide</li>
                        </ul>
                    </div>
                    <div className="md:border-r px-6 md:border-red-500">
                        <ul className="py-4">
                           <strong className="text-white text-lg">Day to see the patient</strong>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Monday - 10 am 07 pm</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Tuesday - 10 am 07 pm</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Wednesday - 10 am 07 pm</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Thursday - 10 am 07 pm</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Friday - 10 am 07 pm</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <img className="md:ml-7 my-5 w-full" src={PaymentCardImage} alt="" />
                    </div>
                </div>
            </section>
            {/* ============Footer Bottom============ */}
            <section className="bg-gray-900 py-5 border-t-2 border-red-500">
                <div className="container mx-auto text-center">
                    <span className="text-lg text-gray-400">
                        Created by Asadullah Hil Galib
                        &copy;2021 ||
                       <a className="text-red-500" href="https://www.linkedin.com/in/codergalib/" target="_blank"> @codergalib20</a>
                    </span>
                </div>
            </section>
        </div>
    );
};

export default Footer;