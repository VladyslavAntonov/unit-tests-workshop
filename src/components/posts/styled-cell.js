import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const StyledCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.black
  },
  body: {
    fontSize: 12
  }
}))(TableCell);
