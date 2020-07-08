import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import loggerMiddleware from './loggerMiddleware'

const middlewares = [thunk, loggerMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancer]
const composedEnhancers = compose(...enhancers)
const store = createStore(rootReducer(), composedEnhancers)

export default store
