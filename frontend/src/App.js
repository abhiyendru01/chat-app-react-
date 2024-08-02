import React, { useState } from 'react';
import Login from './components/Login';
import Chat from './components/Chat';

const App = () => {
  const [token, setToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!loggedIn ? (
        <Login setToken={setToken} setLoggedIn={setLoggedIn} />
      ) : (
        <Chat token={token} />
      )}
    </div>
  );
};

export default App;
