import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    // this._bootstrapAsync();
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("LoginScreen");
    }, 1500);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "#EA2027",
          flex: 1,
          justifyContent: "center",
          height: null,
          width: null
        }}
      >
        <Icon
          style={{ alignSelf: "center" }}
          name="motorcycle"
          size={120}
          color="#fff"
        />
        <ActivityIndicator size={90} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
