import React from 'react';
import { useAppDispatch } from '../reduxToolkit/hooks';
import * as rToolkit from '../reduxToolkit/ui/actions';

const Loading = () => {
  const dispatch = useAppDispatch();

  return (
    <>
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
    </>
  );
};

export default Loading;
