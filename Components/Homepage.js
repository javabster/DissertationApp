import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import BasicStyles from 'DissertationApp/Styles/BasicStyles';
import AlertStyles from 'DissertationApp/Styles/AlertStyles';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
import AdviceScreen from 'DissertationApp/Components/AdviceScreen';
import WarningMarkers from 'DissertationApp/Components/WarningMarkers';
import SvgUri from 'react-native-svg-uri';

export default class Homepage extends Component {
  constructor() {
    super();

    this.alertButtonOnPress = this.alertButtonOnPress.bind(this);
    this.onSendWarning = this.onSendWarning.bind(this);
  }

  render() {
    return (
      <View style={BasicStyles.container}>
        <Button
          title="Alert"
          containerStyle={AlertStyles.button}
          style={AlertStyles.buttonText}
          onPress={this.alertButtonOnPress}>
          <SvgUri
            width="200"
            height="200"
            source={require('DissertationApp/Images/facebook-logo.svg')}
          />
        </Button>
      </View>
    );
  }

  alertButtonOnPress() {
    Alert.alert('SEND CHEMICAL CONTAMINATION WARNING?', null, [
      {
        text: 'SEND',
        onPress: () => {
          console.log('send pressed'), this.onSendWarning();
        },
      },
      { text: 'CANCEL', onPress: () => console.log('cancel pressed') },
    ]);
  }

  onSendWarning() {
    console.log(this.props.screenProps);
    this.props.screenProps.onSendWarning();
    // .push(this.state.coordinates);
    Alert.alert('WARNING SENT', null, [
      {
        text: 'CONTINUE TO ADVICE',
        onPress: () => this.props.navigation.navigate('Advice'),
      },
    ]);
  }
}
