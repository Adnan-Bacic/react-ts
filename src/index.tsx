/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './redux/configureStore';
import { reduxToolkitStore } from './reduxToolkit/store';

ReactDOM.render(
  <Provider store={reduxToolkitStore}>
    <React.StrictMode>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          console.log('STORE', reduxToolkitStore.getState());
        }}
      >
        log redux store
      </button>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
