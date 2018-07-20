import React from 'react';
import { connect } from 'react-redux';
import Row from './row';

export class Rows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rows } = this.props;

    return (
      <div
        className={'sheets--rows'}
      >
        {rows.map((row, idx) => {
          return (
            <Row 
              key={`${idx}-row`} 
              index={idx}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rows: state.rows
  };
};

export default connect(mapStateToProps)(Rows);