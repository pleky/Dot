import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { IMAGE } from '../../../asset';

export default class Register extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={IMAGE.background}>

      </ImageBackground>
    )
  }
}
