import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';


export default class Login extends Component {

  render() {
    return(
      <View>
        <Text>Login Screen</Text>
        <Button
          title="Cravings"
          onPress={() => this.props.navigation.navigate('Cravings')}
        />
      </View>
    );
  }
}