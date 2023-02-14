import { Book } from "./Book"


export const BookList = (props) => {
  return(
    <ul>
        {props.books.map((b, i) => <Book key={i} {...b}/>)}
    </ul>
  )
}