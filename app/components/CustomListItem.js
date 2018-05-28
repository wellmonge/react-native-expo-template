import React, {Component} from 'react';
import { View,Text, TouchableOpacity  } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CustomItemDetail from "./CustomItemDetail";

const styles = {
    container: {
        flex: 1,
        padding: 10,
        flexDirection: "column"
    },
    button: {
        flex: 1,
        padding: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    text:{
        alignSelf: "flex-start"
    },
    icon:{
        alignSelf: "center"
    },
}

const CustomListItem = (props) => {
    const rowID = props.rowID;
    const pressRow = props._pressRow;
    const rowData = props.rowData;

    return(
        <View>
            <View
                key={rowID}
                style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                    pressRow
                    .bind(rowData, rowID)}>
                    <View>
                        <Text
                            style={styles.text}>
                            {rowData.cliente.nome}
                        </Text>
                        <FontAwesome
                            style={styles.icon}
                            name="tags"
                            size={28}
                            color="#333333"/>
                    </View>
                    <Text
                        style={styles.text}>{rowData.dataEntrega}</Text>
                    <View>
                        <FontAwesome
                            style={styles.icon}
                            name="caret-down"
                            size={28}
                            color="#333333"/>
                    </View>
                </TouchableOpacity>
                <CustomItemDetail rowData={rowData} />
            </View>
            
        </View>
    );
}

export default CustomListItem;
