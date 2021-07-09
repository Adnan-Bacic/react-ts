import React, { useState } from 'react';
import * as functions from '../redux/functions';
import { Counter, Loading, User } from '../components';

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
        <p>redux toolkit counter:</p>
        <Counter />
        <p>redux toolkit loading:</p>
        <Loading />
        <p>redux toolkit user:</p>
        <User />
      </div>
    </>
  );
};

export default FunctionalComponent;
