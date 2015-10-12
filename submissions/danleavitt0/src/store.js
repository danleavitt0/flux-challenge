/**
 * Imports
 */

import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import effects from 'redux-effects'
import events from 'redux-effects-events'
import multi from 'redux-multi'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import fetch from 'redux-effects-fetch'

/**
 * Middleware
 */

 const middleware = [
   multi,
   effects,
   fetch,
   promiseMiddleware,
   events(),
   logger
 ]

/**
 * Store
 */

function configureStore (initialState) {
  return applyMiddleware(...middleware)(createStore)(reducer, initialState)
}

/**
 * Exports
 */

export default configureStore
