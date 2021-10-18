import React, { useEffect, useState } from 'react';
import Tips from '../Tips/Tips';

const DentalTips = () => {
    const [tips,setTips]=useState([]);
    useEffect(()=>{
        fetch('tips.json')
        .then(res=>res.json())
        .then(data=>setTips(data))
    },[])
    return (
        <div className="row">
            {
             tips.map(tip=> <Tips
             key={tip.id}
             tip={tip}
             ></Tips> )  
            }
        </div>
    );
};

export default DentalTips;