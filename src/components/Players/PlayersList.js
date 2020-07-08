import React from 'react'
import { Table, TableCell, TableRow, ButtonIcon, Icon } from '@marketgoo/ola'
import PropTypes from 'prop-types'

import Loading from './PlayersLoading'

const List = ({ data, isLoading = false, deleteAction = () => {} }) => {
  if (isLoading) {
    return <Loading />
  }

  const players = data ? data.sort((a, b) => b.score - a.score) : []

  return <Table
    responsive
  >
    <thead>
      <TableRow>
        <TableCell
          header
        >
            Player
        </TableCell>
        <TableCell
          header
        >
            Team
        </TableCell>
        <TableCell
          header
          variant="numeric"
        >
            Score
        </TableCell>
        <TableCell
          header
          variant="action"
        >
            Actions
        </TableCell>
      </TableRow>
    </thead>
    <tbody>
      { players.map(player =>
        <TableRow
          key={player.id}
          data-testid="row"
        >
          <TableCell
            variant="multiline"
          >
            {player.name}
          </TableCell>
          <TableCell
          >
            {player.team}
          </TableCell>
          <TableCell
            variant="numeric"
          >
            {player.score}
          </TableCell>
          <TableCell
            variant="action"
          >
            <ButtonIcon
              as="button"
              variant="primary"
              onClick={() => deleteAction(player.id)}
              data-testid="action"
            >
              <Icon
                name="close"
                size="small"
              />
            </ButtonIcon>
          </TableCell>
        </TableRow>
      )}
    </tbody>
  </Table>
}

List.displayName = 'PlayersList'

List.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  deleteAction: PropTypes.func
}

export default List
