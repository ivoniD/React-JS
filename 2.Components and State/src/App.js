import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BookList } from './components/BookList';
import { Timer } from './components/Timer';
import { Clicker } from './components/Clicker';
import { Counter } from './components/Counter';
import { Car } from './components/Car';

function App() {
    let books = [
        {
          "author": "Chinua Achebe",
          "title": "Things Fall Apart",
          "year": 1958
        },
        {
          "author": "Hans Christian Andersen",
          "title": "Fairy tales",
          "year": 1836
        },
        {
          "author": "Dante Alighieri",
          "title": "The Divine Comedy",
          "year": 1315
        },
        {
          "author": "Virginia Woolf",
          "title": "To the Lighthouse",
          "year": 1927
        },
        {
          "author": "Marguerite Yourcenar",
          "title": "Memoirs of Hadrian",
          "year": 1951
        }
      ]
      


  return (
    <div className="App">
      <header className="App-header">

        <Header />
        <ul>
        <Car brand='astra' year='2014' color='red'/>
        <Car brand='audi' year='2020' color='blue'/>
        <Car brand='vw' year='2011' color='white'/>
        </ul>
       
        <Counter />

        <Clicker />
        <Clicker />
        <Clicker />
        <Timer start = {100}/>
        <Timer start = {10}/>
        <Timer start = {50}/>
        <Timer start = {27}/>

        <BookList books = {books}/>

        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
