import React from 'react';
import NavigationBar from '../components/nav';
import { useTranslation } from 'react-i18next';
import { Box, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Password from '@mui/icons-material/Password';

const Login = () => {
  const { t } = useTranslation();
  return <>
    <h1>{t('login_page')}</h1>
    <NavigationBar current="/login"/>
    
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label={t('username_or_email')}
          variant="outlined"
        />
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Password sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label={t('password')}
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
    </Box>
  </>
};

export default Login;