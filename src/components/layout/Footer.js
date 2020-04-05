import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Footer = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography>Ethiopia COVID19 Taskforce</Typography>
    </div>
  );
};

const styles = {
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 50,
  },
};

export default withStyles(styles)(Footer);
