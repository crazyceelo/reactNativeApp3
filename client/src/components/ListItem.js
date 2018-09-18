import React, { Component } from "react";
import { CardSection } from "./common";
import { connect } from "react-redux";
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import * as actions from "../actions";

class ListItem extends Component {
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

export default connect(
  null,
  actions
)(ListItem);
