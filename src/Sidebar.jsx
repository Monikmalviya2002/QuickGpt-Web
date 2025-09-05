import React, { useEffect, useContext } from 'react';
import "./sidebar.css";
import { Mycontext } from './Mycontext';
import './App.css';
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

              const Sidebar = () => {
          const { allThread, setAllThread, currThreadId ,setPromt, setReply,setNewChat,setcurrThreadId,setPrevChats} = useContext(Mycontext);

            const getAllThreads = async () => {
               try {
             const response = await axios.get(
                "http://localhost:7777/api/thread",
                  {},
                  { withCredentials: true }
                     );

        const filterdata = response.data.map(thread =>({threadId : thread.threadId, title : thread.title}))
                   console.log(filterdata);
                 setAllThread(filterdata); 
                   } catch (err) {
              console.error("Error fetching threads:", err);
                    }
                  };

  
              useEffect(() => {
              getAllThreads();
              }, [currThreadId]);
                
               const getNewChat =()=>{
                setNewChat(true)
               setPrevChats([])
                setPromt("");
                setReply(null)
                setcurrThreadId(uuidv1());

               }
              

  return (
    <section className= 'sidebar'>
      <button onClick={getNewChat}>
      <img src= "src/assets/channels4_profile.jpg" alt='logo' className='logo'></img>
       <i className="fa-solid fa-pen-to-square"></i> 
     </button>
      
       <ul className="history">
       {
                   allThread?.map((thread , idx)=>(
                    <li key={idx}>{thread.title}</li>
                   ))
                   
       }
       </ul>

        <div className='sign'>
            <p> by me</p>
        </div>
    </section>
  )
}

export default Sidebar;


