import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

const StartPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <FunctionalComponent />
          <ClassComponent />
        </div>
      </div>
    </>
  );
};

export default StartPage;
