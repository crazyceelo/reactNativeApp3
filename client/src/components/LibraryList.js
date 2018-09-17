import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>test</Text>
      </View>
    );
  }
}

// takes application state and provides state
// as props to this component
const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);
