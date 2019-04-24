import {Dimensions, StyleSheet} from 'react-native'
import { normalize } from 'react-native-elements';
import { COLOR } from '../asset';

export const WIDTH = Dimensions.get('screen').width
export const HEIGHT = Dimensions.get('screen').height

export const defaultStyle = StyleSheet.create({
    image: {flex: 1, width: null, height: null},
    fontHeading1: {
        fontSize: normalize(18),
        color: COLOR.white,
        fontWeight: 'bold'
    },
    fontHeading2: {
        fontSize: normalize(12),
        color: COLOR.white
    },
    content: {
        padding: 20
    },
    icon: {
        color: COLOR.disable,
        fontSize: normalize(20)
    },
    horizontalView: { flexDirection: 'row' }
})
export const horizontalPadding = 20
export const verticalPadding = 16