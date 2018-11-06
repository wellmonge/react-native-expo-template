import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class SignUpScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={() => {}} />
        <FormValidationMessage>Error message</FormValidationMessage>

      </View>
    )
  }
}

export default SignUpScreen
