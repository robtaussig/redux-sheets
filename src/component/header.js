import React from 'react';
import { connect } from 'react-redux';
import HeaderColumn from './header-column';

export class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { header } = this.props;

    return (
      <div className={'sheets--header'}>
        {header.map((column, idx) => {
          return (
            <HeaderColumn 
              key={`${idx}-header`} 
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
    header: state.header,
    preferences: state.preferences
  };
};

export default connect(mapStateToProps)(Header);