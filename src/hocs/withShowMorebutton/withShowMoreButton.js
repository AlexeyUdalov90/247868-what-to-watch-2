import React, {PureComponent} from 'react';

const withShowMoreButton = (Component) => {
  class WithShowMoreButton extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showItems: 8,
      };

      this._incrementShowItems = this._incrementShowItems.bind(this);
      this._resetShowItems = this._resetShowItems.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        showItems={this.state.showItems}
        incrementShowItems={this._incrementShowItems}
        resetShowItems={this._resetShowItems}
      />;
    }

    _incrementShowItems() {
      this.setState((state) => {
        return {showItems: state.showItems + 20};
      });
    }

    _resetShowItems() {
      this.setState({
        showItems: 8,
      });
    }
  }

  WithShowMoreButton.propTypes = {};

  return WithShowMoreButton;
};

export default withShowMoreButton;
