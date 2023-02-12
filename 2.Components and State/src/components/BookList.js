import { Book } from "./Book"


export const BookList = (props) => {

return (
<ul>

  <Book book = {props.books[0]}/>

  <Book book = {props.books[1]}/>

  <Book book = {props.books[2]}/>

  <Book book = {props.books[3]}/>

</ul>

)
}