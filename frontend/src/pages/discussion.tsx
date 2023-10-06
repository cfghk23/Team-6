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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
  onDelete: any
  noDelete: boolean
}

const ListCard = (props: ListCardProps) => {
  const [likes, setLikes] = React.useState(Math.floor(Math.random() * 50))
  const [liked, setLiked] = React.useState(false)

  const [commentOnClick, setCommentOnClick] = React.useState<boolean>(false)

    const [open, setOpen] = React.useState(false);
    const [comment, setComment] = React.useState<string>('')
    const [tmpComment, setTmpComment] = React.useState<string>('')


    const handleCommentClickOpen = () => {
        setCommentOnClick(true);
    };

    const handleCommentClose = () => {
        setCommentOnClick(false);
    };

    const handleCommentSubmit = () =>{
        setCommentOnClick(false)
        setComment(tmpComment)
    }

    const handleCommentTextField = e => setTmpComment(e.target.value)


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
                                {props.description} <br/>
                                {comment == '' ? null : 'Comment: ' + comment}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                </ButtonBase>
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap>
                    <Button variant={liked ? "contained": "text"} onClick={() => {
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
                if (!liked) {
                  setLikes(likes + 1)
                  setLiked(true)
                } else {
                  setLikes(likes - 1)
                  setLiked(false)
                }
              }}
            >
              Like {likes}
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
                  handleCommentClickOpen();
              }}>Comment</Button>
              <Dialog open={commentOnClick} onClose={handleCommentClose} fullWidth={true}>
                            <DialogTitle>Comment</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Please enter the comment.
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Comment"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleCommentTextField}
                                    />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCommentClose}>Cancel</Button>
                                <Button onClick={handleCommentSubmit}>Submit</Button>
                            </DialogActions>
                        </Dialog>

                    <Button disabled={props.noDelete} variant="text" onClick={() => {
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
                props.onDelete()
              }}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

interface ContentCardProps {
  isLong: boolean
}

export default function SignIn() {
  const [contentIsLongQ, setContentIsLongQ] = React.useState(true)
  const [deleted, setDeleted] = React.useState([false, false, false])
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0)

  return (
    <Layout
      title={`Test`}
      description="This is a test page">
      <Box display="flex" padding='50px' alignItems='center' alignContent='center' justifyContent="center">
        <Stack spacing={2} direction="row">
            <Stack spacing={2} direction="column">
              {deleted[0] ? null : <ListCard title="Doubts on net income" description="I am not too sure net income and these statistics..." noDelete={false} onChange={() => {setContentIsLongQ(true)}}  onDelete={() => {
                var d = deleted;
                d[0] = true;
                setDeleted(d);
                forceUpdate();
              }}/>}
              {deleted[1] ? null : <ListCard title="Why do we need credit cards?" description="I had a question regarding this topic I read yesterday and was confused..." noDelete={false} onChange={() => {setContentIsLongQ(false)}} onDelete={() => {
                var d = deleted;
                d[1] = true;
                setDeleted(d);
                forceUpdate();
              }}/>}
              <ListCard title="What is the purpose of a credit score?" description="Like why use credit score, it makes it looks like a competition..." noDelete={true} onChange={() => {setContentIsLongQ(false)}} onDelete={() => {
                var d = deleted;
                d[2] = true;
                setDeleted(d);
                forceUpdate();
              }}/>
            </Stack>          
        </Stack>
      </Box>
    </Layout>
  )
}
