
import React, { Component } from "react";
import {
    ScrollView,
    Text,
    View
} 
    from "react-native";
import { 
    DrawerItems, 
    SafeAreaView, 
    StackActions, 
    NavigationActions 
} 
    from 'react-navigation';
import { Avatar, SearchBar } 
    from "react-native-elements";

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
            source={{uri: "https://aniversario.amcom.com.br/sistema/FotosColaboradores/wellinton.monge.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            />
            <Text>Wellinton Monge</Text>
        
        </View>

        <DrawerItems {...props} />
    
    </SafeAreaView>
  </ScrollView>
);

