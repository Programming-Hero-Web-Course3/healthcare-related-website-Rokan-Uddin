import React from 'react';
import './Tips.css';
const Tips = (props) => {
    const {id,name,description}=props.tip;
    return (
        <div className="col-lg-3 col-sm-6 ">
            <div className="ps-3 border-start border-success border-3">
                <h3 className="text-start mb-3">{id}.{name}</h3>
                <p className="text-start">{description}</p>
            </div>
        </div>
    );
};

export default Tips;