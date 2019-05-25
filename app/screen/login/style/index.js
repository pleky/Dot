import { StyleSheet } from 'react-native'
import { HEIGHT, horizontalPadding, verticalPadding } from '../../../constant';
import { COLOR } from '../../../asset';

export default style = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: horizontalPadding, paddingVertical: verticalPadding },
    logo: { width: 205, height: 103, overflow: 'hidden', alignSelf: 'center', marginTop: HEIGHT * 0.1 },
    form_container: { marginTop: 58 },
    form_input: { backgroundColor: COLOR.white, borderRadius: 3 },
    form_button: {marginTop: 13, backgroundColor: COLOR.success},
    footer: { alignSelf: 'flex-end', marginTop: 20 }
})