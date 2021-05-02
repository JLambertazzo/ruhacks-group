const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const routes = require('./routes')

const app = express()
app.use(routes)
const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    allowedHeaders: ['Access-Control-Allow-Origin']
  }
})

io.on('connection', function(socket) {
  console.log('user connected')
  socket.on('u1Ready', user1 => {
    socket.broadcast.emit('u2Ready', user1)
  })
  socket.on('u2Checked', index => {
    socket.broadcast.emit('u1Checked', index)
  })
  socket.on('message', message => {
    socket.broadcast.emit('message', message)
  })
})

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`listening on ${port}`))
