


import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import './App.css'
import { SearchBar } from "./components/search/SearchBar";
import { UserList } from "./components/user-list/UserList";
import { useEffect, useState} from 'react'
import * as userService from './services/userService'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll()
    .then(users => setUsers(users))
  }, [])



  return (
    <div>
    
    <Header />

    <main className="main">
      <section className="card users-container">
        <SearchBar />
        <UserList users={users} />
      </section>
    </main>

    <Footer />
    
    </div>
  );
}

export default App;
