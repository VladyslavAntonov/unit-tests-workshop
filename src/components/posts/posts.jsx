import {
  Table, TableBody, TableContainer, TableHead, Paper
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { StyledCell } from './styled-cell';
import { StyledRow } from './styled-row';

export function Posts(props) {
  return (
    <TableContainer
      className={props.className}
      component={Paper}
    >
      <Table>
        <TableHead>
          <StyledRow>
            <StyledCell>Id</StyledCell>
            <StyledCell>UserId</StyledCell>
            <StyledCell align="right">Title</StyledCell>
            <StyledCell align="right">Description</StyledCell>
          </StyledRow>
        </TableHead>
        <TableBody>
          {props.data.map(({ id, userId, title, body }) => (
            <StyledRow key={id}>
              <StyledCell>{id}</StyledCell>
              <StyledCell align="center">{userId}</StyledCell>
              <StyledCell align="right">{title}</StyledCell>
              <StyledCell align="right">{body}</StyledCell>
            </StyledRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Posts.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired
};
