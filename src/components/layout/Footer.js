import React from 'react';
import {Box, Typography} from '@material-ui/core';

const Footer = ({lang}) => {
  return (
    <Box p={1} textAlign="center" style={{ color: 'white', backgroundColor: '#0944B4' }}>
      <Typography>{lang.t('footerText')}</Typography>
    </Box>
  );
};

export default Footer;
