import React from 'react';
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline, useColorScheme } from '@mui/material';
import { FormControlLabel, FormGroup } from '@mui/material';
import { CustomSwitch } from './components/switch/themeSwitchBtn';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function ToggleTheme() {
  const handleChange = (event) => {
    if(event.target.checked) setMode("dark");
    else setMode("light");
  };

  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<CustomSwitch value={mode==='dark' ? true : false} defaultChecked onChange={handleChange} />}
          label="MUI switch"
        />
      </FormGroup>
      <App />
    </>
  );
}

function CustomTheme() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToggleTheme />
    </ThemeProvider>
  );
}

export default CustomTheme;
