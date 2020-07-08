import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Players from './Players'
import { addPlayer, deletePlayer } from '../../store/actions/player'

const Container = (props) => {
  return <Players {...props}/>
}

Container.propTypes = {
  players: PropTypes.shape({
    collection: PropTypes.array.isRequired,
    fetching: PropTypes.bool
  }),
  addPlayer: PropTypes.func,
  deletePlayer: PropTypes.func
}

const mapState = ({ players }) => ({ players })

export default connect(mapState, { addPlayer, deletePlayer })(Container)
