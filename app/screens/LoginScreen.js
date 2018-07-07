import React, { Component } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from "react-native";


import { FontAwesome } from "@expo/vector-icons";

class LoginScreen extends Component {
  static navigationOptions = {
    header : null
  };

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:auth');
      if (value !== null) {
        // We have data!!
        //alert(value);
      }
     } catch (error) {
       // Error retrieving data
     }
  }

  _storeData = async () => {
    try {
      
      await AsyncStorage.setItem('@MySuperStore:auth', '{name:Wellinton Monge, email:wellinton@monge.com.br, password:1234}');
    } catch (error) {
      // Error saving data
    }
  }

  componentDidMount(){
    const test = this._storeData();
    const test2 = this._retrieveData();
    alert(JSON.stringify(test2));
  }
  
  onUserChange(text) {
    alert(text)
  }

  onPasswordChange(text) {
    alert(text)
  }

  onButtonPress = ()  => {
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.userContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome
                  style={{ alignSelf: "center" }}
                  name="user"
                  size={28}
                  color="#333333"
                />
              </View>
              <TextInput
                style={styles.user}
                underlineColorAndroid="#fff"
                autoCorrect={false}
                autoCapitalize="characters"
                placeholderTextColor="#c7c7c7"
                placeholder="USUÁRIO"
                onChangeText={this.onUserChange.bind(this)}
                value={this.props.user}
              />
            </View>
            <View style={styles.passwordContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome
                  style={{ alignSelf: "center" }}
                  name="key"
                  size={28}
                  color="#333333"
                />
              </View>
              <TextInput
                style={styles.password}
                underlineColorAndroid="#fff"
                placeholderTextColor="#c7c7c7"
                placeholder="SENHA"
                secureTextEntry
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              accessibilityTraits="button"
              onPress={this.onButtonPress.bind(this)}
              activeOpacity={1}
              style={[styles.content, this.props.style]}
            >
              <View style={styles.button}>
                <Text style={styles.caption}>{"Entrar"}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.message}>{this.props.message}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  caption: {
    letterSpacing: 1,
    fontSize: 12
  },
  container: {
    flex: 1,
    padding: 40,
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#c0392b"
  },
  header: {
    shadowColor: "#af5109",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    height: 72,
    backgroundColor: "#fff"
  },
  formContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#af5109",
    shadowColor: "#af5109",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    backgroundColor: "#fff",
    margin: 16
  },
  userContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginLeft: 5,
    marginRight: 5
  },
  passwordContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e8ebee",
    marginLeft: 5,
    marginRight: 5
  },
  iconContainer: {
    width: 42,
    borderRightWidth: 1,
    borderRightColor: "#e8ebee",
    padding: 5,
    margin: 5,
    marginLeft: 0,
    alignSelf: "center"
  },
  user: {
    flex: 1
  },
  password: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: "column",
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    margin: 16,
    marginTop: 0,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#af5109",
    shadowColor: "#af5109",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  content: {
    height: 48
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  message: {
    alignSelf: "center",
    color: "#fff"
  }
};

export default LoginScreen;
