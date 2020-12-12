import React from 'react';

const Card = ({ img, title, summary, url }) => {
  return (
    <div className="col-lg-4 col-md-6 my-3">
      <div className="card h-100">
        <img
          loading="lazy"
          src={ img }
          alt={ title }
          className="card-img card-img-top"/>
        <div className="card-body">
          <h3 className="card-title">
            { title }
          </h3>
          <p className="card-text">
            { summary }
          </p>
          <a href={ url } className="btn btn-link ml-n2" target="_blank">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
