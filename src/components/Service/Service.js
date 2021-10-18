import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const {id,name,shortdescription,url}=props.service;
    return (
        <div className="col-lg-6 col-sm-12">
            <div className="service p-4">
                <div className="row">
                    <div className="col-lg-7"><img src={url} alt="" /></div>
                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                        <div>
                        <h2>{name}</h2>
                        <Link to={`/service/${id}`} >
                        <button className="details-btn mt-2" >Details</button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div>{shortdescription}</div>
            </div>
        </div>
    );
};

export default Service;

