import React from 'react';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {
  const heroesFiltered = heroes;
  const handleSubmit = () => {};
  return (
    <div>
      <h1> SearchScreen</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='find your hero'
              className='form-control'
            />
            <button type='submit' className='mt-3 btn btn-outline-primary'>
              search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resuts</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...{ ...hero }}></HeroCard>
          ))}
        </div>
      </div>
    </div>
  );
};
