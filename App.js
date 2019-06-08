import React, { Component } from "react";

import { View, Platform, StatusBar } from "react-native";

// import { Provider, connect } from "react-redux";
import { SwitchNavigator } from 'react-navigation'; 

//## APP COMPONENTS ###//
import { Drawer,Tabs, AuthStack } from "./app/Navigators";

// import { Store } from "./app/SetupStore";

class App extends Component {
  static navigationOptions = ({ navigation }) => {
    
  }

  logOut = () => {
    console.log('dsadsadsa')
    this.props.navigation.navigate('LoginScreen')

  }

  render() {
      return (
          <View style={{ flex: 1 }}>
            				<StatusBar backgroundColor="#000" translucent={true} hidden={false} barStyle="dark-content" />

            {Platform.OS === "ios" ? <Tabs logOut={this.logOut} /> : <Drawer logOut={this.logOut} />}
          </View>
    );
  }
}

export default SwitchNavigator(
  {
    App: App,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);