import React from 'react';

const Wellcome = (props) => {
    const {name,url,headline,description}= props.wellcome;
    return (
        <div className="col-lg-4 col-sm-12">
            <img src={url} alt="" />
            <p className="text-secondary text-start" >{name}</p>
            <h3>{headline}</h3>
            <small>{description}</small>
        </div>
    );
};

export default Wellcome;