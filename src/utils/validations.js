export const required = value => {
  return value.trim().length > 0
}

export const moreThan = length => {
  return value => {
    return value.length >= length
  }
}

export const equalOrBiggerThan = n => {
  return value => {
    if (isNaN(value)) {
      return false
    }

    if (typeof value === 'string' && value === '') {
      return false
    }

    return +value >= n
  }
}

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
