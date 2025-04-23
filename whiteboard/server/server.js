// server/server.js

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow cross-origin requests

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000", // React app address
    methods: ["GET", "POST"]
  }
});

// Inline socket logic for testing (simplified)
io.on('connection', (socket) => {
    console.log("User connected:", socket.id);
  
    socket.on('draw', (data) => {
      socket.broadcast.emit('draw', data);
    });
  
    socket.on('disconnect', () => {
      console.log("User disconnected:", socket.id);
    });
});
  
server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
