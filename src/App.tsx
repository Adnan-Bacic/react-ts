import React from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.min.js';
import '@popperjs/core';

import Router from './router/Router';

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
