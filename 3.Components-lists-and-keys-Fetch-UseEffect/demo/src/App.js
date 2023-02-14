
import "./App.css";
import { BookList } from "./components/BookList";

function App() {
  let books = [
    {
      author: "Chinua Achebe",
      title: "Things Fall Apart",
      year: 1958,
    },
    {
      author: "Hans Christian Andersen",
      title: "Fairy tales",
      year: 1836,
    },
    {
      author: "Dante Alighieri",
      title: "The Divine Comedy",
      year: 1315,
    },
    {
      author: "Virginia Woolf",
      title: "To the Lighthouse",
      year: 1927,
    },
    {
      author: "Marguerite Yourcenar",
      title: "Memoirs of Hadrian",
      year: 1951,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
      <BookList books= {books} />
      </header>
    </div>
  );
}

export default App;
