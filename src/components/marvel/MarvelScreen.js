import React from 'react';
import HeroesList from '../heroes/HeroesList';
import { useState } from 'react';

const MarvelScreen = () => {
  const [mockState, setMockState] = useState(true);
  return (
    <div>
      MarvelScreen
      <HeroesList publisher={'Marvel Comics'}></HeroesList>
      {
        // IMPORTANTCOMMENT
        // added mockup state fired by button to check if heroesList get
        // updated when not needed
      }
      <button
        onClick={() => setMockState((prev) => !prev)}
        className='btn btn-outline-primary'
      >
        Mockup state {JSON.stringify(mockState)}
      </button>
    </div>
  );
};

export default MarvelScreen;
