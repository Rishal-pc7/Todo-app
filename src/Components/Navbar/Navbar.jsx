import React from 'react'
import './Navbar.css'
function Navbar({current,setCurrent,active}) {
  return (
    <div className='navbar'>
        <ul>
            <li className={current === 'Todo' ?'active' : ''} onClick={()=>setCurrent('Todo')}>Todo List</li>
            <li className={current === 'Completed' ?'active' : ''} onClick={()=>setCurrent('Completed')}>Completed Task {active.completed ? <div className='current'></div>: ''}</li>
            <li className={current === 'Removed' ?'active' : ''} onClick={()=>setCurrent('Removed')}>Removed Task {active.removed ? <div className='current'></div>: ''}</li>
        </ul>
    </div>
  )
}

export default Navbar