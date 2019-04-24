import { StyleSheet } from 'react-native'
import { COLOR } from '../../asset';
import { HEIGHT } from '../../constant';

export default style = StyleSheet.create({
    container: {flex: 1},
    image_container: { 
        width: 75, 
        height: 75, 
        overflow: 'hidden', 
        borderRadius: 75 / 2, 
        borderWidth: 1, 
        borderColor: COLOR.white, 
        alignSelf: 'center', 
        marginTop: HEIGHT * 0.06 
    },
    icon: { 
        color: COLOR.white, 
        marginLeft: 8, 
        marginTop: 16 
    }
})