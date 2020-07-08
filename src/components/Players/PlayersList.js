import React from 'react'
import { Spinner, Table, TableCell, TableRow, ButtonIcon, Icon } from '@marketgoo/ola'
import PropTypes from 'prop-types'

const List = ({ data, isLoading = false, deleteAction = () => {} }) => {
  if (isLoading) {
    return <div style={{ display: 'flex', alignItems: 'center' }} data-testid="loading">
      <Spinner />
      <span style={{ marginLeft: 16 }}>Loading players</span>
    </div>
  }

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
      { data && data.map(player =>
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
