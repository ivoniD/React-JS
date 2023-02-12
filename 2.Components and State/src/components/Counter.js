import { useState } from "react"

export const Counter = (props) => {

  const [count, setCount] = useState(props.start || 0)
  const [direction, setDirection] = useState('None')

  const increaseHandler = () => {
      setCount(oldCount => oldCount + 1)
      setDirection('Increased by 1')
  }

  const decreaseHandler = () => {
      setCount(oldValue => oldValue -1)
      setDirection('Decreased by 1')
  }
  const clearHandler = () => {
    setCount(0)
  }

  let title = '';
   
  if(count %2 === 0){
    title = 'Even';
  }else {
    title = 'Odd'
  }


//{dangerClicks && <h2>Danger Clicks</h2>}
  return(
    <div>
      <h1 style = {{fontSize: 16 + count + 'px'}}> {direction}  </h1>
      <h2>{count}</h2>
      <button onClick={decreaseHandler}>-</button>      
      <button onClick={clearHandler}>Clear</button>
      <button onClick={increaseHandler}>+</button>


    </div>
  )
}