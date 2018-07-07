import React, {Component} from "react";
import {TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import _data from '../models/dummyData';
import CustomListView from "../components/CustomListView";

const styles = {
    iconAlign: { alignSelf: "center"},
    drawerToggle: { padding: 20 },
    headerStyle: { backgroundColor: "#fff"},
    headerTitleStyle: {fontWeight: "bold"},
}

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
                headerStyle: styles.headerStyle, 
                headerTintColor: "#000", 
                headerTitleStyle: styles.headerTitleStyle, 
                headerLeft: (
                            <TouchableOpacity
                                style={styles.drawerToggle}
                                onPress={() => {
                                navigation.navigate("DrawerToggle");
                            }}>
                                <FontAwesome 
                                    style={styles.iconAlign} 
                                    name="bars" 
                                    size={28} 
                                    color="#333333"/>
                            </TouchableOpacity>
            )};
    };
    

    constructor(props) {
        super(props);
        this.state = {};
    }

    navigateTo = () => {
        this.props
            .navigation
            .navigate("RoutesScreen");
    }

    render() {
        return (<CustomListView data={_data} navigateTo={this.navigateTo} />);
    }
}

export default Home;
