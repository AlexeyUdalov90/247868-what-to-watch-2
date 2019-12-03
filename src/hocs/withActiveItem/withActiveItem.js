import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: -1,
      };

      this._onChangeActiveItemHandler = this._onChangeActiveItemHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeItem = {this.state.activeItem}
        onChangeActiveItem = {this._onChangeActiveItemHandler}
      />;
    }

    _onChangeActiveItemHandler(item) {
      this.setState({
        activeItem: item,
      });
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
