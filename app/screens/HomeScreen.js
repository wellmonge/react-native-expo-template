import React, { Component } from 'react'
import { TouchableOpacity, Platform,View } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { SearchBar } from 'react-native-elements'
import _data from '../models/dummyData'
import CustomListView from '../components/CustomListView'


const styles = {
  iconAlign: { alignSelf: 'center' },
  drawerToggle: { padding: 20 },
  headerStyle: { backgroundColor: '#fff' },
  headerTitleStyle: { fontWeight: 'bold' },
  searchBar: { flex: 1 },
}

const headerLeft = (navigation) => {
  let iconPlatform = (
    <FontAwesome
      style={styles.iconAlign}
      name="bars"
      size={28}
      color="#333333"
    />
  )

  if (Platform.OS === 'ios') {
    iconPlatform = (
      <Ionicons
        name="ios-home"
        size={28}
        color="#333333"
      />
    )
  }
  return (
    <TouchableOpacity
      style={styles.drawerToggle}
      onPress={() => {
        navigation.navigate('DrawerToggle')
      }}
    >
      {iconPlatform}
    </TouchableOpacity>
  )
}

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
      const auth = navigation.getParam('auth')

      return {
        headerStyle: styles.headerStyle,
        headerTintColor: '#000',
        headerTitleStyle: styles.headerTitleStyle,

        headerTitle: <View style={{ flex: 2, flexDirection: 'column' }}><SearchBar
                    lightTheme
                    round
                    containerStyle={styles.searchBar}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    onChangeText={function name(params) { }}
                    onClearText={function (params) {}}
                    placeholder='Buscar...' /></View>,

        headerRight: headerLeft(navigation),
      }
    };


    constructor(props) {
      super(props)
      this.state = {}
    }

    

    navigateTo = () => {
      this.props
        .navigation
        .navigate('RoutesScreen', { teste: 'Fromhome' })
    }

    render() {
      return (<CustomListView data={_data} navigateTo={this.navigateTo} />)
    }
}

export default Home
