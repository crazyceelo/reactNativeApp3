import React, { Component } from "react";
import { CardSection } from "./common";
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  NativeModules
} from "react-native";
import * as actions from "../actions";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.selectedLibrary(this.props.library.item.id);
        }}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}> {this.props.library.item.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded: expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
