
import React from 'react';

const MessageInput = ({ message, setMessage, onSend }) => {
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <input
      type="text"
      value={message}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default MessageInput;
