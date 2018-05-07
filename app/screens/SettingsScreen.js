import React, { Component } from "react";
import { View, Text, ListView, TouchableOpacity } from "react-native";

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<View    
              style={{
                flex: 1,
                backgroundColor: "#c0392b"
              }}
            >
              <Text>SettingsScreen</Text>
            </View>);
  }
}

export default SettingsScreen;
