import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Settings extends Component {

  render() {
    return(
      <View>
        <Text>Settings Screen</Text>
        <Button
          title="Matches"
          onPress={() => this.props.navigation.navigate('MatchTab')}
        />
      </View>
    );
  }
}