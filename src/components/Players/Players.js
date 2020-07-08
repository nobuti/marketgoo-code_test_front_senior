import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalContent } from '@marketgoo/ola'
import PropTypes from 'prop-types'

import PlayersList from './PlayersList'
import NewPlayerForm from '../NewPlayerForm'

import './players.css'

const Players = ({ players }) => {
  const [open, setModal] = useState(false)
  const openModalForm = () => setModal(true)
  const closeModalForm = () => setModal(false)
  return <>
    <PlayersList data={players.collection} isLoading={players.fetching} />
    <div className="Players-action">
      <Button data-testid="players-action" className="Players-button" onClick={openModalForm}>Add new player</Button>
    </div>

    <Modal variant="center" closable open={open} onClose={closeModalForm} data-testid="modal">
      <ModalHeader title="New Player" />
      <ModalContent variant="scroll"><NewPlayerForm /></ModalContent>
    </Modal>
  </>
}

Players.propTypes = {
  players: PropTypes.shape({
    collection: PropTypes.array.isRequired,
    fetching: PropTypes.bool
  })
}

export default Players
