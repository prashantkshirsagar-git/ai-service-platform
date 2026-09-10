import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { clerkMiddleware, clerkClient, getAuth } from '@clerk/express'

const app = express()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send('Server is Live!'))


app.get('/protected', async (req, res) => {
  const { isAuthenticated, userId } = getAuth(req)

  if (!isAuthenticated) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const user = await clerkClient.users.getUser(userId)

  res.json({ user })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})