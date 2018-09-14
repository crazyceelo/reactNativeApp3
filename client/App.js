import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import redux and react-redux
import { Provider } from "react-redux";
import { createStore } from "redux";

// import reducers
import reducers from "./reducers";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>TEST</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
