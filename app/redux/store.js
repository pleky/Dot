import { createStore, applyMiddleware, compose } from 'redux'

import appReducer from './reducer'
import middlewares from './middleware'

const store = createStore(appReducer, applyMiddleware(...middlewares))

export default store