'use client';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Public from '@mui/icons-material/Public';
import Lock from '@mui/icons-material/Lock';
import MoreVert from '@mui/icons-material/MoreVert';

const clips = [
  {
    id: 0,
    name: 'cones',
    timestamp: 'Sep 26th, 17:22',
    duration: '00:32',
    isPublic: true,
    thumbnailUrl: 'https://chffrprivate.blob.core.windows.net/clips/1df037e2a95eb9be/2022-09-26--17-19-52_9c966a8e71524eadb83859ebf539b1bf_thumbnail.jpg?se=2023-01-13T03%3A39%3A23Z&sp=r&sv=2018-03-28&sr=b&rscd=attachment%3B%20filename%3D2022-09-26--17-19-52_9c966a8e71524eadb83859ebf539b1bf_thumbnail.jpg&sig=1VZzZod7Sl6XDHJgs%2BmygwG2M%2BM2hko29hYyfvRzuyI%3D',
  },
  {
    id: 1,
    name: null,
    timestamp: 'Nov 14th, 09:35',
    duration: '01:00',
    isPublic: false,
    thumbnailUrl: 'https://chffrprivate.blob.core.windows.net/clips/1df037e2a95eb9be/2022-11-14--09-11-45_66acde2774814b959e69745dcb3199b6_thumbnail.jpg?se=2023-01-13T03%3A39%3A44Z&sp=r&sv=2018-03-28&sr=b&rscd=attachment%3B%20filename%3D2022-11-14--09-11-45_66acde2774814b959e69745dcb3199b6_thumbnail.jpg&sig=%2BvAkV0CUJJGDUixcqeNHOUbmLuJpDXlXUVOsnXte9ZU%3D',
  },
  {
    id: 2,
    name: 'farm',
    timestamp: 'Nov 27th, 10:54',
    duration: '01:23',
    isPublic: false,
    thumbnailUrl: 'https://chffrprivate.blob.core.windows.net/clips/1df037e2a95eb9be/2022-11-27--10-50-48_f14f8018c45a43949d50072241b8c8e0_thumbnail.jpg?se=2023-01-13T03%3A40%3A03Z&sp=r&sv=2018-03-28&sr=b&rscd=attachment%3B%20filename%3D2022-11-27--10-50-48_f14f8018c45a43949d50072241b8c8e0_thumbnail.jpg&sig=LDSQFV089aDxk5cV3YPTVUwJbca3GIcYVW6jTa4Yu2c%3D',
  },
];

function hexToRGB(hex: string, alpha: number): string {
  if (hex.length === 4) {
    hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
}

function ClipCard(clip: typeof clips[0]) {
  const theme = useTheme();

  const title = clip.name || clip.timestamp;
  const subheader = clip.name ? `Recorded ${clip.timestamp}` : null;
  const icon = clip.isPublic ? Public : Lock;

  return (
    <Grid xs={12} key={clip.id}>
      <Card>
        <CardHeader
          title={<Typography variant="h6">{title}</Typography>}
          subheader={<Typography variant="caption">{subheader}</Typography>}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
        />
        <CardActionArea>
          <div style={{ position: 'relative', height: 200 }}>
            <CardMedia
              image={clip.thumbnailUrl}
              title={clip.name || 'Clip'}
              sx={{ height: 200 }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              padding: 8,
              margin: 8,
              height: 40,
              backgroundColor: hexToRGB(theme.palette.background.paper, 0.5),
              borderRadius: 4,
            }}>
              {clip.isPublic ? <Public /> : <Lock />}
            </div>
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              padding: 8,
              margin: 8,
              backgroundColor: hexToRGB(theme.palette.background.paper, 0.5),
              borderRadius: 4,
            }}>
              <span style={{ color: theme.palette.text.primary }}>{clip.duration}</span>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default function Clips() {
  return (
    <Container sx={{ p: 2, mt: '64px', mb: '56px' }}>
      <Grid container spacing={2}>
        {clips.map(ClipCard)}
      </Grid>
    </Container>
  );
}
