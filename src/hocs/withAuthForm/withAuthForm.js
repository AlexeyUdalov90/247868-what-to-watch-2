import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withAuthForm = (Component) => {
  class WithAuthForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._onChangeEmailHandler = this._onChangeEmailHandler.bind(this);
      this._onChangePasswordHandler = this._onChangePasswordHandler.bind(this);
      this._onSubmitFormHandler = this._onSubmitFormHandler.bind(this);
    }

    _onChangeEmailHandler(evt) {
      this.setState({
        email: evt.target.value,
      });
    }

    _onChangePasswordHandler(evt) {
      this.setState({
        password: evt.target.value,
      });
    }

    _onSubmitFormHandler(evt) {
      evt.preventDefault();
      const {email, password} = this.state;
      const {onSubmitSignIn} = this.props;

      if (email && password) {
        onSubmitSignIn(email, password);
      }
    }

    render() {
      return <Component
        {...this.props}
        emailValue = {this.state.email}
        passwordValue = {this.state.password}
        onChangeEmailHandler = {this._onChangeEmailHandler}
        onChangePasswordHandler = {this._onChangePasswordHandler}
        onSubmitSignIn = {this._onSubmitFormHandler}
      />;
    }
  }

  WithAuthForm.propTypes = {
    onSubmitSignIn: PropTypes.func.isRequired,
  };

  return WithAuthForm;
};

export default withAuthForm;
