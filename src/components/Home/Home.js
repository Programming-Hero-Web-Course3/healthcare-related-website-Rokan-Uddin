import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import DentalTips from '../DentalTips/DentalTips';
import Service from '../Service/Service';
import WellcomeContainer from '../WellcomeContainer/WellcomeContainer';
const Home = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center my-5">Wellcome to Chittagong Dental Care</h1>
            <p className="container text-center">Located in Nasirabad,Chittagong, the Dental Hospital provides a comprehensive range of 
                specialized dental care services, all under one roof in a new, state-of-the-art facility. 
                Our priority is to provide the highest standards of evidence-based dental care.</p>
            <WellcomeContainer></WellcomeContainer>
            <hr className="container mt-5" />
            <h1 id="services" className="text-center my-5">Our Services</h1>
            <div className="container mb-5">
                <div className="row g-4">
                {
                services.map((service)=><Service
                    service={service}
                    ></Service>
                )
            }
                </div>
            </div>
            
            <span id="tips" className="py-2 fs-1 border-bottom border-3">Important tips for healthy teeth</span>
            <div className="container my-5">
                <DentalTips></DentalTips>
            </div>
        </div>
    );
};

export default Home;