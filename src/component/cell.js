import React from 'react';
import { connect } from 'react-redux';
import {
  selectCell,
  changeCellValue,
} from '../actions';
const generateStyle = (props, state) => {
  const { isEditing } = state;
  const { isSelected, isInSelectionRange } = props;
  const style = {};
  if (!isEditing && isSelected) {
    style.border = '1px solid blue';
    style.backgroundColor = 'aliceblue';
  } else {
    style.border = '1px solid transparent';
  }
  if (isInSelectionRange) {
    style.backgroundColor = 'aliceblue';
  }

  return style;
};

export class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: props.value,
    };

    this.handleChange = this.handleChange.bind(this);
    this.registerCell = this.registerCell.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectCell = this.handleSelectCell.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillUnmount() {
    this.containerRef.removeEventListener('dblclick', this.handleDoubleClick);
    this.containerRef.removeEventListener('mouseover', this.handleMouseOver);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit() {
    this.setState({
      isEditing: false,
    });
    this.props.changeCellValue(this.state.value);
  }

  handleDoubleClick() {
    this.setState({
      isEditing: true,
    });
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleMouseOver() {
    this.props.onMouseOver(this.props.row, this.props.column);
  }

  handleSelectCell() {
    this.props.selectCell();
  }

  registerCell(element) {
    this.containerRef = element;
    this.containerRef.addEventListener('dblclick', this.handleDoubleClick);
    this.containerRef.addEventListener('mouseover', this.handleMouseOver);
  }

  render() {
    const { value } = this.props;
    const { isEditing } = this.state;
    const style = generateStyle(this.props, this.state);
    const _body = isEditing ?
      (
        <input
          type={'text'}
          autoFocus={true}
          onBlur={this.handleSubmit}
          style={{ width: '100%' }}                    
          value={this.state.value} 
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      ) : 
      (
        <span
          className={'sheets--cell-value'}
          style={{
            cursor: 'default',
          }}          
        >
          {value}
        </span>
      );

    return (
      <div
        ref={this.registerCell}
        style={style}
        onMouseDown={this.handleSelectCell}
      >
        {_body}
      </div>
    );   
  }
}

const isWithinRange = (rowStart, rowEnd, columnStart, columnEnd) => {
  return (row, column) => {
    const isSelection = rowStart !== false && rowEnd !== false;
    const isBetweenRowStartAndRowEnd =
      (rowStart <= row && rowEnd >= row) ||
      (rowStart >= row && rowEnd <= row);
    const isBetweenColumnStartAndColumnEnd = 
      (columnStart <= column && columnEnd >= column) ||
      (columnStart >= column && columnEnd <= column);		
    const isInSelectionRange =
      isSelection &&
      isBetweenRowStartAndRowEnd &&
      isBetweenColumnStartAndColumnEnd;

    return isInSelectionRange;
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    isSelected: state.selectedCellRow === ownProps.row && state.selectedCellColumn === ownProps.column,
    isInSelectionRange: isWithinRange(
      state.selectedCellRowStart,
      state.selectedCellRowEnd,
      state.selectedCellColumnStart,
      state.selectedCellColumnEnd
    )(ownProps.row, ownProps.column),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectCell: () => dispatch(selectCell(ownProps.row, ownProps.column)),
    changeCellValue: value => dispatch(changeCellValue(ownProps.row, ownProps.column, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);