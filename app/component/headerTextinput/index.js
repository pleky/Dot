import React from 'react'
import { Text, View} from 'react-native'
import { Container, Header, Left, Icon, Body, Segment, Item, Input, Right } from 'native-base';
import { defaultStyle } from '../../constant';
import { COLOR } from '../../asset';
import style from './style';

const Component = ({onPress, onChangeText, value, title}) => {
  return (
    <View>
        <Header hasSegment style={style.header_container}>
          <Left>
            <Icon name="md-menu" type="Ionicons" onPress={onPress} style={{ color: COLOR.white }}/>
          </Left>
          <Body style={style.header_title}>
            <Text style={defaultStyle.fontHeading1}>{title}</Text>
          </Body>
          <Right />
        </Header>
          <Segment style={style.header_segment}>
            <Item regular style={style.header_input}>
              <Icon name="search" type="FontAwesome" style={style.header_input__icon}/>
              <Input onChangeText={onChangeText} value={value}/>
            </Item>
          </Segment>
      </View>
  )
}

export default Component

