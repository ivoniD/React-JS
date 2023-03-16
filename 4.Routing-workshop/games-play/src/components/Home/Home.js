import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';
import { Game } from './Game';

export const Home = () => {

	const [allGames, setAllGames] = useState();

	useEffect(() => {
		gameService.getAll()
			.then(result => {
				// console.log(result);
				setAllGames(result)
			})
	}, []) 


	return (
			<section id="welcome-world">
				<div className="welcome-message">
					<h2>ALL new games are</h2>
					<h3>Only in GamesPlay</h3>
				</div>
				<img src="./images/four_slider_img01.png" alt="hero" />
				<div id="home-page">
					
					{allGames && <h1>Latest Games</h1>}
					{allGames && allGames.map(x => <Game {...x} /> )}
					{!allGames && <p className="no-articles">No games yet</p>}
					
				</div>
			</section>

	)
}