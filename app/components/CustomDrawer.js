
import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
}
  from 'react-native'
import {
  DrawerItems,
  SafeAreaView,
  StackActions,
  NavigationActions,
}
  from 'react-navigation'
import { Avatar, SearchBar }
  from 'react-native-elements'

const styles = {
  container: {
    flex: 1,
  },
}

export const CustomDrawer = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={{ flex: 1, margin: 5 }}>
        <Avatar
          large
          rounded
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <Text>Camilla Chann</Text>

      </View>
      <SearchBar
        lightTheme
        onChangeText={function name(params) {

        }}
        onClearText={function (params) {

        }}
        placeholder="Buscar..."
      />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)
