import './App.css';
import { Details } from './components/Details/Details';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login';

function App() {
  return (
<div id="box">
< Header />

  <main id="main-content">
      < Home />
      {/* < Login /> */}
      {/* < Details/> */}

  </main>

</div>

  );
}

export default App;
