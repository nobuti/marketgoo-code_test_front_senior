const logger = store => next => action => {
  if (typeof action !== 'function') {
    console.group(action.type)
    console.info('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  } else {
    return next(action)
  }
}

export default logger
