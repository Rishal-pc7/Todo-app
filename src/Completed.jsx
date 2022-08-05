import React from 'react'
import './App.css'
function Completed(props) {
    const toDos=props.toDos
    
    if(toDos[0]){
        return (
      
            <div>
               <div className="todos">
                   {
        
                   toDos.map((obj,index)=>{
                return(<div className="todo">
                  <div className="left">
                    
                    <p>{obj.todo}</p>
                  </div>
                  <div className="right">
                  <span class="text-primary fas fa-check-double"></span>
                  </div>
                  
                </div>
                )
                })
                }
              </div>
            </div>
          )

    }else{
        return(
            <div className="todos">
            <div className="todo">
          <div className="left">
            
            <p>No completed Todos</p>
          </div>
          
        </div>
        </div>
        )

    }
    
   
 
}

export default Completed
