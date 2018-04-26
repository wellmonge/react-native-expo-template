import React, { Component } from "react";
import { StatusBar, View, Platform } from "react-native";
import { Provider, connect } from "react-redux";

//## APP COMPONENTS ###//
import { Drawer, Tabs } from "./app/Navigators";
import { Store } from "./app/SetupStore";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
          <View style={{ flex: 1 }}>
            {Platform.OS === "ios" ? <Tabs /> : <Drawer />}
          </View>
      </Provider>
    );
  }
}
export default App;
