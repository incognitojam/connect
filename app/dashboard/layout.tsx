'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Autocomplete from '@mui/material/Autocomplete';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Map from '@mui/icons-material/Map';
import Route from '@mui/icons-material/Route';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import Insights from '@mui/icons-material/Insights';
import Settings from '@mui/icons-material/Settings';
import Person from '@mui/icons-material/Person';

import { CommaLogo, CommaThreeIcon } from '../../components/icons';

function SelectedDeviceItem() {
  return (
    <ListItem>
      <ListItemIcon>
        <CommaThreeIcon sx={{ width: 48 }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography color="white" fontWeight={700}>Toyota Corolla</Typography>}
        secondary={<Typography fontSize={13} fontWeight={600} textTransform="uppercase" color="#51ff00">Online</Typography>}
      />
    </ListItem>
  );
}

const TopBarWrapper = styled('div')({
  background: `linear-gradient(180deg, rgba(0,0,0,.8) 0%, transparent 100%)`,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: 84,
  zIndex: 1,
});

const TopBarContent = styled('div')({
  width: '100%',
  marginTop: 12,
  height: 48,
  display: 'flex',
  alignItems: 'center',
});

function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Fab
        id="account-button"
        size="small"
        sx={{ backgroundColor: 'white', minWidth: '40px', marginRight: 2, boxShadow: 'none' }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Person sx={{ color: 'black' }} />
      </Fab>

      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'account-button',
        }}
      >
        <MenuItem onClick={handleClose}>Pair a new device</MenuItem>
        <MenuItem onClick={handleClose}>Open useradmin</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

function TopBar() {
  return (
    <TopBarWrapper>
      <TopBarContent>
        <SelectedDeviceItem />

        <AccountMenu />
      </TopBarContent>
    </TopBarWrapper>
  );
}

export default function DashboardLayout({ children }: {
  children: React.ReactNode;
}) {
  const routes = [
    { label: 'Navigation', icon: <Map />, value: '/dashboard/navigation' },
    { label: 'Drives', icon: <Route />, value: '/dashboard/drives' },
    { label: 'Clips', icon: <VideoLibrary />, value: '/dashboard/clips' },
    // { label: 'Stats', icon: <Insights />, value: '/dashboard/statistics' },
    // { label: 'Settings', icon: <Settings />, value: '/dashboard/settings' },
  ];

  const pathname = usePathname();
  const [page, setPage] = useState(routes.findIndex((route) => route.value === pathname));

  return (
    <>
      <TopBar />

      {children}

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={page}
          onChange={(event, newValue) => {
            setPage(newValue);
          }}
        >
          {routes.map((route) => (
            <BottomNavigationAction
              key={route.value}
              label={route.label}
              icon={route.icon}
              component={Link}
              href={route.value}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
}
