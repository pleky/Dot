import { combineReducers } from 'redux'

import loginReducer from '../screen/login/reducer'
import registerReducer from '../screen/register/reducer'
import homeReducer from '../screen/home/reducer'

const appReducer = combineReducers({
    loginReducer,
    registerReducer,
    homeReducer
})

export default appReducer