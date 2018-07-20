import React from 'react';
import Cell from './cell';

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.column,
    };
  }

  render() {
    const { column, row, index, onMouseOver } = this.props;
    return (
      <div className={`sheets--column`} >
        <Cell
          value={column}
          row={row}
          column={index}
          onMouseOver={onMouseOver}
        />
      </div>
    );
  }
}