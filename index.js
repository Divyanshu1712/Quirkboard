require('dotenv').config();
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const PORT = 3000;
app.use(express.static('public'));

const roomStore = {}; // roomId: { password, users }

io.on('connection', socket => {
  socket.on('join-room', ({ roomId, roomPass }, cb) => {
    // Create or validate room
    if (!roomStore[roomId]) {
      roomStore[roomId] = { password: roomPass, users: [] };
    }

    if (roomStore[roomId].password !== roomPass) {
      return cb({ success: false, message: "Incorrect password" });
    }

    socket.on('clear-canvas', () => {
        socket.to(roomId).emit('clear-canvas');
    });
    
    socket.join(roomId);
    roomStore[roomId].users.push(socket.id);
    cb({ success: true });

    // Relay draw/cursor to room only
    socket.on('drawing', data => {
      socket.to(roomId).emit('drawing', data);
    });

    socket.on('cursor', data => {
      socket.to(roomId).emit('cursor', data);
    });

    socket.on('disconnect', () => {
      roomStore[roomId].users = roomStore[roomId].users.filter(id => id !== socket.id);
      if (roomStore[roomId].users.length === 0) delete roomStore[roomId];
    });
  });
});

server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
