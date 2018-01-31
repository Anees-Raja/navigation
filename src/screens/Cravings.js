import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default class Cravings extends Component {

  render() {
    return(
      <View>
        <Text>Cravings Screen</Text>
        <Button
          title="Matches (Home)"
          onPress={() => this.props.navigation.navigate('MatchTab')}
        />
      </View>
    );
  }
}