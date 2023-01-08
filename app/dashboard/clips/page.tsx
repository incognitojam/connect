'use client';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
    thumbnailUrl: 'https://chffrprivate.blob.core.windows.net/clips/1df037e2a95eb9be/2022-09-26--17-19-52_9c966a8e71524eadb83859ebf539b1bf_thumbnail.jpg?se=2023-01-09T00%3A27%3A14Z&sp=r&sv=2018-03-28&sr=b&rscd=attachment%3B%20filename%3D2022-09-26--17-19-52_9c966a8e71524eadb83859ebf539b1bf_thumbnail.jpg&sig=PzCgwZXcfxY0Uk1Anhnff4Fd22zjmPA2909BIMGRzHc%3D',
  },
  {
    id: 1,
    name: null,
    timestamp: 'Nov 14th, 09:35',
    duration: '01:00',
    isPublic: false,
    thumbnailUrl: 'https://chffrprivate.blob.core.windows.net/clips/1df037e2a95eb9be/2022-11-22--13-52-26_557c89df0621491db70dcb7b56ae8032_thumbnail.jpg?se=2023-01-09T00%3A32%3A05Z&sp=r&sv=2018-03-28&sr=b&rscd=attachment%3B%20filename%3D2022-11-22--13-52-26_557c89df0621491db70dcb7b56ae8032_thumbnail.jpg&sig=xwegIpjTJgw0Yyw3Vj07aKXuDQsfcbtJ3YjH1AUn%2BtQ%3D',
  },
  {
    id: 2,
    name: 'farm',
    timestamp: 'Nov 27th, 10:54',
    duration: '01:23',
    isPublic: false,
    thumbnailUrl: 'https://chffrprivate.blob.core.windows.net/clips/1df037e2a95eb9be/2022-11-27--10-50-48_f14f8018c45a43949d50072241b8c8e0_thumbnail.jpg?se=2023-01-09T00%3A21%3A50Z&sp=r&sv=2018-03-28&sr=b&rscd=attachment%3B%20filename%3D2022-11-27--10-50-48_f14f8018c45a43949d50072241b8c8e0_thumbnail.jpg&sig=0T0547IvdG7aWM%2BZKIakpHKi0c4ow597iQJuGkTxorI%3D',
  },
];

function ClipCard(clip: typeof clips[0]) {
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
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: 4,
            }}>
              <span style={{ color: 'white' }}>{clip.duration}</span>
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
