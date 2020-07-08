import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalContent } from '@marketgoo/ola'
import PropTypes from 'prop-types'

import PlayersList from './PlayersList'
import NewPlayerForm from '../NewPlayerForm'

import './players.css'

const Players = ({ players, addPlayer, deletePlayer }) => {
  const [open, setModal] = useState(false)
  const openModalForm = () => setModal(true)
  const closeModalForm = () => setModal(false)
  const onSubmit = values => {
    closeModalForm()
    addPlayer(values)
  }

  return <>
    <PlayersList data={players.collection} isLoading={players.fetching} onDelete={deletePlayer} />
    <div className="Players-action">
      <Button data-testid="players-action" className="Players-button" onClick={openModalForm}>Add new player</Button>
    </div>

    <Modal variant="center" closable open={open} onClose={closeModalForm} data-testid="modal">
      <ModalHeader title="New Player" />
      <ModalContent variant="scroll"><NewPlayerForm onSubmit={onSubmit} /></ModalContent>
    </Modal>
  </>
}

Players.propTypes = {
  players: PropTypes.shape({
    collection: PropTypes.array.isRequired,
    fetching: PropTypes.bool
  }),
  addPlayer: PropTypes.func.isRequired,
  deletePlayer: PropTypes.func.isRequired
}

export default Players
