import React from 'react';

export default function Card({ title, summary, img, url }) {
  return (
    <div className="card">
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
        <a href={ url } className="btn btn-link ml-n2">Read More</a>
      </div>
    </div>
  )
}
