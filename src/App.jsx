
import './App.css'
import ChatWindow from "./ChatWindow.jsx";
import "./sidebar.css"
import Sidebar from "./Sidebar.jsx";

import { Mycontext } from './Mycontext.jsx';

function App() {
    const providerValues = {};
  return (
   <div className='app'>
    <Mycontext.Provider value={providerValues}>
      <Sidebar />
    <ChatWindow />
   
   </Mycontext.Provider>

   </div>
  )
}

export default App;
