import React from 'react';

const Box = (props) => {
  return (
    <div className="box-hover col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center p-2">
      <div className="border rounded text-center p-4 w-100 brdrwr">
        <img
          src={props.image}
          alt={props.heading}
          className="img-fluid mb-3"
        />
        <h5 className="fw-bold mb-2">{props.heading}</h5>
        <p className="text-muted">{props.text}</p>
      </div>
    </div>
  );
};

export default Box;
