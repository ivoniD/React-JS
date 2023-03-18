import './App.css';
import { Catalog } from './components/Catalogue/Catalog';
import { Details } from './components/Details/Details';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login';
import { Routes, Route, Link, Router, useNavigate } from 'react-router-dom'
import { Register } from './components/Register/Register';
import { Edit } from './components/Edit/Edit';
import { Create } from './components/Create/Create';
import { useEffect, useState} from 'react';
import * as gameService from './services/gameService';



function App() {
	const [allGames, setAllGames] = useState([]);
	const navigate = useNavigate()

	const addNewComment = (gameId, comment) => {
		setAllGames(state => {
			const game = state.find(x => x._id === gameId)

			const comments = game.comments || [];
			comments.push(comment)
			console.log(comments);
			return [
				...state.filter(x => x._id !== gameId), // пускам в масива с игри, които не са currentGame. Изрязвам currentgame
				{...game, comments} 
				// добавям в масива обект който е currentGame и на самата игра добавям/подменям коментарите да са актуалните
			]
		})
	} 


	const addNewGame = (game) => {
		setAllGames(state => [...state, game])
		navigate('/catalog')
	}

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
					<Route path="/create" element={<Create addNewGame={addNewGame}  />} /> 
					<Route path="/catalog/:gameId" element={<Details allGames ={allGames} addNewComment={addNewComment}/>} /> 

				</Routes>
			</main>
		</div>
	);
}

export default App;
