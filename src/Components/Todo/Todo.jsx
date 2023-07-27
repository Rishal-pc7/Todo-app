import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
function Todo({todos,setTodos,setActive,active}) {
  let [todo,setTodo]=useState('')
  let date
  return (
    <div className='todoParentDiv'>
      <div className="addTodo">
        <input type="text" placeholder={'Add Todo'} value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={()=>{
          date=moment(new Date()).format('DD MMMM YYYY hh:mm a')
          setTodos([...todos,{id:Date.now(),todo:todo,status:'Active',date:date}])
        setTodo('')
      }}>ADD</button>
      </div>
      <div className="todos">
        {
          todos[0]?
          todos.map((todo,index) =>{
            if(todo.status === 'Active'){

              return(
                
                <div className="todo" key={index}>
          <h4 className="text">{todo.todo}</h4>
          <p className="date">On {todo.date}</p>
          <div className="options">
            <button onClick={()=>setTodos(todos.filter(obj =>{
              if(obj.id === todo.id){
                let dt=moment(new Date()).format('DD MMMM YYYY hh:mm a')
                obj.date=dt
                obj.status='Completed'
              }
              setActive({...active,completed:true})
              return obj
            }))}><FontAwesomeIcon icon="fa-solid fa-circle-check" style={{color:'green'}}/></button>
            <button onClick={()=>setTodos(todos.filter(obj =>{
              if(obj.id === todo.id){
                let dt=moment(new Date()).format('DD MMMM YYYY hh:mm a')
                obj.date=dt
                obj.status='Removed'
              }
              setActive({...active,removed:true})
              return obj
              }))}><FontAwesomeIcon icon="fa-solid fa-circle-xmark" style={{color:'red'}}/></button>
          </div>
        </div>
            )
          }
          return (
            <div className='todo' style={{position:'absolute',width:'90%',height:'500px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                 <h4 className='text'>No Active Todos</h4>
            </div>
          )
          } )
          :
              <div className='todo' style={{position:'absolute',width:'90%',height:'500px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                 <h4 className='text'>No Active Todos</h4>
            </div>
          
          
        }
        
        
        
      </div>
    </div>
  )
}

export default Todo