import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { useMemo } from 'react';

function HeroScreen({ history }) {
  const { heroeId } = useParams();
  // console.log(heroeId);
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  console.log(history);
  const handleReturn = () => {
    if (history.length <= 2) {
      // console.log('in');
      history.push('/');
    }
    history.goBack();
  };
  console.log(hero);
  if (!hero) {
    return <Redirect to='/'></Redirect>;
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__slideInLeft'>
        <img
          src={`../assets/heroes/${id}.jpg`}
          alt={superhero}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b> Alter Ego: {alter_ego}</b>
          </li>
          <li className='list-group-item'>
            <b> Publisher: {publisher}</b>
          </li>
          <li className='list-group-item'>
            <b> First appearance: {first_appearance}</b>
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className='btn btn-outline-primary' onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
}

export default HeroScreen;
