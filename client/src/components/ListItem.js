import React, { Component } from "react";
import { CardSection } from "./common";
import { connect } from "react-redux";
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import * as actions from "../actions";

class ListItem extends Component {
  renderDescription() {
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return <Text>{this.props.library.item.description}</Text>;
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

const mapStateToProps = state => {
  return {
    selectedLibraryId: state.selectedLibraryId
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
