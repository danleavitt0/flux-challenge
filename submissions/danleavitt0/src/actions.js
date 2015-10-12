import {bind} from 'redux-effects'
import {fetch} from 'redux-effects-fetch'

const api = 'http://127.0.0.1:3000'
const SCROLL_UP = 'SCROLL_UP'
const SCROLL_DOWN = 'SCROLL_DOWN'
const HYDRATE_STATE = 'HYDRATE_STATE'

function initializeApp () {
  return fetchJedi()
}

function fetchJedi () {
  return bind(fetch(api + '/dark-jedis', {
    method: 'GET'
  }), hydrateJedi)
}

function hydrateJedi (jedi) {
  console.log(jedi)
}

function hydrateState (state) {
  return {
    type: HYDRATE_STATE,
    payload:state
  }
}

export default {
  initializeApp,
  hydrateState,

  HYDRATE_STATE
}
