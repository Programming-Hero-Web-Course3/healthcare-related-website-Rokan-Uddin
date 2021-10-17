import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const {id,name,shortdescription,url}=props.service;
    return (
        <div className="service">
            <h2>{name}</h2>
            <p>{shortdescription}</p>
            <img src={url} alt="" />
            <Link to={`/service/${id}`} >
            <button>Details</button>
            </Link>
        </div>
    );
};

export default Service;