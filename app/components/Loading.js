import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
}

export const Loading = (props) => {
 
    return (
      <View  style={[styles.container, styles.horizontal]}>
        <ActivityIndicator animating={props.isLoading} size={props.type} color="#00ff00" /> 
      </View>
    )
  
}
