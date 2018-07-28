import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Button } from 'react-native-elements'
import { FontAwesome } from "@expo/vector-icons";

const styles = {
  iconAlign: { alignSelf: "center"},
  drawerToggle: { padding: 20 },
  headerStyle: { backgroundColor: "#fff"},
  headerTitleStyle: {fontWeight: "bold"},
}

class ParkingLotScreen extends Component {
  static navigationOptions = ({ navigation }) => {
      return {
              headerStyle: styles.headerStyle, 
              headerTintColor: "#000", 
              headerTitleStyle: styles.headerTitleStyle, 
              headerTitle: 'AMCOM',
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
                backgroundColor: "#2980b9"
              }}
            >
              <Card
                title='PARKINGLOT'>
                <Text style={{marginBottom: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                  icon={{name: 'code'}}
                  backgroundColor='#e67e22'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW' />
              </Card>
            </View>);
  }
}

export default ParkingLotScreen;
