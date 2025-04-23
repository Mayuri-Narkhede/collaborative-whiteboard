// server/sockets/drawing.js

module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('User connected:', socket.id);
  
      // Listen for draw events from client
      socket.on('draw', (data) => {
        // Broadcast to all other clients
        socket.broadcast.emit('draw', data);
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });
  };
  