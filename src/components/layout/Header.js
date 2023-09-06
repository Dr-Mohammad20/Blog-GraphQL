import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="800" flex={1}>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
              وبلاگ
            </Link>
          </Typography>
          <Link to="/Login" style={{ color: '#fff' }}>
            <LoginIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
