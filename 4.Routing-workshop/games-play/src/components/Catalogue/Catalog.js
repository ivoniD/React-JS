import { Game } from "./Game";


export const Catalog = (props) => {

  return(
  <section id="catalog-page">

      {props.allGames ? <h1>All Games</h1> : <h3 className="no-articles">No articles yet</h3>}

      {props.allGames && props.allGames.map(x => <Game key={x._id} {...x} />) }
  
  </section>

  )
}