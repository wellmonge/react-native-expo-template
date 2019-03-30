import React, { Component } from 'react'
import { View, Platform, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import {
  MapView, Constants, Location, Permissions, Marker,
} from 'expo'

const styles = {
  iconAlign: { alignSelf: 'center' },
  drawerToggle: { padding: 20 },
  headerStyle: { backgroundColor: '#fff' },
  headerTitleStyle: { fontWeight: 'bold' },
}

class RoutesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const teste = navigation.getParam('teste')
    console.log(teste)
    return {
      headerStyle: styles.headerStyle,
      headerTintColor: '#000',
      headerTitleStyle: styles.headerTitleStyle,
      headerRight: (
        <TouchableOpacity
          style={styles.drawerToggle}
          onPress={() => {
            navigation.navigate('DrawerToggle')
          }}
        >
          <FontAwesome
            style={styles.iconAlign}
            name="bars"
            size={28}
            color="#333333"
          />
        </TouchableOpacity>
      ),
    }
  };

  constructor(props) {
    super(props)
    this.state = {
      location: null,
    }
  }

  _getInitialRegion() {
    const latitude = 37.78825
    const longitude = -122.4324
    const latitudeDelta = 0.0922
    const longitudeDelta = 0.0421
    return {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    }
  }

  _getRegionLocation() {
    const local = this.state.location
    if (local && local.coords) {
      latitude = local.coords.latitude
      longitude = local.coords.longitude
      return this._getRegionForCoordinates([{ latitude, longitude }])
    }

    return null
  }

  _getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      alert('Permission to access location was denied')
    }

    const location = await Location.getCurrentPositionAsync({})

    if (location) {
      this.setState({ location })
    }
  };

  _getRegionForCoordinates(points) {
    // points should be an array of { latitude: X, longitude: Y }
    let minX; let maxX; let minY; let
      maxY;

    // init first point
    ((point) => {
      minX = point.latitude
      maxX = point.latitude
      minY = point.longitude
      maxY = point.longitude
    })(points[0])

    // calculate rect
    points.map((point) => {
      minX = Math.min(minX, point.latitude)
      maxX = Math.max(maxX, point.latitude)
      minY = Math.min(minY, point.longitude)
      maxY = Math.max(maxY, point.longitude)
    })

    const midX = (minX + maxX) / 2
    const midY = (minY + maxY) / 2
    const deltaX = (maxX - minX)
    const deltaY = (maxY - minY)

    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY,
    }
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      alert('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
    } else {
      this._getLocationAsync()
    }
  }

  onUserLocationChange(coordinate) {
  }

  onPressMap(coordinate) {
  }

  onMapReady() {
  }

  renderMarker() {
    const location = this.state.location

    if (location && location.coords) {
      return (
        <Marker
          coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
          title="marker.title"
          description="marker.description"
        />)
    }
    return (null)
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#c0392b',
        }}
      >
        <MapView
          style={{ flex: 1 }}
          initialRegion={this._getInitialRegion()}
          region={this._getRegionLocation()}
          onMapReady={this.onMapReady.bind(this)}
          onPress={this.onPressMap.bind(this)}
          showsUserLocation
          showsPointsOfInterest
          onUserLocationChange={this.onUserLocationChange.bind(this)}
        />

      </View>
    )
  }
}

export default RoutesScreen
