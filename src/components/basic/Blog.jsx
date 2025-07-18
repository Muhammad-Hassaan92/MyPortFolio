import React from 'react';

const Blog = (props) => {
  return (
    <div className="col-md-4">
    <div className="card shadow border-secondary mb-4">
      <img src={props.image} className="card-img-top" alt="blog" />
      <div className="card-body">
        <p className="text-muted fs-5">{props.date}</p>
        <h5 className="fs-4 fw-bold py-2 pb-3">{props.heading}</h5>
        <a href={props.link} className="text-decoration-none text-primary fw-semibold">
          Read More →
        </a>
      </div>
    </div>
    </div>
  );
};

export default Blog;
