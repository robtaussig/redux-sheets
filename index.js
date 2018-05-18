import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Container from './src/container';
import './style.css';

export const ReduxSheets = (props) => {
  return (
    <Provider store={store}>
      <Container {...props}/>
    </Provider>
  );
};

export default ReduxSheets;