'use client';

import { useState } from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Map from '@mui/icons-material/Map';
import Route from '@mui/icons-material/Route';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import Settings from '@mui/icons-material/Settings';

export default function DashboardLayout({ children }: {
  children: React.ReactNode;
}) {
  const dongles = [
    { label: 'Corolla', value: '0' },
  ];

  const [page, setPage] = useState(0);
  const [selectedDongleId, setDongleId] = useState(dongles[0].value);

  const routes = [
    { label: 'Navigation', icon: <Map />, value: 'navigation' },
    { label: 'Drives', icon: <Route />, value: 'drives' },
    { label: 'Clips', icon: <VideoLibrary />, value: 'clips' },
    { label: 'Settings', icon: <Settings />, value: 'settings' },
  ];

  const handleDongleIdChange = (event: SelectChangeEvent) => {
    setDongleId(event.target.value as string);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <FormControl size="small">
            <Select
              id="dongle-select"
              value={selectedDongleId}
              onChange={handleDongleIdChange}
            >
              {dongles.map((dongle, index) => (
                <MenuItem
                  key={index}
                  value={dongle.value}
                >
                  {dongle.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>

      <Container>
        {children}
      </Container>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={page}
          onChange={(event, newValue) => {
            setPage(newValue);
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
