import React from 'react';
import Wellcome from '../Wellcome/Wellcome';
const wellcomeData=[
    {
        id:1,
        name:"DENTAL SERVICES",
        headline:"For every dental healthcare need",
        description:"From pediatric to cosmetic dentistry, we have a comprehensive solution for all your dental needs.",
        url:"https://dubaidentalhospital.ae/Files/Uploads/Home/landing-1.jpg"
    },
    {
        id:2,
        name:"REQUEST AN APPOINTMENT",
        headline:"We are happy to assist you",
        description:"Here at the Dubai Dental Hospital, we ensure that you have a positive experience with a high level of service.",
        url:"https://dubaidentalhospital.ae/Files/Uploads/Home/landing-2.jpg"
    },
    {
        id:3,
        name:"INSURANCE",
        headline:"More than 25 health insurance plans accepted",
        description:"Please check if your insurance company is listed with us; if it isn’t, please contact us for assistance.",
        url:"https://dubaidentalhospital.ae/Files/Uploads/Home/landing-3.jpg"
    }
]
const WellcomeContainer = () => {
    // used custom data to use in Wellcome component
    return (
        <div className="container">
            <div className="row g-4">
            {
                wellcomeData.map(wellcome=> <Wellcome
                key={wellcome.id}
                wellcome={wellcome}
                ></Wellcome> )
            }
            </div>
        </div>
    );
};

export default WellcomeContainer;