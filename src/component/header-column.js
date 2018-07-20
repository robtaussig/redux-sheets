import React from 'react';

export default class HeaderColumn extends React.Component {
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
    return (
      <div className={`sheets--header-column`} >
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