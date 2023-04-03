import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import { useMemo } from 'react';

const HeroesList = ({ publisher }) => {
  // IMPORTANTCOMMENT
  // added React.memo in order to prevent unecessary component's rerenders
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  console.log('render');
  return (
    <div className='row animate__animated animate__fadeIn'>
      {heroes &&
        heroes.map((hero) => (
          <div key={hero.id} className='col col-12 col-md-6 col-lg-4 p-2'>
            <HeroCard {...hero}></HeroCard>
          </div>
        ))}
    </div>
  );
};
//export memoized component to prevent unnecesary render or can memoized functions inside component
// export default React.memo(HeroesList);
//export memoized component to prevent unnecesary render or can memoized functions inside component
export default HeroesList;
