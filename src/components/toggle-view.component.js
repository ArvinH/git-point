import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Collapsible from 'react-native-collapsible';

export class ToggleView extends Component {
  props: {
    children: any,
    TouchableView: any,
  };

  state: {
    collapsed: boolean,
  };

  constructor() {
    super();

    this.state = {
      collapsed: true,
    };
  }

  _toggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  renderTochableView() {
    const { TouchableView } = this.props;

    if (TouchableView instanceof Function) {
      return TouchableView(this.state.collapsed);
    }

    return TouchableView;
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this._toggle()}>
          {this.renderTochableView()}
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed}>
          {this.props.children}
        </Collapsible>
      </View>
    );
  }
}

ToggleView.defaultProps = {
  TouchableView: <Text>…</Text>,
};
