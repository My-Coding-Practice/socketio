import React, {useState} from 'react';
import './App.css';
import MessageInput from './components/MessageInput';
import Messages from'./components/Messages'

function App() {
  const [messages, setMessages] = useState([])
  return (
    <div className="App">
      <Messages/>
      <MessageInput/>
    </div>
  );
}

export default App;
