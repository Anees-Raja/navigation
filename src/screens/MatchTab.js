import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ProfileTab from '../screens/ProfileTab';
import ChatTab from '../screens/ChatTab';

export default class MatchTab extends Component {
  
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'Matches <3',
    );
  };

  render() {
    return(
      <View>
        <Text>Match Tab</Text>
        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}