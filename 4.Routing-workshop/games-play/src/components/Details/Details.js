import { useState } from "react";
import { useParams } from "react-router-dom"

export const Details = (props) => {

  const {gameId} = useParams()
  const [comment, setComment] = useState({
    username: '',
    comment: '',
  })

  // console.log(`params - ${gameId}`);
  const currentGame = props.allGames.find(x => x._id == gameId)
  // console.log(`current Game - ${currentGame.title}`);
  // console.log(props.allGames);

  const newCommentHandler = (e) => {
    e.preventDefault();

    const newComment = `${comment.username}: ${comment.comment}`
    props.addNewComment(gameId, newComment)
    console.log(gameId + "  " + newComment);
    // console.log('submit');
    // console.log(comment);
    // console.log(e.target.username.value);
    // console.log(e.target.comment.value);
   
  }

  const onChange = (e) => {
// console.log(` ${[e.target.name]}: ${e.target.value}`);
    setComment(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }



  return(
  <section id="game-details">
    <h1>Game Details</h1>
    <div className="info-section">
      <div className="game-header">
        <img className="game-img" src={currentGame.imageUrl} />
        <h1>{currentGame.title}</h1>
        <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
        <p className="type">{currentGame.category}</p>
      </div>
      <p className="text">
        {currentGame.summary}
      </p>


      
      {/* Bonus ( for Guests and Users ) */}
      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {/* list all comments for current game (If any) */}

          {currentGame.comments 
            ? currentGame.comments.map(x => (
              <li className="comment">
                <p>{x}</p>
              </li>)) 
            : <p className="no-comment">No comments.</p>}
       
        </ul>
        {/* Display paragraph: If there are no games in the database */}
        
      </div>
      {/* Edit/Delete buttons ( Only for creator of this game )  */}
      <div className="buttons">
        <a href="#" className="button">
          Edit
        </a>
        <a href="#" className="button">
          Delete
        </a>
      </div>
    </div>
    {/* Bonus */}
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" onSubmit={newCommentHandler}>
    <input type="text" name="username" placeholder="User Name" onChange={onChange} value = {comment.username}/>
        <textarea
          name="comment"
          placeholder="Comment......"
          onChange={onChange}
          value={comment.comment}
        />
        <input
          className="btn submit"
          type="submit"
          value="Add Comment"
        />
      </form>
    </article>

    
  </section>

  )
}