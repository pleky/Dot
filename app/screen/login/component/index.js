import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import { IMAGE, COLOR } from '../../../asset';
import { HEIGHT, defaultStyle } from '../../../constant';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'native-base';
import style from '../style';

export default class Register extends Component {

  static navigationOptions = ({navigations}) => ({
    header: null
  })

  _handleSubmit = () => {
   this.props.navigation.navigate('homeScreen')
  }
  render() {
    return (
      <ImageBackground style={style.container} source={IMAGE.background}>
        <View style={style.logo}>
          <Image style={defaultStyle.image} resizeMode='contain' source={IMAGE.logo}/>
        </View>

        {/* form */}
          <View style={style.form_container}>
            <TextInput placeholder="username" style={style.form_input}/>
            <TextInput placeholder="password" secureTextEntry style={[style.form_input, { marginTop: HEIGHT * 0.01}]}/>
            <Button block style={style.form_button} onPress={() => this._handleSubmit()}>
              <Text>Login</Text>
            </Button>
          </View>
        {/* form end */}

        {/* footer */}
          <View style={style.footer}>
            <Text>Have a account ? <Text>Login</Text></Text>
          </View>
        {/* footer end */}
      </ImageBackground>
    )
  }
}
