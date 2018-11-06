import React, { Component } from 'react'
import {
  View, Text, ListView, TouchableOpacity,
} from 'react-native'

class SignUpScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={someFunction} />
        <FormValidationMessage>Error message</FormValidationMessage>

      </View>
    )
  }
}

export default SignUpScreen
