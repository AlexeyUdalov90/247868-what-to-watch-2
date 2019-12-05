import React, {PureComponent} from 'react';

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: 0,
      };

      this._onChangeActiveTab = this._onChangeActiveTab.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeTab={this.state.activeTab}
        onChangeActiveTab={this._onChangeActiveTab}
      />;
    }

    _onChangeActiveTab(index) {
      this.setState({
        activeTab: index,
      });
    }
  }

  WithTabs.propTypes = {};

  return WithTabs;
};

export default withTabs;
