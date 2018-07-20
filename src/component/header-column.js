import React from 'react';

export default class HeaderColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { column } = this.props;
    return (
      <div className={`sheets--header-column`} >
        <span>{column}</span>
      </div>
    );
  }
}