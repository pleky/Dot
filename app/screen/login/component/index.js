import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
// import console = require('console');

export default class Login extends Component {
  render() {
    return (
      <View>
        <Button 
          title='test'
          onPress={() => this.props.navigation.navigate('registerScreen')}
        />
      </View>
    )
  }
}
