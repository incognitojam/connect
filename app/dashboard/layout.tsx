'use client';

import { useState } from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Map from '@mui/icons-material/Map';
import Route from '@mui/icons-material/Route';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import Settings from '@mui/icons-material/Settings';

export default function DashboardLayout({ children }: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState(0);

  const routes = [
    { label: 'Navigation', icon: <Map />, value: 'navigation' },
    { label: 'Drives', icon: <Route />, value: 'drives' },
    { label: 'Clips', icon: <VideoLibrary />, value: 'clips' },
    { label: 'Settings', icon: <Settings />, value: 'settings' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar color="primary">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            comma connect
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        {children}
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
            <BottomNavigationAction
              key={index}
              label={route.label}
              icon={route.icon}
              component={Link}
              href={`/dashboard/${route.value}`}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
}
