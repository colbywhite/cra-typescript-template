import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Header() {
  return (
    <Box sx={{textAlign: 'center'}}>
      <img src={logo} className="App-logo" alt="logo"/>
    </Box>
  );
}

function App() {
  return (
    <Container maxWidth="sm" component="main">
      <Header/>
      <Typography variant="body1">
        This is a starting template for a <code>create-react-app</code> project with what I consider a sane set of
        starting settings.
      </Typography>
      <ul>
        <li>The basic "Hello, World" page you're looking at now</li>
        <li>Sane yarn scripts</li>
        <li><code>material-ui</code> components</li>
        <li>CSS reset via <code>CssBaseline</code></li>
        <li><code>tailwindcss</code></li>
      </ul>
    </Container>
  );
}

export default App;
