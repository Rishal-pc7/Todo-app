import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

function Completed({todos,setTodos,setActive,active}) {
  if(active.completed){
    setActive({...active,completed:false})
  }
  return (
    <div className='todoParentDiv'>
      <h4>Completed Tasks</h4>
      <div className="todos">
        {
          todos[0]?
          todos.map((todo,index)=>{
            if(todo.status === 'Completed'){
              return(
                <div className="todo" key={index}>
                <h4 className="text">{todo.todo}</h4>
                <p className="date">On {todo.date}</p>
                <div className="options">
                  <button onClick={()=>{
                    

                      setTodos(todos.filter(obj=>{
                        if(obj.id === todo.id){
                        let dt=moment(new Date()).format('DD MMMM YYYY hh:mm a')
                        obj.date=dt
                        obj.status = 'Removed'
                      }
                      setActive({...active,removed:true})
                      return obj
                    }))
                  }}><FontAwesomeIcon icon="fa-solid fa-circle-xmark" style={{color:'red'}}/></button>
                  </div>
                  </div>
                  )
                }
            return (
              <div className='todo' style={{position:'absolute',width:'90%',height:'500px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                 <h4 className='text'>No Completed Todos</h4>
            </div>
            )
          })
          :
          <div className='todo' style={{position:'absolute',width:'90%',height:'500px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                 <h4 className='text'>No Completed Todos</h4>
            </div>
        }
        
        
        
        
      </div>
    </div>
  )
}

export default Completed