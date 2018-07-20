import React from 'react';
import { connect } from 'react-redux';
import {
  generateLayout,
  updateSelection,
} from './actions';
import Header from './component/header';
import Rows from './component/rows';

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseDown: false,
    };
    props.generateLayout(props.data);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseDown(event) {
    this.setState({
      isMouseDown: true,
    });
  }

  handleMouseUp(event) {
    this.setState({
      isMouseDown: false,
    });
  }

  handleMouseOver(row, column) {
    if (this.state.isMouseDown) {
      this.props.updateSelection(row, column);
    }
  }

  render() {
    const props = this.props;
    
    return (
      <div
        className={'sheets-container'}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}  
      >
        <Header/>
        <Rows onMouseOver={this.handleMouseOver}/>
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
    generateLayout: (data) => dispatch(generateLayout(data)),
    updateSelection: (rowEnd, columnEnd) => dispatch(updateSelection(rowEnd, columnEnd))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);