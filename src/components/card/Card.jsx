import React from 'react';
import './Card.css';

function Card({image, imageAlt, title, content}) {
  return (
    < div className="card-container">
      <img className="card-image" src={image} alt={imageAlt}/>
      <div className="text-container">
        <h3>{title}</h3>
        {content}
      </div>
    </div>
  );
}

export default Card;