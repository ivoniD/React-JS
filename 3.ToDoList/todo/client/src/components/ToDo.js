export const ToDo = (props) => {

  let className = 'todo';

  if(props.isDone){
    className = 'todo is-completed';
  }

  return(
    <tr className={className}>
    <td>{props.todo}</td>
    <td>{props.isDone ? 'Complete' : 'Incomplete'}</td>
    <td className="todo-action">
      <button onClick={() => props.changeStatus(props)} className="btn todo-btn">Change status</button>
    </td>
  </tr>
  )
}

