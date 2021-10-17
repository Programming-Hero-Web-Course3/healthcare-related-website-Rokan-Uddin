import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css';
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
            <div id="services" className="container services">
            {
                services.map((service)=><Service
                    service={service}
                    ></Service>
                )
            }
            </div>
        </div>
    );
};

export default Home;