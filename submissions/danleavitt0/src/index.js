import element from 'vdom-element'
import vdux from 'vdux'
import createStore from './store'
import {listen} from 'virtual-component'
import {handleOnce} from 'redux-effects-events'
import {initializeApp} from './actions'
import App from './app'

const store = createStore({
  jedi: ''
})

store.dispatch(handleOnce('domready', () => {
  listen(store.dispatch)
  store.dispatch(initializeApp())
  vdux(store, state => <App key='app' state={state.app} {...state}/>, document.getElementById('app'))
}))
