import React from 'react'
import "./sidebar.css";

import './App.css'

const Sidebar = () => {
  return (
    <section className= 'sidebar'>
      <button>
      <img src= "src/assets/channels4_profile.jpg" alt='logo' className='logo'></img>
       <i className="fa-solid fa-pen-to-square"></i> 
     </button>
      
       <ul className="history">
        <li>Thread 1</li>
         <li>Thread 2</li>
          <li>Thread 3</li>
       </ul>

        <div className='sign'>
            <p> by me</p>
        </div>
    </section>
  )
}

export default Sidebar;


