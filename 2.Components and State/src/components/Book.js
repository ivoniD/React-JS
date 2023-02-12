
export const Book = (props) => {
  return(
    <li>
      <div> 
        <p>
          {props.book.title} - {props.book.author} - {props.book.year}
        </p>  
      </div>
    </li>
  )



}