import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceID}= useParams();
    return (
        <div>
            {
                <h1>{serviceID}</h1>
            }
        </div>
    );
};

export default ServiceDetails;