import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useAppDispatch } from '../reduxToolkit/hooks';
import * as rToolkit from '../reduxToolkit/user/actions';

const User = () => {
  const dispatch = useAppDispatch();

  const user = useSelector((state: RootStateOrAny) => { return state.user; });

  return (
    <>
      <p>user:</p>
      <button onClick={() => {
        dispatch(rToolkit.setName('name2'));
      }}
      >
        type
      </button>
      <button onClick={() => {
        dispatch(rToolkit.setAge(10));
      }}
      >
        createAction()
      </button>
      <p>
        {user.name}
      </p>
      <p>
        {user.age}
      </p>
    </>
  );
};

export default User;
