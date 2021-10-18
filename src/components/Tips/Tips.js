import React from 'react';

const Tips = (props) => {
    const {name,description}=props.tip;
    return (
        <div className="col-lg-3 col-sm-6">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Tips;