import React from 'react';
import { connect } from 'react-redux';
import Column from './column';

export class Row extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { row } = this.props;

    return (
      <div className={'sheets--row'}>
        {row.map((column, idx) => {
          return (
            <Column
              key={`${idx}-column`}
              index={idx} 
              column={column}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    row: state.rows[ownProps.index],
  };
};

export default connect(mapStateToProps)(Row);