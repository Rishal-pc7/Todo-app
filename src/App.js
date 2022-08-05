
import './App.css';
import Completed from './Completed';

import {useState} from 'react'
function App() {
  const [showCom,setShowCom]=useState(false)
  const [showRem,setShowRem]=useState(false)
  const [toDo,settoDo] =useState('')
  const [toDos,setToDos]=useState([])
  const [comToDos,setComToDos]=useState([])
  const [remToDos,setRemToDos]=useState([])
  return (
    <div className="app">
      
      
      <nav className="navbar navbar-expand-lg navbar-light bg-home">
  <div className="container-fluid">
    <h4 className='main-text'>Todo List</h4>
    
    
  </div>
</nav>
      <div className="input">
        
        <input value={toDo} onChange={(e)=>settoDo(e.target.value)} type="text" placeholder="Add item..." />
        <button onClick={()=>{setToDos([...toDos,{id:Date.now(),todo:toDo,status:false}])
        settoDo('')
      }} className='add-btn'>ADD</button>
      </div>
      <div className='todo-category'>
        <h3 className='todo-cat-name'>Active Todos</h3>
        <hr className='category-hr'/>

      </div>
      
      <div className="todos">
      {
        toDos[0] ?
        toDos.map((obj,index)=>{
        
        return(<div className="todo">
          <div className="left">
            
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" onClick={(e)=>{
              setToDos(toDos.filter(obj2=>{
                if(obj2.id === obj.id){
                  obj2.status=e.target.checked
                  setComToDos([...comToDos,{id:obj2.id,todo:obj2.todo,status:obj2.status}])
                  obj2=null
                }
                return obj2
              }
              
              ))


            }} />
            
            <p>{obj.todo}</p>
          </div>
          <div className="right">
          
            <button onClick={()=>{
              setToDos(toDos.filter(obj2=>{
                if(obj2.id === obj.id){
                  
                  setRemToDos([...remToDos,{id:obj2.id,todo:obj2.todo,status:obj2.status}])
                  obj2=null
                }
                return obj2
              }
              
              ))
            }} className="btn btn-danger"><span className='fas fa-times'></span></button>
          </div>
        </div>
        )
        })
        :
        <div className="todo">
          <div className="left">
            
            
            
            <p>No Active Todos</p>
          </div>
          
        </div>
      }
      </div>
      <div className='todo-category'>
        <h3 className='todo-cat-name'>Completed Todos</h3>
        <span className='chevrons' onClick={()=>{setShowCom(!showCom)}}><i class="fas fa-chevron-down"></i></span>
        <hr className='category-hr'/>

      </div>
      {

        showCom && <Completed toDos={comToDos}/>

      }
      
      
      <div className='todo-category'>
        <h3 className='todo-cat-name'>Removed Todos</h3>
        <span className='rem-chevrons' onClick={()=>{setShowRem(!showRem)}}><i class="fas fa-chevron-down"></i></span>
        <hr className='category-hr'/>

      </div>
      {showRem &&  <div className="todos">
        {
          remToDos[0] ?
        remToDos.map((todo,index)=>{        
        return(<div className="todo">
          <div className="left">
            
            <p>{todo.todo}</p>
          </div>
          <div className="right">
            <button className='btn btn-danger' onClick={()=>{
              setRemToDos(remToDos.filter(obj2 =>{
                if(obj2.id === todo.id){
                  setToDos([...toDos,obj2])
                  obj2=null
                }
                return obj2
              }))
            }}><span className="fas fa-times"></span></button>
          </div>
        </div>
        )
        })

        :
        <div className="todo">
          <div className="left">
            
            
            
            <p>No Removed Todos</p>
          </div>
          
        </div>
        }
      </div>}
    </div>
  );
     
     


}

export default App;