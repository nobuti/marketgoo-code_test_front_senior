import React, { useReducer } from 'react'
import { Field, Input, Button } from '@marketgoo/ola'
import PropTypes from 'prop-types'

import { required, moreThan, equalOrBiggerThan, validate, getError, anyError } from '../../utils/validations'

import './index.css'

const validations = {
  name: [required, moreThan(2)],
  team: [required, moreThan(2)],
  score: [equalOrBiggerThan(0)]
}

const Form = ({ onSubmit = () => {} }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'change':
        return {
          ...state,
          touched: {
            ...state.touched,
            [action.field.name]: true
          },
          values: {
            ...state.values,
            [action.field.name]: action.field.value
          }
        }
      default:
        return state
    }
  }, {
    touched: {},
    values: {}
  })

  const onChange = (e) => {
    const { value, name } = e.target
    dispatch({
      type: 'change',
      field: {
        name,
        value
      }
    })
  }

  const onSubmitForm = e => {
    e.preventDefault()
    onSubmit(state.values)
  }

  const isThereAnyError = (errors, name) => {
    if (state.touched[name] == null) {
      return false
    }

    return getError(errors, name)
  }

  const errors = validate(state.values, validations)

  return <form onSubmit={onSubmitForm}>
    <div className="NewPlayerForm-field">
      <Field
        error={isThereAnyError(errors, 'name')}
        id="playerName"
        label="Name"
        className="NewPlayerForm-field"
      >
        <Input
          name="name"
          placeholder="Player name"
          type="text"
          onChange={onChange}
          data-testid="player-name"
        />
      </Field>
    </div>

    <div className="NewPlayerForm-field">
      <Field
        error={isThereAnyError(errors, 'team')}
        id="playerTeam"
        label="Team"
        className="NewPlayerForm-field"
      >
        <Input
          name="team"
          placeholder="Player team"
          type="text"
          onChange={onChange}
          data-testid="player-team"
        />
      </Field>
    </div>

    <div className="NewPlayerForm-field">
      <Field
        error={isThereAnyError(errors, 'score')}
        id="playerScore"
        label="Score"

      >
        <Input
          name="score"
          placeholder="Player score"
          type="number"
          onChange={onChange}
          data-testid="player-score"
        />
      </Field>
    </div>

    <div className="NewPlayerForm-actions">
      <Button variant="primary" disabled={anyError(errors)} type="submit" className="NewPlayerForm-submit" data-testid="player-submit">Add new player</Button>
    </div>
  </form>
}

Form.propTypes = {
  onSubmit: PropTypes.func
}

export default Form
