import React from 'react';
import { connect } from 'react-redux';
import {
  setColumnWidth
} from '../actions';
import Row from './row';

export class Rows extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const columnWidth = this.getColumnWidthFromRows();
    this.props.setColumnWidth(columnWidth);
  }

  getColumnWidthFromRows() {
    const maxColumns = Math.max(
      ...this.props.rows.map(row => row.length)
    );
    
    return this.props.maxWidth / maxColumns;
  }

  render() {
    const { rows } = this.props;

    return (
      <div
        ref={(element) => {
          if (element) {
            this.ref = element;
          }
        }}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setColumnWidth: (width) => dispatch(setColumnWidth(width))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rows);