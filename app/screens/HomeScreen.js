import React, { Component } from "react";
import { TouchableOpacity, View, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const uuid = require('uuid/v1');
import { Card, Button, Avatar, Text, SearchBar } from 'react-native-elements'


const styles = {
    iconAlign: { alignSelf: "center"},
    drawerToggle: { padding: 20 },
    headerStyle: { backgroundColor: "#fff"},
    headerTitleStyle: {fontWeight: "bold"},
}

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
       const auth = navigation.getParam('auth');
        
        return {
                headerStyle: styles.headerStyle, 
                headerTintColor: "#000", 
                headerTitleStyle: styles.headerTitleStyle, 
                headerTitle: 'AMCOM',
                headerRight: (
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
        this.state = {
            collaborator : []
        };
    }
    
    _keyExtractor = (item, index) => item.Login;
    
    _retrieveData = async ()=> {
        try {
            let response = await fetch(
                'https://aniversario.amcom.com.br/sistema/estacionamento'
            );
            let responseJson = await response.json();
            this.setState({collaborator: responseJson});
        } catch (error) {
          console.error(error);
        }
      }

    componentDidMount(){
        this._retrieveData();  
    }

    render() {
        return (
            <View style={{ backgroundColor: '#2980b9' }}> 
                <SearchBar
                lightTheme
                onChangeText={function name(params) {

                }}
                onClearText={function (params) {

                }}
                placeholder='Filtrar' />
                <FlatList
                    extraData={this.state.selected}
                    keyExtractor={this._keyExtractor}
                    data={this.state.collaborator}
                    renderItem={({item}) =>
                    {
                    if (!item) return null;
                    return <Card
                        title={item.Nome}>
                        <View style={{flex:1, margin:10}}>
                            <Avatar
                                large
                                rounded
                                source={{uri: "https://aniversario.amcom.com.br/sistema/FotosColaboradores/" + item.NomeFoto}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' , margin:10}}>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Text>
                                    {'E-mail:'}
                                </Text> 
                                <Text>
                                    {'Telefone:'}
                                </Text> 
                                <Text>
                                    {'Setor:'}
                                </Text>
                            </View>                        
                            <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Text>
                                    {item.Email ? item.Email : 'Não Informada'}
                                </Text> 
                                <Text>

                                    {item.Telefone ? item.Telefone : 'Não Informado'}
                                    
                                </Text> 
                                <Text>
                                    {item.Departamento ? item.Departamento : 'Não Informado'}
                                </Text>
                            </View>
                        </View>
                        <Button
                            icon={{name: 'code'}}
                            backgroundColor='#e67e22'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Visualizar' />
                    </Card>
                    }}
                />
            </View>
        );
    }
}

export default Home;
