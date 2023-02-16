import { useEffect, useState } from "react";

export const Book = (props) => {

  const [highlited, sethighlited] = useState(false)
  const [marked, setMartked] = useState(false)

  useEffect(() => {
    console.log('Mounting' + props.title);
  }, [])

  useEffect(() => {
    console.log('Updating' + props.title);
  }, [highlited])

  const clickHandler = () => {
    sethighlited(state => !state) //--> if is false make it true and vice versa
  }

 const markHandler = () => {
  setMartked(state => !state)
  }

  let style = {};

  if(highlited){
    style.backgroundColor = 'yellow'
    // style.color = 'black'
  }
  if(marked){
    style.backgroundColor = 'red'
  }




  return (
    <li style={style}>
        <h2> Title: {props.title} </h2>
        <div> Year: {props.year} </div>
        <footer> 
        <button onClick={clickHandler}>{!highlited ? 'Highlite Yellow' : 'Remove Yellow Highlite'}</button>
        <button  onClick={markHandler}>{!marked ? 'Mark Red' : 'Remove Red Mark'}</button>
        <span> Author: {props.author} </span>
        </footer>
    </li>
  );
};
