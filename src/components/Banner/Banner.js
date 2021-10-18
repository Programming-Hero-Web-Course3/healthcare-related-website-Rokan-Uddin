import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
      <div className="banner row">
        <div className="col-lg-6 col-sm-12"></div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
        <div>
        <h1 className="mt-5 text-white">Zoom Teeth Whitening</h1>
        <p className="p-5 fs-5 text-white">Teeth whitening that's fast, safe, and reliable. 
          This procedure is performed by one of our dentists or dental hygienists. 
          Book your teeth-whitening appointment today and enjoy instant results.</p>
          <Link to='/appoinment' className="myButton" >Make and Appoinment</Link>
        </div>
        </div>
      </div>
    );
};

export default Banner;