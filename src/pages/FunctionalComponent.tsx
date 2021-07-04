import React, { useState } from 'react';
import * as functions from '../redux/functions';
import * as rToolkit from '../reduxToolkit/ui/actions';
import { Counter } from '../components';
import { useAppDispatch } from '../reduxToolkit/hooks';

const FunctionalComponent = () => {
  const [name, setName] = useState('name');
  const dispatch = useAppDispatch();

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
        <p>createAction():</p>
        <button onClick={() => {
          dispatch(rToolkit.startLoadingFunc());
        }}
        >
          start loading
        </button>
        <button onClick={() => {
          dispatch(rToolkit.stopLoading());
        }}
        >
          stop loading
        </button>
        <button onClick={() => {
          dispatch(rToolkit.setLoading(true));
        }}
        >
          set loading(param)
        </button>
      </div>
    </>
  );
};

export default FunctionalComponent;
