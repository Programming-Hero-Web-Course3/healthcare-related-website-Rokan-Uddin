import React from 'react';
import './Doctor.css';
const Doctor = (props) => {
    const {Name,expert,degree,url}=props.doctor;
    return (
        <div className="col-lg-4 col-sm-12 doctor-cart">
            <img src={url} alt="" />
            <h4>{Name}</h4>
            <p>{expert}</p>
            <p>{degree}</p>
        </div>
    );
};

export default Doctor;