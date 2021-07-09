/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
  decrement, increment, incrementByAmount, selectCount,
} from '../reduxToolkit/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../reduxToolkit/hooks';

const Counter = () => {
  // const count = useSelector((state: RootState) => { return state.counter; });
  // const dispatch = useDispatch();

  // defining types before import so we dont have to write it every time
  const count = useAppSelector((state) => { return state.counter; });
  const dispatch = useAppDispatch();

  // console.log('selectCount ', selectCount());

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <span>{count.value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value by amount"
          onClick={() => {
            dispatch(incrementByAmount(5));
          }}
        >
          Increment by amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
