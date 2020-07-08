import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import PlayersList from './PlayersList'

const Container = ({ players }) => {
  return <PlayersList data={players.collection} isLoading={players.fetching} />
}

Container.propTypes = {
  players: PropTypes.shape({
    collection: PropTypes.array.isRequired,
    fetching: PropTypes.bool
  })
}

const mapState = ({ players }) => ({ players })
export default connect(mapState)(Container)
