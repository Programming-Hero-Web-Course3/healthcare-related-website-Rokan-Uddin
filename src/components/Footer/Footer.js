import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-dark text-white mt-0 p-4">
                <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <h2 className="text-success">Contact</h2>
                    <p className="text-start ms-5 ps-5"><i className="fas fa-phone me-3"></i> Phone: +884545455</p>
                    <p className="text-start ms-5 ps-5"><i className="fas fa-envelope me-3"></i> Email: ctglab@yahoo.com</p>
                    <p className="text-start ms-5 ps-5"> <i className="fas fa-map-marker-alt me-3"></i> Address: #1 road,Nasirabad,Chittagong</p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h3 className="text-success">About Us</h3>
                    <p className="mx-5">Welcome to Chittagong Dental Hospital and Research Center. This is the first "Super Specialized" 
                        Dental hospital in Bangladesh. You will find country wide well known top class dental specialist at 
                        Chittagong Dental Hospital and Research Center. They are always ready to provide you the best dental treatment.
                        We always concern about the value of your teeth and money.
                    </p>
                </div>
            </div>
            <span>Copyright <i className="fas fa-copyright"></i> 2021</span>
        </div>
    );
};

export default Footer;