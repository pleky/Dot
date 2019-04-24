import { StyleSheet } from 'react-native'
import { COLOR } from '../../asset';

export default style = StyleSheet.create({
    header_container: { backgroundColor: COLOR.aqua },
    header_title: { justifyContent: 'center', alignItems: 'center'},
    header_segment: { paddingHorizontal: 8, paddingBottom: 8, backgroundColor: COLOR.aqua },
    header_input: { backgroundColor: COLOR.aqua_darker, width: '100%', borderRadius: 3, borderColor:  COLOR.aqua_darker},
    header_input__icon: { color: COLOR.aqua, fontSize: 20 }
})