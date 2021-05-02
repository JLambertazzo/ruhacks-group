const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const routes = require('./routes')

const app = express()
app.use(routes)
const server = http.createServer(app)
const io = socketIo(server)

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`listening on ${port}`))
