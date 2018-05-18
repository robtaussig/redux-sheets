import React from 'react';
import { connect } from 'react-redux';
import Column from './column';

const getColumnWidth = (column) => {

};

export class Row extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { row, preferences } = this.props;
    const { columnWidth } = preferences;
    return (
      <div className={'sheets--row'}>
        {row.map((column, idx) => {
          const thisWidth = preferences.adjustableWidth ? getColumnWidth(column) : columnWidth;
          return (
            <Column
              key={`${idx}-column`}
              index={idx} 
              column={column}
              width={thisWidth}
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
    preferences: state.preferences
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);