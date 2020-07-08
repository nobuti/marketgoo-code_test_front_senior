import React from 'react'
import { Spinner } from '@marketgoo/ola'

import './loading.css'

const Loading = () => <div className="Loading" data-testid="loading">
  <Spinner />
  <span className="Loading-label" data-testid="loading-label">Loading players</span>
</div>

export default Loading
