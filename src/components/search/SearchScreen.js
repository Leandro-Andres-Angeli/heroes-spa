import React, { useEffect, useMemo } from 'react';

//       


import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../heroes/HeroCard';
const customComparator = (prevProps, nextProps) => {
  console.log(prevProps)
  console.log(nextProps)
  console.log("fuction")
  return nextProps.heroesFiltered === prevProps.heroesFiltered;
};

const HeroList =({ heroesFiltered,qVal }) => {
  
  return (<div className='col-7'>
    {(heroesFiltered.length > 0 && (
      <>
        <h4>Results</h4>
        <hr />
        {heroesFiltered.map((hero) => (
          <HeroCard key={hero.id} {...{ ...hero }}></HeroCard>
        ))}
      </>
    )) || <div className={`alert ${qVal === '' ? 'alert-info' :"alert-danger"} `}> {qVal === '' ? 'search for hero' :"hero not found"}</div>}
  </div>)
}
export const SearchScreen = ({ history }) => {


  const location = useLocation()
  const qVal = useMemo(() => new URLSearchParams(location.search).get("q"), [location.search]);
  const heroesFiltered = useMemo(() => getHeroByName(qVal), [qVal])
  console.log(qVal)

  const handleSubmit = (e) => {
    e.preventDefault();

    const { hero: heroSearch } = Object.fromEntries(new FormData(e.target));

    history.push(`?q=${heroSearch}`);


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
        <HeroList {...{ heroesFiltered,qVal }}></HeroList>
      </div>
    </div>
  );
};
