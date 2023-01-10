'use client';

import { useMemo, useState } from 'react';
import Map, { GeolocateControl, Marker } from 'react-map-gl';

import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import GpsFixed from '@mui/icons-material/GpsFixed';
import Directions from '@mui/icons-material/Directions';
import Star from '@mui/icons-material/Star';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LocalParking from '@mui/icons-material/LocalParking';
import Garage from '@mui/icons-material/Garage';
import Search from '@mui/icons-material/Search';

import 'mapbox-gl/dist/mapbox-gl.css';

import { CarMarker } from '../../../components/icons';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const MAP_STYLE_DAY = 'mapbox://styles/commaai/clcl7mnu2000214s2zgcdly6e';
const MAP_STYLE_NIGHT = 'mapbox://styles/commaai/clcgvbi4f000q15t6o2s8gys3';

function SearchBar() {
  const theme = useTheme();
  const options: string[] = [];

  return (
    <Autocomplete
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={options}
      sx={{ position: 'absolute', bottom: 104, left: 16, right: 16, zIndex: 1 }}
      freeSolo
      renderInput={(params) => (
        <Paper
          ref={params.InputProps.ref}
          component="form"
          sx={{
            p: '4px 8px 4px 16px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 4,
          }}
        >
          <InputBase
            placeholder="where do you want to go?"
            inputProps={params.inputProps}
            sx={{ width: '100%' }}
          />
          <IconButton type="button" sx={{ p: '8px' }} aria-label="search">
            <Search />
          </IconButton>
        </Paper>
      )}
    />
  );
}

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

export default function Navigation() {
  const [viewState, setViewState] = useState({
    latitude: 32.7206,
    longitude: -117.1666,
    zoom: 14,
  });

  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const mapStyle = isDark ? MAP_STYLE_NIGHT : MAP_STYLE_DAY;

  const markers = useMemo(() => (
    <>
      <Marker
        color="#51ff00"
        longitude={-117.196276}
        latitude={32.751203}
        anchor="bottom"
        offset={[0, 12.5]}
      >
        <CarMarker sx={{ width: '27px', height: '41px' }} />
      </Marker>

      <GeolocateControl
        position="bottom-right"
        style={{
          marginBottom: '72px',
          marginRight: '16px',
          backgroundColor: theme.palette.background.default,
        }}
      />
    </>
  ), [theme]);

  return (
    <div>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{ position: 'fixed', top: 0, bottom: 56, height: 'auto' }}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
        reuseMaps
      >
        {markers}
      </Map>
      {/*<DeviceCard />*/}
      <SearchBar />
    </div>
  );
}
