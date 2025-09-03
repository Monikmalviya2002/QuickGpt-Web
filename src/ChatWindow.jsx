import React, { useContext, useState } from 'react';
import './ChatWindow.css';
import { Mycontext } from './Mycontext';
import axios from 'axios';
import {ScaleLoader} from "react-spinners";


const ChatWindow = () => {
         const { reply, setReply, prompt, setPrompt , currThreadId } = useContext(Mycontext);
          const [loading , setLoading]  = useState(false);

           const getReply = async () => {
                     setLoading(true);
              

            try {
            const res = await axios.post(
                "http://localhost:7777/api/chat",
                { message: prompt, threadId: currThreadId}, 
             { headers: { "Content-Type": "application/json" }, withCredentials: true }
                     );
                          
                      console.log(res.data);

                       setReply(res.data.reply);
                        setLoading(false);
                    }

                  catch (err) {   
               console.log(err);
                   }
                     };

            

             return (
           <div className='chatwindow'>
            <div className='navbar'>
           <span> QuickGpt <i className="fa-solid fa-chevron-down"></i></span>
           
               <div className='user'>
             <div className='usericon'>
            <span className="userIcon"><i className="fa-solid fa-user"></i></span>
              </div>
            </div>
            </div>

               <ScaleLoader color ="#fff" loading={loading}>

               </ScaleLoader>
            <div className='chatinput'>
             <div className='inputbox'>
             <input
             placeholder="Ask anything"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
           onKeyDown={(e)=> e.key==="Enter" ? getReply() : ""}
          />

              
               <span id='submit'onClick={getReply}><i className="fa-solid fa-paper-plane"></i></span>
               
               </div>
             
              <p className='info'>QuickGpt can make mistakes. Check important info. See Cookie Preferences.</p>
             
             </div>
            </div>
    



  )
};
export default ChatWindow;

