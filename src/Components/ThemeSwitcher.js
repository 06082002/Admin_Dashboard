import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Theme</InputLabel>
      <Select value={mode} onChange={handleChange}>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
       
        
      </Select>
    </FormControl>
  );
};

export default ThemeSwitcher;
