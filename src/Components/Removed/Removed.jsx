import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Removed({todos,setTodos,setActive,active}) {
  if(active.removed){
    setActive({...active,removed:false})
  }
  return (
    <div className="todoParentDiv">
    <h4>Removed Tasks</h4>
    <div className="todos">

    {
      todos[0]?
      todos.map((todo,index)=>{
        if(todo.status === 'Removed'){
          return(
                <div className="todo" key={index}>
                <h4 className="text">{todo.todo}</h4>
                <p className="date">On {todo.date}</p>
                <div className="options">
                  <button onClick={()=>{
                    setTodos(todos.filter(obj=>{
                      if(obj.id === todo.id){
                        obj = null
                      }
                      return obj
                    }))
                  }}><FontAwesomeIcon icon="fa-solid fa-circle-xmark" style={{color:'red'}}/></button>
                </div>
              </div>
              )
            }
            return (
              <div className='todo' style={{position:'absolute',width:'90%',height:'500px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                 <h4 className='text'>No Removed Todos</h4>
            </div>
            )
          })
          :
          <div className='todo' style={{position:'absolute',width:'90%',height:'500px',alignItems:'center',display:'flex',justifyContent:'center'}}>
          <h4 className='text'>No Removed Todos</h4>
          </div>
        }
        </div>
        
      </div>
  )
}

export default Removed