// src/socket.js
import { io } from 'socket.io-client';
const socket = io("http://localhost:5000");  // must match backend

export default socket;
