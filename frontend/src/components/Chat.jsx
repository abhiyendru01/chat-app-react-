import React, { useState, useEffect } from 'react';
import { getMessages, sendMessage } from '../services/api';
import socket from '../services/socket';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chat = ({ token }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessages();
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    socket.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => socket.off('message');
  }, []);

  const handleSend = async () => {
    try {
      await sendMessage(token, message);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput
        message={message}
        setMessage={setMessage}
        onSend={handleSend}
      />
    </div>
  );
};

export default Chat;
