import './App.css';
import { Catalog } from './components/Catalogue/Catalog';
import { Details } from './components/Details/Details';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login';
import { Routes, Route, Link, Router } from 'react-router-dom'
import { Register } from './components/Register/Register';
import { Edit } from './components/Edit/Edit';
import { Create } from './components/Create/Create';
import { useEffect, useState } from 'react';
import * as gameService from './services/gameService';


function App() {
	const [allGames, setAllGames] = useState([]);

	useEffect(() => {
		gameService.getAll()
			.then(result => {
				// console.log(result);
				setAllGames(result)
			})
	}, []) 

	return (
		<div id="box">
			< Header />
			<main id="main-content">
				<Routes>

					<Route path="/" element={<Home allGames ={allGames}/>} /> 
					<Route path="/catalog" element={<Catalog allGames ={allGames}/>} /> 
					<Route path="/login" element={<Login />} /> 
					<Route path="/register" element={<Register />} /> 
					<Route path="/edit" element={<Edit />} /> 
					<Route path="/create" element={<Create />} /> 
					<Route path="/catalog/:gameId" element={<Details allGames ={allGames}/>} /> 

				</Routes>
			</main>
		</div>
	);
}

export default App;
