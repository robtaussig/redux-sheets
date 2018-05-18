import React from 'react';
import { connect } from 'react-redux';

export class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.column,
      focused: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { column, width } = this.props;
    return (
      <div style={{ width: width }} className={`sheets--column`} >
        <input 
          type={'text'}
          style={{ width: '100%' }}                    
          value={this.state.value} 
          onChange={this.handleChange}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Column);