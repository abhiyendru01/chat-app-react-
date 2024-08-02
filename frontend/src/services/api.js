import axios from 'axios';

const API_URL = 'http://localhost:5000';

const register = (username, password) => axios.post(`${API_URL}/auth/register`, { username, password });
const login = (username, password) => axios.post(`${API_URL}/auth/login`, { username, password });
const getMessages = () => axios.get(`${API_URL}/chat/messages`);
const sendMessage = (token, content) => axios.post(`${API_URL}/chat/messages`, { content }, { headers: { Authorization: `Bearer ${token}` } });

export { register, login, getMessages, sendMessage };
