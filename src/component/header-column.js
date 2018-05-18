import React from 'react';
import { connect } from 'react-redux';

export class HeaderColumn extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { column, width } = this.props;
    return (
      <div style={{ width, minWidth: width, maxWidth: width }} className={'sheets--header-column'}>
        {column}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderColumn);