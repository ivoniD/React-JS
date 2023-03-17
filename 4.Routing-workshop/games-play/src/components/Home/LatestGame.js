import { Link } from "react-router-dom";

export const LatestGame = (props) => {

  console.log(props);

  return(
    <div className="game">
						<div className="image-wrap">
							<img src={props.imageUrl} />
						</div>
						<h3>{props.title}</h3>
						<div className="rating">
							<span>☆</span>
							<span>☆</span>
							<span>☆</span>
							<span>☆</span>
							<span>☆</span>
						</div>
						<div className="data-buttons">
							<Link to={`/catalog/${props._id}`} className="btn details-btn">
								Details
							</Link>
			
						</div>
					</div>
  )
}