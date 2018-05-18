import React from 'react';
import { connect } from 'react-redux';
import HeaderColumn from './header-column';

export class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { header, preferences } = this.props;
    const { columnWidth } = preferences;
    return (
      <div className={'sheets--header'}>
        {header.map((column, idx) => {
          return (
            <HeaderColumn 
              key={`${idx}-header`} 
              column={column}
              width={columnWidth}  
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);