import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className='card'>
      <div className='row no-gutters'>
        <div className='col-md-7'>
          <img
            src={`./assets/heroes/${id}.jpg`}
            className='card-img-top img-fluid'
            alt='...'
          />
        </div>
        <div className='col-md-5'>
          <div className='card-body'>
            <h5 className='card-title'>{superhero}</h5>
            <p className='card-text'>{alter_ego}</p>
            {alter_ego !== characters && (
              <p className='card-text'>{characters}</p>
            )}
            <p className='card-text'>
              <small>{first_appearance}</small>
            </p>
            <Link to={`./hero/${id}`} className='text-primary'>
              Mas...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
