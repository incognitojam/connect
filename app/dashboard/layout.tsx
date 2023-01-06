'use client';

import { useState } from 'react';
import Link from 'next/link';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Map from '@mui/icons-material/Map';
import Route from '@mui/icons-material/Route';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import Insights from '@mui/icons-material/Insights';
import Settings from '@mui/icons-material/Settings';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { CommaLogo, CommaThreeIcon } from '../../components/icons';

function TopBar() {
  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: 56, display: 'flex', alignItems: 'center' }}>
      <ListItem>
        <ListItemIcon>
          <CommaThreeIcon sx={{ width: 48 }} />
        </ListItemIcon>
        <ListItemText
          primary={<Typography fontWeight={700}>Toyota Corolla</Typography>}
          secondary={<Typography fontSize={13} fontWeight={600} textTransform="uppercase" color="primary">Online</Typography>}
        />
      </ListItem>

      <IconButton size="large">
        <AccountCircle fontSize="inherit" />
      </IconButton>
    </Box>
  );
}

export default function DashboardLayout({ children }: {
  children: React.ReactNode;
}) {
  const [page, setPage] = useState(0);

  const routes = [
    { label: 'Map', icon: <Map />, value: 'navigation' },
    { label: 'Drives', icon: <Route />, value: 'drives' },
    { label: 'Clips', icon: <VideoLibrary />, value: 'clips' },
    { label: 'Stats', icon: <Insights />, value: 'stats' },
    { label: 'Settings', icon: <Settings />, value: 'settings' },
  ];

  return (
    <>
      <TopBar />

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
