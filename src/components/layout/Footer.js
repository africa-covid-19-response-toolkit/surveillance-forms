import React from 'react';
import {Box, Grid, Link, Typography} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const Footer = ({user, lang, classes}) => {
  return (
    <Box p={1} textAlign="center" style={{ color: 'white', backgroundColor: '#0944B4' }}>
      <Typography>{lang.t('footerText')}</Typography>
    </Box>
  );
};

export default Footer;
