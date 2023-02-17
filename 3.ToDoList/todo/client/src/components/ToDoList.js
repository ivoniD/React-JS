import { ToDo } from "./ToDo"
import { useEffect, useState } from 'react'

export const TodoList = () => {

const [todos, setTodos] = useState([])

useEffect(() => {
  fetch('http://localhost:3030/jsonstore/my')
  .then(res => res.json())
  .then(data => {
    setTodos(Object.values(data))
  })
}, []);

const changeStatusHandler = (singleTodo) => {

  setTodos(old => old.map(x => x._id === singleTodo._id ? {...x, isDone: !singleTodo.isDone} : x ))

}


  return(
    <table className="table">
          <thead>
            <tr>
              <th className="table-header-task">Task</th>
              <th className="table-header-status">Status</th>
              <th className="table-header-action">Action</th>
            </tr>
          </thead>
          <tbody>

           {todos.map(x => <ToDo changeStatus={changeStatusHandler} key={x._id} {...x} />)} 

          </tbody>
        </table>
  )
}