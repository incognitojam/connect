'use client';

import { useState } from 'react';
import Map, { GeolocateControl, Marker } from 'react-map-gl';

import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GpsFixed from '@mui/icons-material/GpsFixed';
import Directions from '@mui/icons-material/Directions';
import Star from '@mui/icons-material/Star';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LocalParking from '@mui/icons-material/LocalParking';
import Garage from '@mui/icons-material/Garage';
import AccountCircle from '@mui/icons-material/AccountCircle';

import 'mapbox-gl/dist/mapbox-gl.css';
import {CommaLogo} from "../../../components/icons";

// https://visgl.github.io/react-map-gl/docs/get-started/tips-and-tricks
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY29tbWFhaSIsImEiOiJjbGNpcHB1Nmw3Zjg3M3BwbjV2N2YxMjl5In0.73alGM0ovKLemvTo779Kag';
const MAP_STYLE = 'mapbox://styles/commaai/clcgvbi4f000q15t6o2s8gys3';

function DeviceCard() {
  const handleClick = () => {
    console.log('click!');
  };

  return (
    <Paper sx={{ maxWidth: 400, position: 'fixed', bottom: 56, left: 0, right: 0 }} square>
      <Stack>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={<Typography variant="h5">Corolla</Typography>}
            secondary={(
              <Typography sx={{ fontSize: 14, textTransform: 'uppercase' }} color="text.secondary" gutterBottom>
                Device Online
              </Typography>
            )}
          />
        </ListItem>

        <Stack direction="row" spacing={1} sx={{ marginBottom: 1, marginLeft: 1 }}>
          <Chip icon={<GpsFixed />} label="Locate" onClick={handleClick} />
          <Chip icon={<Directions />} label="Navigate" onClick={handleClick} />
          <Chip icon={<Star />} label="Favorite" onClick={handleClick} />
          <Chip icon={<PhotoCamera />} label="Take Snapshot" onClick={handleClick} />
        </Stack>

        <Divider />

        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <LocalParking />
          </ListItemIcon>
          <ListItemText
            primary="Parked 300ft away"
            secondary={<>
              <Typography color="text.secondary">Near 1400 State St, San Diego</Typography>
              <Typography color="text.secondary">6:50 PM (a few seconds ago)</Typography>
            </>}
          />
        </ListItem>

        <Divider />

        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Garage />
          </ListItemIcon>
          <ListItemText
            primary="Car is off"
            secondary={<>
              <Typography color="text.secondary">Battery voltage: 12.4V</Typography>
              <Typography color="text.secondary">Fuel remaining: 70%</Typography>
            </>}
          />
        </ListItem>
      </Stack>
    </Paper>
  );
}

function AppBar() {
  // Rounded element with SvgIcon logo, autocomplete search bar and avatar icon
  return (
    <Paper square sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: 56, display: 'flex', alignItems: 'center' }}>
      <CommaLogo sx={{ width: 56 }} />
      <Autocomplete
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={['Corolla', 'Civic', 'Camry']}
        sx={{ flex: 1 }}
        freeSolo
        renderInput={(params) => <TextField {...params} hiddenLabel placeholder="where do you want to go?" variant="standard" fullWidth />}
      />
      <IconButton size="large">
        <AccountCircle fontSize="inherit" />
      </IconButton>
    </Paper>
  );
}

export default function Navigation() {
  const [viewState, setViewState] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14
  });

  return (
    <div>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14
        }}
        style={{ position: 'fixed', left: 0, right: 0, top: 56, bottom: 56 }}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
        <GeolocateControl />
      </Map>
      <AppBar />
      <DeviceCard />
    </div>
  );
}
