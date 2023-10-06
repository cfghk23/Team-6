const express = require('express')
const { Novu } = require('@novu/node')
const novu = new Novu('<5e7c687631b30b8a5f939e4c6f35f05d')
const cors = require('cors')
const app = express()
const PORT = 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const users = [
  {
    email: 'john.doe@example.com',
    password: 'password123',
    username: 'johndoe',
    id: '0qxzb2ye',
    status: 'teacher',
  },
  {
    email: 'jane.doe@example.com',
    password: 'password456',
    username: 'janedoe',
    id: '1abx3cde',
    status: 'admin',
  },
  {
    email: 'bob.smith@example.com',
    password: 'password789',
    username: 'bobsmith',
    id: '2fgh4ijk',
    status: 'teacher',
  },
  {
    email: 'allan.walker@example.com',
    password: 'password789',
    username: 'allan.walker',
    id: '2fgh4ijk',
    status: 'student',
  },
]
const threadList = [
  {
    id: '9qqj9wgn',
    title: 'New thread title',
    userId: '0qxzb2ye',
    replies: [],
    likes: [],
  },
  {
    id: '8hjg7f6d',
    title: 'Another thread title',
    userId: '1abx3cde',
    replies: [],
    likes: [],
  },
  {
    id: '7kji6h5g',
    title: 'A third thread title',
    userId: '2fgh4ijk',
    replies: [],
    likes: [],
  },
  {
    id: '6fed5c4b',
    title: 'Fourth thread title',
    userId: '3hij2klm',
    replies: [],
    likes: [],
  },
  {
    id: '5cba4b3a',
    title: 'Fifth thread title',
    userId: '4mno1pqr',
    replies: [],
    likes: [],
  },
  {
    id: '4a3b2c1d',
    title: 'Sixth thread title',
    userId: '5stu6vwx',
    replies: [],
    likes: [],
  },
]

const generateID = () => Math.random().toString(36).substring(2, 10)

app.post('/api/login', (req, res) => {
  const { email, password } = req.body
  let result = users.filter(
    (user) => user.email === email && user.password === password
  )

  if (result.length !== 1) {
    return res.json({
      error_message: 'Incorrect credentials',
    })
  }

  res.json({
    message: 'Login successfully',
    id: result[0].id,
  })
})

// app.post('/api/register', async (req, res) => {
//   const { email, password, username } = req.body
//   const id = generateID()
//   const result = users.filter(
//     (user) => user.email === email && user.password === password
//   )

//   if (result.length === 0) {
//     const newUser = { id, email, password, username }
//     // await novu.subscribers.identify(id, { email })

//     users.push(newUser)
//     return res.json({
//       message: 'Account created successfully!',
//     })
//   }
//   res.json({
//     error_message: 'User already exists',
//   })
// })

app.post('/api/create/thread', async (req, res) => {
  const { thread, userId } = req.body
  let threadId = generateID()
  threadList.unshift({
    id: threadId,
    title: thread,
    userId,
    replies: [],
    likes: [],
  })

  //   await novu.topics.create({
  //     key: threadId,
  //     name: thread,
  //   })

  //   await novu.topics.addSubscribers(threadId, {
  //     subscribers: [userId],
  //     //replace with your subscriber ID to test run
  //     // subscribers: ["<YOUR_SUBSCRIBER_ID>"],
  //   })

  res.json({
    message: 'Thread created successfully!',
    threads: threadList,
  })
})

app.get('/api/all/threads', (req, res) => {
  res.json({
    threads: threadList,
  })
})

// Delete a Thread
app.delete('/api/thread/delete', (req, res) => {
  const { threadId, id } = req.body
  const result = threadList.filter((thread) => thread.id === threadId)

  if (result.length === 0) {
    return res.json({
      error_message: 'Thread not found',
    })
  }

  const user = users.find((user) => user.id === id)

  if (!user || user.status !== 'teacher') {
    return res.json({
      error_message: 'You are not authorized to delete this thread',
    })
  }

  const threadIndex = threadList.indexOf(result[0])
  threadList.splice(threadIndex, 1)

  res.json({
    message: 'Thread deleted successfully!',
  })
})

// Rect to a Thread
app.post('/api/thread/like', (req, res) => {
  const { threadId, userId } = req.body
  const result = threadList.filter((thread) => thread.id === threadId)

  if (result.length === 0) {
    return res.json({
      error_message: 'Thread not found',
    })
  }

  const threadLikes = result[0].likes

  const authenticateReaction = threadLikes.filter((user) => user === userId)

  if (authenticateReaction.length === 0) {
    threadLikes.push(userId)
    return res.json({
      message: "You've reacted to the post!",
    })
  }
  res.json({
    error_message: 'You can only react once!',
  })
})

// reply to a post
app.post('/api/thread/replies', (req, res) => {
  const { id } = req.body
  const result = threadList.filter((thread) => thread.id === id)
  res.json({
    replies: result[0].replies,
    title: result[0].title,
  })
})

app.post('/api/create/reply', async (req, res) => {
  const { id, userId, reply } = req.body
  const result = threadList.filter((thread) => thread.id === id)

  if (result.length === 0) {
    return res.json({
      error_message: 'Thread not found',
    })
  }

  const username = users.filter((user) => user.id === userId)
  const threadReplies = result[0].replies

  threadReplies.unshift({ name: username[0].username, text: reply })

  //   await novu.trigger('topicnotification', {
  //     to: [{ type: 'Topic', topicKey: id }],
  //   })

  res.json({
    message: 'Response added successfully!',
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

// delete - owner & admin
