import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BasicStyles from 'DissertationApp/Styles/BasicStyles';
import MapView from 'react-native-maps';
import MapStyles from 'DissertationApp/Styles/MapStyles';
import WarningMarkers from 'DissertationApp/Components/WarningMarkers';

export default class MapScreen extends Component {
  render() {
    return (
      <MapView showsUserLocation="true" style={MapStyles.map}>
        {this.props.screenProps.markers.map(
          marker => <MapView.Marker coordinate={marker.coordinates} />,
          console.log('marker'),
        )}
      </MapView>
    );
  }
}
