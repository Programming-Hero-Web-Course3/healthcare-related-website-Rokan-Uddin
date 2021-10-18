import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import DentalTips from '../DentalTips/DentalTips';
import Doctors from '../Doctors/Doctors';
import Service from '../Service/Service';
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
            <h1 id="services" className="text-center">Our Services</h1>
            <div className="container">
                <div className="row g-4">
                {
                services.map((service)=><Service
                    service={service}
                    ></Service>
                )
            }
                </div>
            </div>
            <h2 className="text-center mt-5">Our Doctors</h2>
            <div id="doctors" className="container">
               <Doctors></Doctors>
            </div>
            <h2 id="tips" className="my-5">11 important tips for healthy teeth </h2>
            <div className="container">
                <DentalTips></DentalTips>
            </div>
        </div>
    );
};

export default Home;