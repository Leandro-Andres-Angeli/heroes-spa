import React from 'react';
import { Navbar } from './../components/ui/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/hero/:heroeId' component={HeroScreen} />
          <Route exact path='/search' component={SearchScreen} />
          <Redirect to='/marvel'></Redirect>
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
