import React, {Component} from 'react';
import { View, Text, ListView, TouchableOpacity } from "react-native";

class CustomListView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data)
        };
    }

    openDetail = () => {
        this.setState({display: true});
    };

    _genRows = pressData => {
        let dataBlob = [];
        for (let index = 0; index < 100; index++) {
            const element = pressData[index]
                ? " (X)"
                : "";
            dataBlob.push("Cell " + index + element);
        }
        return dataBlob;
    };

    _pressRow = (rowData, rowID) => {
        _data[rowID].showDetail = !rowData.showDetail;

        this.setState({
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(_data)
        });
    };

    renderDetail = rowData => {
        if (rowData.showDetail == false) 
            return null;
        
        return (
            <View>
                <View style={styles.containerDetail}>
                    <View style={styles.cardDetail}>
                        <FontAwesome style={styles.iconAlign} name="id-card" size={60} color="#333333"/>
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
                    <View style={cstyles.cardSecSection}>
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
                    onPress={() => {
                    this
                        .props
                        .navigation
                        .navigate("RotasScreen");
                }}>
                    <FontAwesome
                        style={{
                        justifyContent: "space-between",
                        alignSelf: "center",
                        padding: 10
                    }}
                        name="motorcycle"
                        size={28}
                        color="#333333">
                        <Text
                            style={{
                            margin: 10,
                            padding: 10
                        }}>ENTREGAR</Text>
                    </FontAwesome>
                </TouchableOpacity>
            </View>
        );
    };

    renderRow = (rowData, sectionID, rowID, highlightRow) => {
        return (
            <View
                key={rowID}
                style={{
                flex: 1,
                padding: 10,
                flexDirection: "column"
            }}>
                <TouchableOpacity
                    style={{
                    flex: 1,
                    padding: 10,
                    marginTop: 10,
                    marginRight: 10,
                    marginLeft: 10,
                    flexDirection: "row",
                    backgroundColor: "#fff",
                    justifyContent: "space-between"
                }}
                    onPress={this
                    ._pressRow
                    .bind(this, rowData, rowID)}>
                    <View>
                        <Text
                            style={{
                            alignSelf: "flex-start"
                        }}>
                            {rowData.cliente.nome}
                        </Text>
                        <FontAwesome
                            style={{
                            alignSelf: "center"
                        }}
                            name="tags"
                            size={28}
                            color="#333333"/>
                    </View>
                    <Text
                        style={{
                        alignSelf: "flex-start"
                    }}>{rowData.dataEntrega}</Text>
                    <View>
                        <FontAwesome
                            style={{
                            alignSelf: "center"
                        }}
                            name="caret-down"
                            size={28}
                            color="#333333"/>
                    </View>
                </TouchableOpacity>
                {this.renderDetail(rowData)}
            </View>
        );
    };

    render() {
        return (<ListView
            style={{
            backgroundColor: "#c0392b"
        }}
            dataSource={this.props.dataSource}
            renderRow={this.renderRow}/>);
    }
}

export default CustomListView;