import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default class MatchTab extends Component {
  render() {
    return(
      <View>
        <Text>Match Tab</Text>
        {/* <Button 
          onPress={() => this.props.navigation.navigate('Settings')}
          title="Settings"
        /> */}
      </View>
    );
  }
}