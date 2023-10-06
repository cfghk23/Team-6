import * as React from 'react'
import Layout from '@theme/Layout'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import DoneIcon from '@mui/icons-material/Done'
import {
  ButtonBase,
  CardActionArea,
  CardActions,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import axios from 'axios'

interface ListCardProps {
  title: string
  description: string
  onChange: any
}

const ListCard = (props: ListCardProps) => {
  return (
    <Card sx={{ maxWidth: 10000 }}>
      <ButtonBase
        onClick={(event) => props.onChange()}
        style={{
          display: 'block',
          textAlign: 'initial',
        }}
      >
        <CardContent>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction='row'
            useFlexGap
            flexWrap='wrap'
          >
            <img
              src='img/docusaurus-social-card.jpg'
              width={175}
              height={100}
            />
            <Typography gutterBottom variant='h5' component='div'>
              Question: I had a question regarding this topic I read yesterday
              and was confused...
            </Typography>
            <Button
              variant='text'
              onClick={() => {
                axios
                  .post('http://localhost:4000/api/thread/like', {
                    threadId: '9qqj9wgn',
                    userId: '0qxzb2ye',
                  })
                  .then(function (response) {
                    console.log(response)
                  })
                  .catch(function (error) {
                    console.log(error)
                  })
              }}
            >
              Like
            </Button>
            <Button
              variant='text'
              onClick={() => {
                axios
                  .post('http://localhost:4000/api/create/reply', {
                    threadId: '9qqj9wgn',
                    userId: '0qxzb2ye',
                  })
                  .then(function (response) {
                    console.log(response)
                  })
                  .catch(function (error) {
                    console.log(error)
                  })
              }}
            >
              Comment
            </Button>
            <Button variant='text'>Edit</Button>
            <Button
              variant='text'
              onClick={() => {
                axios
                  .post('http://localhost:4000/api/thread/delete', {
                    threadId: '9qqj9wgn',
                    userId: '0qxzb2ye',
                  })
                  .then(function (response) {
                    console.log(response)
                  })
                  .catch(function (error) {
                    console.log(error)
                  })
              }}
            >
              Delete
            </Button>
          </Stack>
          <Typography variant='body2' color='text.secondary'>
            {props.description}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  )
}

interface ContentCardProps {
  isLong: boolean
}

export default function SignIn() {
  const [contentIsLongQ, setContentIsLongQ] = React.useState(true)

  return (
    <Layout title={`Test`} description='This is a test page'>
      <Box
        display='flex'
        padding='50px'
        alignItems='center'
        alignContent='center'
        justifyContent='center'
      >
        <Stack spacing={2} direction='row'>
          <Box height='75vh' style={{ overflowY: 'scroll' }}>
            <Stack spacing={2} direction='column'>
              <ListCard
                title='Budget'
                description='Doubts on net income'
                onChange={() => {
                  setContentIsLongQ(true)
                }}
              />
              <ListCard
                title='Class 2'
                description='I had a question on hedging'
                onChange={() => {
                  setContentIsLongQ(false)
                }}
              />
              <ListCard
                title='Class 2'
                description='This is a class'
                onChange={() => {
                  setContentIsLongQ(false)
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Layout>
  )
}
