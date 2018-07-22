
import React, { Component } from "react";
import {
    ScrollView,
    Text,
    View
  } from "react-native";
import { DrawerItems, SafeAreaView, StackActions, NavigationActions } from 'react-navigation';

import { Avatar } from "react-native-elements";



const styles = {
  container: {
    flex: 1,
  },
};

export const CustomDrawer = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={{flex:1, margin:5}}>
            <Avatar
            large
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            />
            <Text>Header</Text>
        
        </View>
        <DrawerItems {...props} />
        <View>
            <Avatar
            small
            rounded
            icon={{name: 'menu'}}
            onPress={() => {

                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
                });
                props.navigation.dispatch(resetAction);
            }}
            activeOpacity={0.7}
            containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
            />

            <Text>LogOut</Text>
        
        </View>
        
    
    </SafeAreaView>
  </ScrollView>
);

