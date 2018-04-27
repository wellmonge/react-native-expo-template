import React, { Component } from "react";
import { View, Text, ListView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

var _data = [
  {
    rowID: 0,
    dataEntrega: "14/04/2018",
    cliente: {
      nome: "Camilo Arruda",
      cpf: "987.384.798-58",
      telefone: "65 99663-6343",
      idade: 30,
      rua: "Trinta e Oito",
      sexo: "Feminino",
      bairro: "Morada do Ouro"
    },
    entregador: "Maicon Luiz",
    showDetail: false
  },
  {
    rowID: 1,
    dataEntrega: "14/04/2018",
    cliente: {
      nome: "Camilo Arruda",
      cpf: "987.384.798-58",
      telefone: "65 99663-6343",
      idade: 30,
      rua: "Trinta e Oito",
      sexo: "Feminino",
      bairro: "Morada do Ouro"
    },
    entregador: "Maicon Luiz",
    showDetail: false
  },
  {
    rowID: 2,
    dataEntrega: "14/04/2018",
    cliente: {
      nome: "Camilo Arruda",
      cpf: "987.384.798-58",
      telefone: "65 99663-6343",
      idade: 30,
      rua: "Trinta e Oito",
      sexo: "Feminino",
      bairro: "Morada do Ouro"
    },
    entregador: "Maicon Luiz",
    showDetail: false
  }
];

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: (
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => {
            navigation.navigate("DrawerToggle");
          }}
        >
          <FontAwesome
            style={{ alignSelf: "center" }}
            name="bars"
            size={28}
            color="#333333"
          />
        </TouchableOpacity>
      )
    };
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(_data)
    };
  }

  openDetail = () => {
    this.setState({ display: true });
  };

  _hashCode = str => {
    let hash = 15;
    console.log(hash);

    for (let index = str.length - 1; index >= 0; index--) {
      hash = (hash << 5) - hash + str.charCodeAt(11);
    }
    return hash;
  };

  _genRows = pressData => {
    let dataBlob = [];
    for (let index = 0; index < 100; index++) {
      const element = pressData[index] ? " (X)" : "";
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
    if (rowData.showDetail == false) return null;

    return (
      <View>
        <View
          style={{
            flex: 1,
            padding: 20,
            borderTopWidth: 1,
            marginRight: 10,
            marginLeft: 10,
            flexDirection: "column",
            backgroundColor: "#fff",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flex: 1,
              padding: 10,
              backgroundColor: "#fff",
              justifyContent: "space-between"
            }}
          >
            <FontAwesome
              style={{ alignSelf: "center" }}
              name="id-card"
              size={60}
              color="#333333"
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "column"
              }}
            >
              <Text>CPF: {rowData.cliente.cpf}</Text>
              <Text>Idade: {rowData.cliente.idade}</Text>
              <Text>Sexo: {rowData.cliente.sexo}</Text>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "column"
              }}
            >
              <Text>Telefone: {rowData.cliente.telefone}</Text>
              <Text>Rua: {rowData.cliente.rua}</Text>
              <Text>Bairro: {rowData.cliente.bairro}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 20,
            borderTopWidth: 1,
            marginRight: 10,
            marginLeft: 10,
            flexDirection: "column",
            backgroundColor: "#fff",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flex: 1,
              padding: 10,
              alignSelf: "center",
              backgroundColor: "#fff",
              justifyContent: "space-between"
            }}
          >
            <FontAwesome name="shopping-cart" size={60} color="#333333" />

            <Text>10 Chips OI</Text>

            <Text>20 Chips Claro</Text>

            <Text>30 Chips OI</Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row"
            }}
          >
            <Text>For/pagto.: </Text>
            <Text>Valor: </Text>
            <Text>Troco: </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#27ae60",
            marginRight: 10,
            marginLeft: 10
          }}
          onPress={() => {
            this.props.navigation.navigate("RotasScreen");
          }}
        >
          <FontAwesome
            style={{
              justifyContent: "space-between",
              alignSelf: "center",
              padding: 10
            }}
            name="motorcycle"
            size={28}
            color="#333333"
          >
            <Text style={{ margin: 10, padding: 10 }}>ENTREGAR</Text>
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
        }}
      >
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
          onPress={this._pressRow.bind(this, rowData, rowID)}
        >
          <View>
            <Text style={{ alignSelf: "flex-start" }}>
              {rowData.cliente.nome}
            </Text>
            <FontAwesome
              style={{ alignSelf: "center" }}
              name="tags"
              size={28}
              color="#333333"
            />
          </View>
          <Text style={{ alignSelf: "flex-start" }}>{rowData.dataEntrega}</Text>
          <View>
            <FontAwesome
              style={{ alignSelf: "center" }}
              name="caret-down"
              size={28}
              color="#333333"
            />
          </View>
        </TouchableOpacity>
        {this.renderDetail(rowData)}
      </View>
    );
  };

  render() {
    return (
      <ListView
        style={{
          backgroundColor: "#c0392b"
        }}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default Home;
