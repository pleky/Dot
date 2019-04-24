import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider, connect } from 'react-redux';

import store from './app/redux/store'
import Navigation from './app/router'

export default class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <Navigation />
     </Provider>
    )
  }
}
