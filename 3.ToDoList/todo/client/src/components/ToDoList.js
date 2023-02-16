import { ToDoItem } from "./ToDoItem";
import { useEffect, useState } from "react"


export const ToDoList = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos/')
      .then(res => res.json())
      .then(result => {
        setTodos(Object.values(result))
      })
    }, [])

    const statusHandler = (todo) => {


      fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({isCompleted: !todo.isCompleted}),
        })
        .then(res => res.json())
        .then(modifiedTodo => {
            setTodos(oldTodos => oldTodos.map(x => x._id === todo._id ? modifiedTodo : x));
        })
    };

  return (
       <table className="table">
          <thead>
            <tr>
              <th className="table-header-task">Task</th>
              <th className="table-header-status">Status</th>
              <th className="table-header-action">Action</th>
            </tr>
          </thead>
          <tbody> 
            {todos.map(x => <ToDoItem key= {x._id} {...x} onClick={statusHandler}/> )}
          </tbody>
        </table>
  );
};
