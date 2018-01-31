import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default class ChatTab extends Component {
  
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'Chat',
    );
  };

  render() {
    return(
      <View>
        <Text>Chat Tab</Text>
        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}