/**
 * Imports
 */

import ephemeral from 'redux-ephemeral'

/**
 * Reducer
 */

function reducer (state, action) {
  return ephemeral(state, action)
}

/**
 * Utilities
 */

function updateArrayItem (arr, idx, fn) {
  return arr.map((item, curIdx) =>
    idx === curIdx
      ? fn(item)
      : item)
}

/**
 * Exports
 */

export default reducer
