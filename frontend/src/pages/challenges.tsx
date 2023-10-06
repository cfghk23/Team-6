import * as React from 'react';
import Layout from '@theme/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DoneIcon from '@mui/icons-material/Done';
import { ButtonBase, CardActionArea, CardActions, Stack, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';


interface ListCardProps {
  title: string;
  description: string;
  onChange: any;
}


const ListCard = (props: ListCardProps) => {
  return (
    <Card sx={{ width: 250 }}>
      <ButtonBase
          onClick={event => props.onChange()}
          style={{
            display: 'block',
            textAlign: 'initial',
          }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="img/docusaurus-social-card.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
}

interface ContentCardProps {
  isLong: boolean;
};

function ContentCard(props: ContentCardProps) {
  const [selected, setSelected] = React.useState(0);
  const LongQDemo = () => <>
      {/* <img src="img/docusaurus-social-card.jpg" /> */}
      <Typography variant="h4" color="text.secondary" sx={{padding: '5px'}}>
        Class: Budget - Week 2 - Team Challenges!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{padding: '5px'}}>
        Due 13 Oct
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{padding: '5px'}}>
      Explain the concept of budgeting and why it is important for individuals to create and follow a budget. Discuss it with your teammates. You may add any media to help you explain your answer.
      </Typography>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        sx={{ padding: "5px", width: "100%" }}
      />
      <Stack spacing={2} direction='row'>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={1}
          sx={{ padding: "5px", width: "100%" }}
        />
        <Button size="small">Comment</Button>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        <strong>Student B</strong>: Yes maybe we can add some shopping images!<br/>
        <strong>Student A</strong>: Budget is related to shopping right?<br/>
      </Typography>
    </>;

  const MCQDemo = () => <>
      {/* <img src="img/docusaurus-social-card.jpg" /> */}
      <Typography variant="h4" color="text.secondary" sx={{padding: '5px'}}>
        Class: Saving and Investing - Week 2 - Individual Challenge!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{padding: '5px'}}>
        Due 14 Oct
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{padding: '5px'}}>
        What is the main difference between saving and investing?
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={selected}
        exclusive
        onChange={(event, value) => {
          setSelected(value);
        }}
        orientation='vertical'
        sx={{ padding: "5px", width: "100%", alignContent: "center", justifyContent: "center" }}
      >
        <Box style={{ padding: '5px' }}><ToggleButton value={0} selected={selected == 0} onClick={(event, value) => setSelected(value)} style={{ textAlign: 'left' }}>Saving involves putting money aside for short-term goals, while investing involves putting money into long-term ventures.</ToggleButton></Box>
        <Box style={{ padding: '5px' }}><ToggleButton value={1} selected={selected == 1} onClick={(event, value) => setSelected(value)} style={{ textAlign: 'left' }}>Saving is only for emergencies, while investing is for long-term financial growth.</ToggleButton></Box>
        <Box style={{ padding: '5px' }}><ToggleButton value={2} selected={selected == 2} onClick={(event, value) => setSelected(value)} style={{ textAlign: 'left' }}>Saving is a low-risk strategy, while investing carries a higher level of risk.</ToggleButton></Box>
        <Box style={{ padding: '5px' }}><ToggleButton value={3} selected={selected == 3} onClick={(event, value) => setSelected(value)} style={{ textAlign: 'left' }}>Saving is done through banks, while investing is done through the stock market.</ToggleButton></Box>
      </ToggleButtonGroup>
    </>

  return (
    <Card sx={{ width: 900 }}>
      <CardContent>
        {props.isLong ? <LongQDemo /> : <MCQDemo />}
      </CardContent>
      <CardActions>
        {props.isLong ?
        <Button> <DoneIcon style={{padding: '2px 0px'}} />
        Mark as Complete & Get +10 Coins After Marked!</Button>
        : <Button> <AttachMoneyIcon style={{padding: '2px 0px'}} />
        Submit Your Answer & Get +5 Coins!</Button>}
      </CardActions>
    </Card>
  );
}

export default function SignIn() {
  const [contentIsLongQ, setContentIsLongQ] = React.useState(true);

  return (
    <Layout
      title={`Test`}
      description="This is a test page">
      <Box display="flex" padding='50px' alignItems='center' alignContent='center' justifyContent="center">
        <Stack spacing={2} direction="row">
          <Box height="75vh" style={{ overflowY: "scroll" }}>
            <Stack spacing={2} direction="column">
              <ListCard title="Budget" description="Week 2 - Team Challenge" onChange={() => {setContentIsLongQ(true)}} />
              <ListCard title="Saving and Investing" description="Week 2 - Individual Challenge" onChange={() => {setContentIsLongQ(false)}}/>
            </Stack>
          </Box>
          <Box height="75vh" style={{ overflowY: "scroll" }}>
            <ContentCard isLong={contentIsLongQ} />
          </Box>
        </Stack>
      </Box>
    </Layout>
  )
}