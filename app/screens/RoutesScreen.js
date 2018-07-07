import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import { MapView } from 'expo';

const styles = {
  iconAlign: { alignSelf: "center"},
  drawerToggle: { padding: 20 },
  headerStyle: { backgroundColor: "#fff"},
  headerTitleStyle: {fontWeight: "bold"},
}

class RoutesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
      return {
              headerStyle: styles.headerStyle, 
              headerTintColor: "#000", 
              headerTitleStyle: styles.headerTitleStyle, 
              headerRight: (
                          <TouchableOpacity
                              style={styles.drawerToggle}
                              onPress={() => {
                              navigation.navigate("DrawerToggle");
                          }}>
                              <FontAwesome 
                                  style={styles.iconAlign} 
                                  name="bars" 
                                  size={28} 
                                  color="#333333"/>
                          </TouchableOpacity>
          )};
  };

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
              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
            </View>);
  }
}

export default RoutesScreen;
