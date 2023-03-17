export const Game = (props) => {
  return (
    <div className="allGames">
    <div className="allGames-info">
      <img src={props.imageUrl} />
      <h6>{props.category}</h6>
      <h2>{props.title}</h2>
      <a href="#" className="details-button">
        Details
      </a>
    </div>
  </div>
  )
}