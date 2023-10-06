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
  onDelete: any;
}


const ListCard = (props: ListCardProps) => {
  return (
    <Card sx={{ width: 800 }}>
        <CardContent>
            <Stack spacing={2} direction="column">
                <ButtonBase
                    onClick={event => props.onChange()}
                    style={{
                        display: 'block',
                        textAlign: 'initial',
                    }}
                >
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap>
                        <img src="img/docusaurus-social-card.jpg" width={175} height={100}/>
                        <Stack spacing={2} direction="column">
                            <Typography gutterBottom variant="body1" component="div">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.description}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                </ButtonBase>
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap>
                    <Button variant="text">Like</Button>
                    <Button variant="text">Comment</Button>
                    <Button variant="text">Edit</Button>
                    <Button variant="text" onClick={(event) => props.onDelete()}>Delete</Button>
                </Stack>
            </Stack>
        </CardContent>
    </Card>
  );
}

interface ContentCardProps {
  isLong: boolean;
};


export default function SignIn() {
  const [contentIsLongQ, setContentIsLongQ] = React.useState(true);
  const [deleted, setDeleted] = React.useState([false, false, false])
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  return (
    <Layout
      title={`Test`}
      description="This is a test page">
      <Box display="flex" padding='50px' alignItems='center' alignContent='center' justifyContent="center">
        <Stack spacing={2} direction="row">
            <Stack spacing={2} direction="column">
              {deleted[0] ? null : <ListCard title="Doubts on net income" description="I am not too sure net income and these statistics..." onChange={() => {setContentIsLongQ(true)}}  onDelete={() => {
                var d = deleted;
                d[0] = true;
                setDeleted(d);
                forceUpdate();
              }}/>}
              {deleted[1] ? null : <ListCard title="Why do we need credit cards?" description="I had a question regarding this topic I read yesterday and was confused..." onChange={() => {setContentIsLongQ(false)}} onDelete={() => {
                var d = deleted;
                d[1] = true;
                setDeleted(d);
                forceUpdate();
              }}/>}
              {deleted[2] ? null : <ListCard title="What is the purpose of a credit score?" description="Like why use credit score, it makes it looks like a competition..." onChange={() => {setContentIsLongQ(false)}} onDelete={() => {
                var d = deleted;
                d[2] = true;
                setDeleted(d);
                forceUpdate();
              }}/>}
            </Stack>          
        </Stack>
      </Box>
    </Layout>
  )
}