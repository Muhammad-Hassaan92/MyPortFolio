import React from 'react';

const Product = (props) => {
  return (
    <div className="col-sm-6 col-md-4 d-flex justify-content-center py-2">
      <div className="product-container position-relative overflow-hidden">
        <img src={props.image} alt="product" className="product-image w-100 rounded-2" />

        <div className="product-overlay position-absolute top-0 start-0 w-100"></div>

        <div className="product-info">
          <h5 className="fw-bold m-0">{props.title}</h5>
          <p className="m-0">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
