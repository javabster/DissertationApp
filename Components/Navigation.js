import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Homepage from 'DissertationApp/Components/Homepage';
import MapScreen from 'DissertationApp/Components/MapScreen';
import AdviceScreen from 'DissertationApp/Components/AdviceScreen';

const TabBar = TabNavigator(
  {
    Home: { screen: Homepage },
    Map: { screen: MapScreen },
    Advice: { screen: AdviceScreen },
  },
  {
    tabBarOptions: {
      activeTintColor: 'yellow',
      activeBackgroundColor: 'black',
      inactiveBackgroundColor: 'yellow',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 20,
      },
    },
  },
);

export default TabBar;
