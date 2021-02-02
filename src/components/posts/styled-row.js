import { TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const StyledRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);
