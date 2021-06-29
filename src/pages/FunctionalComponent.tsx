import React, { useState } from 'react';
import * as functions from '../redux/functions';

const FunctionalComponent = () => {
  const [name, setName] = useState('name');

  return (
    <>
      <div className="col-6">
        <h1>Functional component</h1>
        <p>
          {name}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setName('new name');
          }}
        >
          set new name
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            functions.ui.setIsLoading(true);
          }}
        >
          set loading true
        </button>
      </div>
    </>
  );
};

export default FunctionalComponent;
