import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Players from './Players'

const Container = ({ players }) => {
  return <Players players={players} />
}

Container.propTypes = {
  players: PropTypes.shape({
    collection: PropTypes.array.isRequired,
    fetching: PropTypes.bool
  })
}

const mapState = ({ players }) => ({ players })
export default connect(mapState)(Container)
