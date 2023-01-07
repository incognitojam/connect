'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import map from './map_timeline.png';

const routes = [
  {
    id: 0,
    time: '6:13-8:14',
    location: 'San Diego, California',
    distance: '12 mi',
    duration: '1h 5m',
    points: 23,
  },
  {
    id: 1,
    time: '6:13-8:14',
    location: 'San Diego, California',
    distance: '12 mi',
    duration: '1h 5m',
    points: 23,
  },
  {
    id: 2,
    time: '6:13-8:14',
    location: 'San Diego, California',
    distance: '12 mi',
    duration: '1h 5m',
    points: 23,
  },
];

function RouteCard(route: typeof routes[0]) {
  return (
    <Grid xs={12} key={route.id}>
      <Card onClick={() => null}>
        <CardActionArea>
          <CardHeader
            title={route.location}
            subheader={route.time}
          />
          <Box sx={{ position: 'relative', height: 200 }}>
            <Image src={map} fill alt="map" />
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default function Drives() {
  return (
    <Container sx={{ p: 2, mt: '72px', mb: '56px' }}>
      <Grid container spacing={2}>
        {routes.map(RouteCard)}
      </Grid>
    </Container>
  );
}
