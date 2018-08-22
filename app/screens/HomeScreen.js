import React, { Component } from "react";
import { TouchableOpacity, Platform } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import _data from '../models/dummyData';
import CustomListView from "../components/CustomListView";

import { SearchBar } from 'react-native-elements'

const styles = {
    iconAlign: { alignSelf: "center"},
    drawerToggle: { padding: 20 },
    headerStyle: { backgroundColor: "#fff" },
    headerTitleStyle: { fontWeight: "bold" },
    searchBar: { flex: 1}
}

const test = () => {
    var iconPlatform = (<FontAwesome 
                            style={styles.iconAlign} 
                            name="bars" 
                            size={28} 
                            color="#333333"/>)

    if (0 ==0) {
        iconPlatform = (
            <Ionicons
                name="ios-home"
                size={28} 
                color="#333333"/>
        );
    }
    return (
        <TouchableOpacity
            style={styles.drawerToggle}
            onPress={() => {
            navigation.navigate("DrawerToggle");
        }}>
         <Ionicons
                name="ios-home"
                size={28} 
                color="#333333"/>
        </TouchableOpacity>
    ) 
}

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
       const auth = navigation.getParam('auth');
        
        return {
                headerStyle: styles.headerStyle, 
                headerTintColor: "#000", 
                headerTitleStyle: styles.headerTitleStyle, 
                
                // headerTitle: <View style={{ flex: 2, flexDirection: 'column' }}><SearchBar 
                //             lightTheme 
                //             round
                //             containerStyle={styles.searchBar}
                //             icon={{ type: 'font-awesome', name: 'search' }}
                //             onChangeText={function name(params) { }} 
                //             onClearText={function (params) {}}
                //             placeholder='Buscar...' /></View>,

                headerRight: test()
            };
    };
    

    constructor(props) {
        super(props);
        this.state = {};
    }

    navigateTo = () => {
        this.props
            .navigation
            .navigate("RoutesScreen", {teste: "Fromhome"});
    }

    render() {
        return (<CustomListView data={_data} navigateTo={this.navigateTo} />);
    }
}

export default Home;
