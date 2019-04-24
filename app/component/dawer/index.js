import React from 'react'
import { ImageBackground, Image, View, Text } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGE, COLOR } from '../../asset';
import { defaultStyle, HEIGHT } from '../../constant';
import { Icon } from 'native-base';
import style from './style';

const _closeDrawer = (navigation) => {
    navigation.closeDrawer()
}

const Component = (props) => {
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={IMAGE.drawerBg} style={style.container} resizeMode="cover">
                <Icon name="close" style={style.icon} onPress={() => _closeDrawer(props.navigation)}/>
                <View style={{ alignItems: 'center' }}>
                    <View style={style.image_container}>
                        <Image
                            source={IMAGE.ava}
                            style={[defaultStyle.image]}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={[defaultStyle.fontHeading1, {marginTop: 8}]}>Ariana Grande</Text>
                    <Text style={[defaultStyle.fontHeading2, { marginTop: 5, marginBottom: 12 }]}>@arianagrande</Text>
                </View>
                <ScrollView>
                    <DrawerItems {...props} activeLabelStyle={{color: COLOR.white}} labelStyle={{ color: COLOR.white }}/>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Component
