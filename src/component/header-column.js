import React from 'react';

export default class HeaderColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { column, onClickHeader, index } = this.props;
    return (
      <div
        className={`sheets--header-column`}
        onClick={()=>{
          onClickHeader(index);
        }}
      >
        <span>{column}</span>
      </div>
    );
  }
}