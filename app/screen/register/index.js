import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Component from './component'
import * as action from './action'



const mapStateToProps = (state) => ({
  register: state.registerReducer
})

const mapDispatchToProps = {
  actions : bindActionCreators(action)
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
