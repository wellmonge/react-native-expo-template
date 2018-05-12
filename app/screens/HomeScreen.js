import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import styles from './HomeStyle';
import _data from './models/dummyData';
import CustomListView from "../components/CustomListView";

class Home extends Component {
    static navigationOptions = ({navigation}) => {
        return {headerStyle: styles.headerStyle, headerTintColor: "#000", headerTitleStyle: styles.headerTitleStyle, headerLeft: (
                <TouchableOpacity
                    style={styles.drawerToggle}
                    onPress={() => {
                    navigation.navigate("DrawerToggle");
                }}>
                    <FontAwesome style={styles.iconAlign} name="bars" size={28} color="#333333"/>
                </TouchableOpacity>
            )};
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<CustomListView data={_data}/>);
    }
}

export default Home;
