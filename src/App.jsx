import './App.css';
import ChatWindow from "./ChatWindow.jsx";
import "./sidebar.css";
import Sidebar from "./Sidebar.jsx";
import { useState } from 'react';
import { Mycontext } from './Mycontext.jsx';
import { v1 as uuidv1 } from 'uuid';
import Chat from './Chat.jsx';

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const[currThreadId , setcurrThreadId]= useState(uuidv1());
    const[prevChats , setPrevChats]  = useState([]);
      const[newchat , setNewChat] = useState(true);

       const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setcurrThreadId,
    prevChats, setPrevChats,
    newchat,setNewChat
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
