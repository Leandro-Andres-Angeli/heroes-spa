import React from 'react';
import { Navbar } from './../components/ui/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/hero/:heroeId' component={HeroScreen} />
          <Redirect to='/marvel'></Redirect>
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
