// src/services/socket.js
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Make sure the URL matches your backend server

export default socket;
