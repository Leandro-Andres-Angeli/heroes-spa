import React, { useEffect } from 'react';

import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroeByName';

import { useState } from 'react';

export const SearchScreen = ({ history }) => {
  const [heroesFiltered, setHeroesFiltered] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setHeroesFiltered(getHeroByName(query));
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { hero: heroSearch } = Object.fromEntries(new FormData(e.target));

    history.push(`?q=${heroSearch}`);
    const params = new URLSearchParams(window.location.search);

    setQuery(params.get('q'));

    e.target.reset();
  };
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
              name='hero'
            />
            <button type='submit' className='mt-3 btn btn-outline-primary'>
              search
            </button>
          </form>
        </div>
        <div className='col-7'>
          {(heroesFiltered.length > 0 && (
            <>
              <h4>Results</h4>
              <hr />
              {heroesFiltered.map((hero) => (
                <HeroCard key={hero.id} {...{ ...hero }}></HeroCard>
              ))}
            </>
          )) || <div className='alert alert-info'> Search for a Hero</div>}
        </div>
      </div>
    </div>
  );
};
