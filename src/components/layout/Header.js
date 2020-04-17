import React from 'react';
import {Typography, FormControl, InputLabel, Select, MenuItem, AppBar, Toolbar } from '@material-ui/core';

const Header = ({user, onLanguageSelect, lang, langCode, classes}) => {
  const handleLanguageChange = (e) => {
    onLanguageSelect(e.target.value);
  }

  const renderLanguageSelector = () => {
    const choices = [
      { label: lang.t('language.english'), value: 'en' },
      { label: lang.t('language.amharic'), value: 'am' },
    ]
    return (
      <div>
        <InputLabel shrink>Language:</InputLabel>
        <FormControl
          style={{
            width: "100%",
          }}
          size="small"
        >
          <Select
            value={langCode}
            onChange={handleLanguageChange}
          >
            {choices.map((c, index) => (
              <MenuItem key={index} value={c.value} >
                <Typography>{c.label}</Typography>
              </MenuItem>
            ))}
          </Select>
      </FormControl>
      </div>
    )
  }

  // <img src="/Flag.png" style={{ verticalAlign: 'middle', marginRight: 10 }} alt="flag"/>

  return (
    <AppBar position="static" style={{ color: 'white', backgroundColor: '#0040B7', justifyContent: 'middle' }}>
      <Toolbar variant="dense">      
        <Typography variant="h6" style={{ flexGrow: 1 }}>{lang.t('headerTitle')}</Typography>
        {renderLanguageSelector()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
