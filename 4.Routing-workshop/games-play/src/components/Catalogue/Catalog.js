import { useEffect, useState } from "react";
import * as gameService from '../../services/gameService'
import { Game } from "./Game";

export const Catalog = () => {
  const[allGames, setAllGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setAllGames(oldGames => result)
      })
  }, [])

  return(
  <section id="catalog-page">

      {allGames ? <h1>All Games</h1> : <h3 className="no-articles">No articles yet</h3>}

      {allGames && allGames.map(x => <Game key={x._id} {...x} />) }
  
  </section>

  )
}