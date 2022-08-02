import React from 'react';
import logo from './logo.svg';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

function Header() {
  return (
    <Box component="header" className="flex flex-row justify-center">
      <img src={logo} className="spinning h-28 pointer-events-none" alt="logo"/>
    </Box>
  );
}

function App() {
  return (
    <Container className="max-w-xl">
      <Header/>
      <Container component="main">
        <Typography variant="body1">
          This is a starting template for a <code>create-react-app</code> project with what I consider a sane set of
          starting settings.
        </Typography>
        <ul>
          <li>The basic "Hello, World" page you're looking at now</li>
          <li>Sane yarn scripts</li>
          <li><code>material-ui</code> components</li>
          <li>A two-color theme:&nbsp;
            <Chip color="primary" label="primary"></Chip>
            &nbsp;
            <Chip color="secondary" label="secondary"></Chip>
          </li>
          <li>CSS reset via <code>CssBaseline</code></li>
          <li><code>tailwindcss</code></li>
        </ul>
      </Container>
    </Container>
  );
}

export default App;
