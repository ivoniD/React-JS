import { Link } from "react-router-dom";

export const Game = (props) => {
  return (
    <div className="allGames">
    <div className="allGames-info">
      <img src={props.imageUrl} />
      <h6>{props.category}</h6>
      <h2>{props.title}</h2>
      <Link to={`/catalog/${props._id}`} className="details-button">
        Details
      </Link>
    </div>
  </div>
  )
}