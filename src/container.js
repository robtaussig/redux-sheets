import React from 'react';
import { connect } from 'react-redux';
import {
  generateLayout
} from './actions';
import Header from './component/header';
import Rows from './component/rows';

export class Container extends React.Component {
  constructor(props) {
    super(props);
    props.generateLayout(props.data);    
  }

  render() {
    const props = this.props;
    const { data } = props;

    return (
      <div className={'sheets-container'}>
        <Header/>
        <Rows/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    generateLayout: (data) => dispatch(generateLayout(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);