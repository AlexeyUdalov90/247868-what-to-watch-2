import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withAuthForm = (Component) => {
  class WithAuthForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isInvalidEmail: false,
        email: ``,
        password: ``,
      };

      this._onChangeEmailHandler = this._onChangeEmailHandler.bind(this);
      this._onChangePasswordHandler = this._onChangePasswordHandler.bind(this);
      this._onValidEmail = this._onValidEmail.bind(this);
      this._onSubmitFormHandler = this._onSubmitFormHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        isInvalidEmail={this.state.isInvalidEmail}
        emailValue = {this.state.email}
        passwordValue = {this.state.password}
        onChangeEmailHandler = {this._onChangeEmailHandler}
        onChangePasswordHandler = {this._onChangePasswordHandler}
        onValidEmail = {this._onValidEmail}
        onSubmitSignIn = {this._onSubmitFormHandler}
      />;
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

    _onValidEmail(evt) {
      const value = evt.target.value;
      if (value) {
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailValid) {
          this.setState({
            isInvalidEmail: false,
          });
        } else {
          this.setState({
            isInvalidEmail: true,
          });
        }
      } else {
        this.setState({
          isInvalidEmail: false,
        });
      }
    }

    _onSubmitFormHandler(evt) {
      evt.preventDefault();
      const {email, password} = this.state;
      const {onSubmitSignIn} = this.props;

      if (email && password) {
        onSubmitSignIn(email, password);
      }
    }
  }

  WithAuthForm.propTypes = {
    onSubmitSignIn: PropTypes.func.isRequired,
  };

  return WithAuthForm;
};

export default withAuthForm;
