'use client';

import { useState } from 'react';
import Link from 'next/link';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Map from '@mui/icons-material/Map';
import Route from '@mui/icons-material/Route';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import Settings from '@mui/icons-material/Settings';

export default function Home() {
  const [value, setValue] = useState(0);

  const routes = [
    { label: 'Nav', icon: <Map /> },
    { label: 'Drives', icon: <Route /> },
    { label: 'Clips', icon: <VideoLibrary /> },
    { label: 'Settings', icon: <Settings /> },
  ];

  return (
    <>
      <Container>
        <h1>lorem ipsum</h1>
        <Stack direction="row" columnGap={1}>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
      </Container>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {routes.map((route, index) => (
            <BottomNavigationAction key={index} label={route.label} icon={route.icon} />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
}
