import './App.css';
import ChatWindow from "./ChatWindow.jsx";
import "./sidebar.css";
import Sidebar from "./Sidebar.jsx";
import { useState } from 'react';
import { Mycontext } from './Mycontext.jsx';
import { v1 as uuidv1 } from 'uuid';

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const[currThreadId , setcurrThreadId]= useState(uuidv1());
  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setcurrThreadId
  };

  return (
    <div className="app">
      <Mycontext.Provider value={providerValues}>
        <Sidebar />
        <ChatWindow />
      </Mycontext.Provider>
    </div>
  );
}

export default App;
