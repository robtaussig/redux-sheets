import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Container from './src/container';
import PropTypes from 'prop-types';
import './style.css';

export class ReduxSheets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Container {...this.props}/>
      </Provider>
    );
  }
}

ReduxSheets.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number,
};

ReduxSheets.defaultProps = {
  data: [[]]
};

export default ReduxSheets;