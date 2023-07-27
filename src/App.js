import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {useMediaQuery} from 'react-responsive'
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';
import Todo from './Components/Todo/Todo';
import Completed from './Components/Completed/Completed';
import Removed from './Components/Removed/Removed';
import Navbar from './Components/Navbar/Navbar';
function App() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const [current,setCurrent]=useState('Todo')
  const [active,setActive]=useState({completed:false,removed:false})
  const [todos,setTodos]=useState([])
  return (
    <div className="App">
     {isDesktopOrLaptop ? <Sidebar current={current} setCurrent={setCurrent} active={active} /> :<Navbar current={current} setCurrent={setCurrent} active={active} /> }
     {current === 'Todo' ? <Todo todos={todos} setTodos={setTodos} setActive={setActive} active={active}/> : current === 'Completed'? <Completed todos={todos} setTodos={setTodos} setActive={setActive} active={active}/>:current === 'Removed'?<Removed todos={todos} setTodos={setTodos} setActive={setActive} active={active}/>:''}
    </div>
  );
}

export default App;
library.add(fab,far,fas)