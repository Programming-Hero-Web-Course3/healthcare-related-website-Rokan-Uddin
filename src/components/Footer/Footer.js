import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-dark text-white mt-5 p-4">
                <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <h3>About Us</h3>
                    <p className="mx-5">Welcome to Farazy Dental Hospital and Research Center. This is the first "Super Specialized" 
                        Dental hospital in Bangladesh. You will find country wide well known top class dental specialist at 
                        Farazy Dental Hospital and Research Center. They are always ready to provide you the best dental treatment.
                        We always concern about the value of your teeth and money.
                    </p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2>Contact</h2>
                    <p>Phone: +884545455</p>
                    <p>Email: ctglab@yahoo.com</p>
                    <p>Address: #1 road,Nasirabad,Chittagong</p>
                </div>
            </div>
            <span>Copyright 2021</span>
        </div>
    );
};

export default Footer;