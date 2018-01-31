import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default class Settings extends Component {
  
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'Settings',
    );
  };

  render() {
    return(
      <View>
        <Text>Settings Screen</Text>
        <Button
          title="Matches (Home)"
          onPress={() => this.props.navigation.navigate('MatchTab')}
        />
      </View>
    );
  }
}