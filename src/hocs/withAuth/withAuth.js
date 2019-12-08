import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Proptypes from 'prop-types';

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isAuthorization: this.props.isAuthorizationRequired,
      };
    }
    componentDidUpdate(prevProps) {
      if (this.props.isAuthorizationRequired !== prevProps.isAuthorizationRequired) {
        this.setState({
          isAuthorization: this.props.isAuthorizationRequired,
        });
      }
    }
    render() {
      return this.state.isAuthorization ? <Redirect to="/login" /> : <Component {...this.props} />;
    }
  }

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    isAuthorizationRequired: state.load.isAuthorizationRequired,
  });

  WithAuth.propTypes = {
    isAuthorizationRequired: Proptypes.bool.isRequired,
  };

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
