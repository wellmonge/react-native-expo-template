import React, {Component} from 'react';
import { View, Text, ListView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = {
    text:{
        alignSelf: "flex-start"
    },
    text2:{
        margin: 10,
        padding: 10
    },
    icon:{
        alignSelf: "center"
    },   
    icon2:{
        justifyContent: "space-between",
        alignSelf: "center",
        padding: 10
    },
    containerDetail: {
        flex: 1,
        padding: 20,
        borderTopWidth: 1,
        marginRight: 10,
        marginLeft: 10,
        flexDirection: "column",
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    cardDetail: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    cardSecSection:{
        flex: 1,
        padding: 10,
        alignSelf: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    lineInfo:{
        justifyContent: "space-between",
        flexDirection: "column"
    },
    lineSecSection:{
        justifyContent: "space-between",
        flexDirection: "row"
    },
    containerInfo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    confirmButton: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#27ae60",
        marginRight: 10,
        marginLeft: 10
    }    
}

const CustomItemDetail = (props) => {        
    const rowData = props.rowData;
    if (rowData.showDetail == false) 
            return null;
    
    const navigateTo = props.navigateTo;
    return (
        <View>
            <View style={styles.containerDetail}>
                <View style={styles.cardDetail}>
                    <FontAwesome style={styles.icon} name="id-card" size={60} color="#333333"/>
                </View>

                <View style={styles.containerInfo}>
                    <View style={styles.lineInfo}>
                        <Text>CPF: {rowData.cliente.cpf}</Text>
                        <Text>Idade: {rowData.cliente.idade}</Text>
                        <Text>Sexo: {rowData.cliente.sexo}</Text>
                    </View>
                    <View style={styles.lineInfo}>
                        <Text>Telefone: {rowData.cliente.telefone}</Text>
                        <Text>Rua: {rowData.cliente.rua}</Text>
                        <Text>Bairro: {rowData.cliente.bairro}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerDetail}>
                <View style={styles.cardSecSection}>
                    <FontAwesome name="shopping-cart" size={60} color="#333333"/>

                    <Text>10 Chips OI</Text>

                    <Text>20 Chips Claro</Text>

                    <Text>30 Chips OI</Text>
                </View>
                <View style={styles.lineSecSection}>
                    <Text>For/pagto.:
                    </Text>
                    <Text>Valor:
                    </Text>
                    <Text>Troco:
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.confirmButton}
                onPress={navigateTo}>
                <FontAwesome
                    style={styles.icon2}
                    name="motorcycle"
                    size={28}
                    color="#333333">
                    <Text
                        style={styles.text2}>ENTREGAR</Text>
                </FontAwesome>
            </TouchableOpacity>
        </View>        
        
    );
}

export default CustomItemDetail;