import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Title = ({ children }) => <h1 data-testid="h1" className="ola-title Title">{children}</h1>

Title.displayName = 'Title'

Title.propTypes = {
  children: PropTypes.node
}

export default Title
