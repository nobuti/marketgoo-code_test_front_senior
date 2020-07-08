export const required = value => {
  if (value == null) {
    return false
  }

  return value.trim().length > 0
}

export const moreThan = length => {
  return value => {
    if (value == null) {
      return false
    }

    return value.trim().length >= length
  }
}

export const equalOrBiggerThan = n => {
  return value => {
    if (value == null) {
      return false
    }

    if (isNaN(value)) {
      return false
    }

    if (typeof value === 'string' && value === '') {
      return false
    }

    return +value >= n
  }
}

export const anyError = error => {
  return Object.keys(error).length > 0
}

export const getError = (error, key) => error[key]

export const validate = (state, validations) => {
  return Object.keys(validations).reduce((memo, key) => {
    const rules = validations[key]
    const value = state[key]
    const valid = rules.every(rule => {
      return rule(value)
    })

    if (!valid) {
      memo[key] = true
    }

    return memo
  }, {})
}
