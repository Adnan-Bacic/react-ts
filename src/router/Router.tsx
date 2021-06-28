import React from 'react';
import { BrowserRouter as RouterContainer, Switch, Route } from 'react-router-dom';
import * as Pages from '../pages';
import * as Includes from '../includes';

const Router = () => {
  return (
    <>
      <RouterContainer basename="/folders/typescript/react-ts/">
        <Includes.Navbar />
        <Switch>
          <Route exact path="/" component={Pages.StartPage} />
          <Route exact path="/about" component={Pages.About} />
          <Route path="*" component={Pages.NotFound} />
        </Switch>
        <Includes.Footer />
      </RouterContainer>
    </>
  );
};

export default Router;
