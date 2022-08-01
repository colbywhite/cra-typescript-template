import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function App() {
  return (
    <Container maxWidth="sm" className="App" component="main">
        <img src={logo} className="App-logo" alt="logo"/>
        <Typography variant="body1">
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <Link href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
          Learn React
        </Link>
    </Container>
  );
}

export default App;
