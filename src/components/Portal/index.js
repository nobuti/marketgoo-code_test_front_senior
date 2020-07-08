import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

let modal = document.getElementById('modal')

if (!modal) {
  modal = document.createElement('div')
  modal.setAttribute('id', 'modal')
  document.body.appendChild(modal)
}

const Portal = ({ children }) => {
  const element = document.createElement('div')

  useEffect(() => {
    modal.appendChild(element)

    return () => {
      modal.removeChild(element)
    }
  }, [])

  return createPortal(
    children,
    element
  )
}

Portal.propTypes = {
  children: PropTypes.node
}

export default Portal
