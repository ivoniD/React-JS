import { useEffect, useState } from "react";

export const ToDoItem = (props) => {
  const [ status, setStatus] = useState(props.isCompleted);

  

  const statusHandler = () => {

  }

let className = 'todo'

if(props.isCompleted){
  className = 'todo is-completed';
}

  return (    
     
  <tr className= {className}>
              <td>{props.text}</td>
              <td>{props.isCompleted ? 'Complete' : 'Uncomplete'}</td>
              <td className="todo-action">
                <button onClick={() => props.onClick(props)} className="btn todo-btn">Change status</button>
              </td>
 </tr>

  );
}