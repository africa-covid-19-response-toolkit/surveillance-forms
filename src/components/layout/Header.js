import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Box, Grid, Link, Typography} from '@material-ui/core';

const Header = ({user, onLanguageSelect, lang, classes}) => {
  const handleLanguageSelect = (code) => {
    return () => onLanguageSelect(code);
  };

  return (
    <Box>
      <Typography>Header</Typography>
    </Box>
  );
};

const styles = {
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 25,
    borderBottom: '1px solid grey',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default withStyles(styles)(Header);
