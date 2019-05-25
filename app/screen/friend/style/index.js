import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  card_container: { overflow: 'hidden', height: 242, width: '100%' },
  card_text__container: { paddingHorizontal: 14, paddingVertical: 14 },
  card_text__title: { color: '#000000', fontSize: 17, fontWeight: 'bold', marginBottom: 12 },
  card_text__tag:{ marginRight: 10 },
  card_icon__container: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14, paddingHorizontal: 14 },
  card_icon__left: { flexDirection: 'row', justifyContent: 'space-around', width: '40%' }
})

export default styles
