import React from 'react'
import { useContext } from 'react';
import { Mycontext } from './Mycontext';
import "./Chat.css";

const Chat = () => {
       const {newchat , prevChats}  = useContext(Mycontext);

                return (
                  <>
              {newchat && <h1> Start a New Chat!</h1>}
                <div className='chats'>

                    {
                  prevChats?.map((chat,idx)=>
                    <div className={chat.role=== "user" ? "userDiv ": "gptdiv"} key={idx}>
                    {
                      chat.role ==="user"? 
                      <p className='userMessage'>{chat.content}</p> :
                      <p className='gptmessage'>{chat.content}</p>
                  
                    }
                    </div>
                
                  )
                }
              
        </div>
    </>
  )
}

export default Chat;
