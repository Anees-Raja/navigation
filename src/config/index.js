import React, { Component } from 'react';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation'; // 1.0.0-beta.27
import Login from '../screens/Login';
import Cravings from '../screens/Cravings';
import MatchTab from '../screens/MatchTab';
import Settings from '../screens/Settings';
import ChatTab from '../screens/ChatTab';
import ProfileTab from '../screens/ProfileTab';
import NavButton from '../components/NavButton';
import { Button } from 'react-native';

//Match Stack Nav
export const MatchStackNavigator = StackNavigator({
  MatchTab: {
    screen: MatchTab,
    //THIS IS HOW YOU DO IT, DO NOT CHANGE THIS CODE IT WORKS!
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <Button onPress={() => navigation.navigate('Settings')} title="Settings" />
      ),
    })
  },
  Settings: {
    screen: Settings,
    title: 'Settings',
  },
  NavButton: {
    screen: NavButton,
  },
}, {
  headerMode: 'none',
  initialRouteName: 'MatchTab',
});

//Match Tab Nav
const MatchTabNavigator = TabNavigator({
  ProfileTab: {
    screen: ProfileTab,
  },
  ChatTab: {
    screen: ChatTab,
  },
  //Nest inside Tab (which is nested in LoginNavigator)
  MatchStackNavigator: {
    screen: MatchStackNavigator,
    title: 'Matches'
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
  //Nest inside Login Navigator
  MatchTabNavigator: {
    screen: MatchTabNavigator,
  },
}, {
  navigationOptions: {
    headerLeft: null,
  },
  initialRouteName: 'Login'
});

export default LoginNavigator;