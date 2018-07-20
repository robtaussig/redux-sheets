import React from 'react';
import { connect } from 'react-redux';
import HeaderColumn from './header-column';
import { clickHeader } from '../actions';
export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickHeader = this.handleClickHeader.bind(this);
  }

  handleClickHeader(headerIndex) {
    this.props.clickHeader(headerIndex);
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
              index={idx}
              onClickHeader={this.handleClickHeader}
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
    clickHeader: headerIndex => dispatch(clickHeader(headerIndex)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);