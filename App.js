import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation";
import storeData from "./store";

import ListScreen from "./containers/ListScreen";
import MovieScreen from "./containers/MovieScreen";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: ListScreen
    },
    Movie: {
      screen: MovieScreen
    }
  },
  {
    initialRouteName: "Home",
    cardStyle: {
      backgroundColor: "#f8f7fb"
    },
    navigationOptions: {
      headerTintColor: "#6b52ae",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={storeData}>
        <View style={styles.container}>
          <RootStack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  white: {
    backgroundColor: "#fff"
  }
});
