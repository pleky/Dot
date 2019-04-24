import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Component from './component'
import * as action from './action'



const mapStateToProps = (state) => ({
  home: state.homeReducer
})

const mapDispatchToProps = {
  actions : bindActionCreators(action)
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
