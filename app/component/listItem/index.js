import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'native-base'
import { defaultStyle } from '../../constant';
import { COLOR } from '../../asset';

const component = ({ image, text, status = false }) => {
    return (
        <View style={[defaultStyle.horizontalView, { borderBottomWidth: 1, borderBottomColor: COLOR.disable, padding: 20, justifyContent: 'space-between' }]}>
            <View style={[defaultStyle.horizontalView, {width: '50%'}]}>
                <View style={{ width: 50, height: 50, borderRadius: 50 / 2, overflow: 'hidden' }}>
                    <Image source={image} resizeMode="contain" style={defaultStyle.image} />
                </View>
                <Text style={{ marginLeft: 31, alignSelf: 'center', color: COLOR.black }}>{text}</Text>
            </View>
            <Button style={{ 
                    backgroundColor: status ? COLOR.button_success : COLOR.white, 
                    borderRadius: 5, 
                    borderColor: status ? COLOR.button_success : COLOR.info,
                    borderWidth: 1,
                    width: 80,
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}>
                    <Text style={{ color: status ? COLOR.white : COLOR.info }}>{status ? 'Unfollow' : 'Follow'}</Text>
            </Button>
        </View>
    )
}

export default component
