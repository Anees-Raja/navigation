import React, { Component } from 'react';
import { Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'; // 1.0.0-beta.27
import Login from '../screens/Login';
import Cravings from '../screens/Cravings';
import MatchTab from '../screens/MatchTab';
import Settings from '../screens/Settings';
import ChatTab from '../screens/ChatTab';
import ProfileTab from '../screens/ProfileTab';

export const MatchStackNavigator = StackNavigator({
  MatchTab: {
    screen: MatchTab,
  },
  Settings: {
    screen: Settings,
  },
}, {
  headerMode: 'none',
});

//Match Tab Nav
const MatchTabNavigator = TabNavigator({
  ProfileTab: {
    screen: ProfileTab,
  },
  ChatTab: {
    screen: ChatTab,
  },
  MatchTab: {
    screen: MatchTab,
  },
}, {
  initialRouteName: 'ProfileTab',
  tabBarPosition: 'bottom', //has to be lowercase 'bottom' or 'top'
});


//Login Stack Nav
const LoginNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Cravings: {
    screen: Cravings,
    navigationOptions: {
      title: 'Cravings'
    }
  },
  MatchTabNavigator: {
    screen: MatchTabNavigator,
  },
  MatchStackNavigator: {
    screen: MatchStackNavigator,
  },
}, {
  navigationOptions: {
    headerLeft: null,
  },
  initialRouteName: 'Login'
});

export default LoginNavigator;