import * as React from 'react';
import Layout from '@theme/Layout';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Stack, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';

function MCCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="img/docusaurus-social-card.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Multiple MC
        </Typography>
        <Typography variant="body2" color="text.secondary">
          How old are you?
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={1}
          exclusive
        >
          <ToggleButton value={1}>10</ToggleButton>
          <ToggleButton value={2}>20</ToggleButton>
          <ToggleButton value={3}>30</ToggleButton>
          <ToggleButton value={4}>40</ToggleButton>
        </ToggleButtonGroup>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
      </CardActions>
    </Card>
  );
}

function LongQuestionCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="img/docusaurus-social-card.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Long Question
        </Typography>
        <Typography variant="body2" color="text.secondary">
          How happy are you?
        </Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Default Value"
        />

      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
      </CardActions>
    </Card>
  );
}

export default function SignIn() {
  return (
    <Layout
      title={`Test`}
      description="This is a test page">
      <Box display="flex" padding='50px' alignItems='center' alignContent='center' justifyContent="center">
        <Stack spacing={2} direction="column">
          <MCCard />
          <LongQuestionCard/>
        </Stack>
      </Box>
    </Layout>
  )
}