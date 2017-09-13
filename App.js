import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Components/Homepage';
import TabBar from './Components/Navigation';
import MapScreen from './Components/MapScreen';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [
        {
          title: 'M1',
          coordinates: { latitude: 37.78825, longitude: -122.4324 },
        },
        {
          title: 'M2',
          coordinates: { latitude: 39.78825, longitude: -122.4324 },
        },
      ],
    };
    this.sendWarning = this.sendWarning.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          ...this.state,
          coordinates: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          },
        });
      },
      err => {
        console.log(err);
      },
      {
        timeout: 10000,
      },
    );
  }

  sendWarning() {
    this.setState({
      ...this.state,
      markers: [
        ...this.state.markers,
        {
          title: 'M3',
          coordinates: this.state.coordinates,
        },
      ],
    });
  }

  render() {
    console.log(this.state.markers);
    return (
      <TabBar
        screenProps={{
          ...this.state,
          onSendWarning: this.sendWarning,
        }}
      />
    );
  }
}
