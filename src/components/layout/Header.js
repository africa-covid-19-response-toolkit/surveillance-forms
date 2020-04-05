import React from 'react';
import {Box, Grid, Link, Typography, Select, MenuItem } from '@material-ui/core';
import {
  renderSelectField
} from '../form/form-util';

const Header = ({user, onLanguageSelect, lang, langCode, classes}) => {
  const handleLanguageChange = (e) => {
    console.log('handleLanguageChange', e.target.value);
    onLanguageSelect(e.target.value);
  }

  const renderLanguageSelector = () => {
    const choices = [
      { label: lang.t('language.english'), value: 'en' },
      { label: lang.t('language.amharic'), value: 'am' },
    ]
    return (
      <Select
        value={langCode}
        onChange={handleLanguageChange}
      >
        {choices.map((c, index) => (
          <MenuItem key={index} value={c.value} style={{ backgroundColor: '#0944B4', color: 'white' }}>
            <Typography style={{ color: 'white' }}>{c.label}</Typography>
          </MenuItem>
        ))}
      </Select>
    )
  }

  return (
    <Box py={1} pl={4} pr={7} style={{ color: 'white', backgroundColor: '#0944B4' }}>
      <Grid container>
        <Grid xs={6}>
          <Typography>{lang.t('officalWebsite')}</Typography>
        </Grid>
        <Grid xs={6}>
          <Box textAlign="right">
            {renderLanguageSelector()}
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Header;
