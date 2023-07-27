import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.css'
function Sidebar({current,setCurrent,active}) {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="avatar">
         <FontAwesomeIcon icon="fa-solid fa-user-tie" style={{color:'#fff',fontSize:'80px'}} />
        </div>
         <div className="username">
          <p>RISHAL P</p>
         </div>
      </div>
      <div className="tasks">
        <h4 className="heading">Tasks</h4>
        <div>

        <ul>
          <li className={current==='Todo'?'active':''} onClick={()=>setCurrent('Todo')}>To do List</li>
          <li className={current==='Completed'?'active':''} onClick={()=>setCurrent('Completed')}>Completed Tasks {active.completed ? <div className='current'></div>: ''}</li>
          <li className={current==='Removed'?'active':''} onClick={()=>setCurrent('Removed')}>Removed Tasks {active.removed ? <div className='current'></div>: ''}</li>
        </ul>
        </div>
      </div>
     </div>
  )
}

export default Sidebar