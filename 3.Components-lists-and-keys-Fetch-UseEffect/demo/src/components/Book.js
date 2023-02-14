import { useEffect, useState } from "react";

export const Book = (props) => {

  const [highlited, sethighlited] = useState(false)

  useEffect(() => {
    console.log('Mounting' + props.title);
  }, [])

  useEffect(() => {
    console.log('Updating' + props.title);
  }, [highlited])

  const clickHandler = () => {
    sethighlited(state => !state) //--> if is false make it true and vice versa
  }

  let style = {};
  if(highlited){
    style.backgroundColor = 'yellow'
    style.color = 'black'
  }



  return (
    <li onClick={clickHandler} style={style}>
        <h2> Title: {props.title} </h2>
        <div> Year: {props.year} </div>
        <footer> Author: {props.author} </footer>
    </li>
  );
};
