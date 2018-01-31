import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation'; // 1.0.0-beta.27
import Login from '../screens/Login';
import Cravings from '../screens/Cravings';
import MatchTab from '../screens/MatchTab';
import Settings from '../screens/Settings';
import ChatTab from '../screens/ChatTab';
import ProfileTab from '../screens/ProfileTab';



//Match Tab Nav
const MatchTabNavigator = TabNavigator({
  MatchTab: {
    screen: MatchTab,
    navigationOptions: {
      title: 'Matches'
    },
  },
  ProfileTab: {
    screen: ProfileTab,
    navigationOptions: {
      title: 'Profile'
    },
  },
  ChatTab: {
    screen: ChatTab,
    navigationOptions: {
      title: 'Chats',
    },
  },
}, {
  headerMode: 'none',
  initialRouteName: 'MatchTab',
});


//Main Nav
const LoginNavigator = StackNavigator({
  //  MatchTab: {
  //   screen: MatchTab,
  // },
  Login: {
    screen: Login,
  },
  Cravings: {
    screen: Cravings,
  },
  Settings: {
    screen: Settings,
  },
  // ProfileTab: {
  //   screen: ProfileTab,
  // },
  // ChatTab: {
  //   screen: ChatTab,
  // }
  MatchTabNavigator: {
    screen: MatchTabNavigator,
  },
}, {
  headerMode: 'none',
  initialRouteName: 'Login',
});

export default LoginNavigator;