import React from 'react';
import HeroesList from './../heroes/HeroesList';

const DcScreen = () => {
  const [mockState, setMockState] = React.useState(false);

  return (
    <div>
      DcScreen
      <HeroesList publisher={'DC Comics'}></HeroesList>
      <button
        onClick={() => setMockState((prev) => !prev)}
        className='btn btn-outline-primary'
      >
        Mockup state {JSON.stringify(mockState)}
      </button>
    </div>
  );
};

export default DcScreen;
