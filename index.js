const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 3012;
const mongoose = require('mongoose');

const registerRoute = require('./routes/RegisterRoute')
const loginRoute = require('./routes/LoginRoute')
const chatRoute = require('./routes/ChatRoute')

app.use('/login', loginRoute)
app.use('/register', registerRoute)
app.use('/chat',chatRoute)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/static/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`))