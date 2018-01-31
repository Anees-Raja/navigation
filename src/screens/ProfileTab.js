import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default class ProfileTab extends Component {
  
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'Profile',
    );
  };

  render() {
    return(
      <View>
        <Text>Profile Tab</Text>
        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}