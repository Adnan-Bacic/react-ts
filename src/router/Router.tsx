import React from 'react';
import { BrowserRouter as RouterContainer, Switch, Route } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import * as Pages from '../pages';
import * as Includes from '../includes';
import * as Components from '../components';

const Router = () => {
  const ui = useSelector((state: RootStateOrAny) => { return state.ui; });

  return (
    <>
      <RouterContainer basename="/folders/typescript/react-ts/">
        <Includes.Navbar />
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route exact path="/about" component={Pages.About} />
          <Route path="*" component={Pages.NotFound} />
        </Switch>
        {ui?.isLoading && (
        <Components.Spinner />
        )}
        <Includes.Footer />
      </RouterContainer>
    </>
  );
};

export default Router;
