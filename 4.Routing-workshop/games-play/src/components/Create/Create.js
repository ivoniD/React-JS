import { useState } from "react"
import uniqid  from 'uniqid'

export const Create = (props) => {
  const[newGame, setNewGame] = useState({
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: '',
  })

  const onChange = (e) => {
      setNewGame(state => ({
        ...state,
        [e.target.name]: e.target.value
      }))
  }

  const createNewGameHandler = (e) => {
    e.preventDefault()
    // console.log(`Submit: ${newGame.title}`)
    const game = {
      title: newGame.title,
      category: newGame.category,
      maxLevel: newGame.maxLevel,
      imageUrl: newGame.imageUrl,
      summary: newGame.summary,
      _id: uniqid(),
      _createdOn: Date.now()
    }
    console.log(game);
    props.addNewGame(game)

    setNewGame(state => ({
      title: '',
      category: '',
      maxLevel: '',
      imageUrl: '',
      summary: '',
    }))
  }

  return(

    <section id="create-page" className="auth">
    <form id="create" onSubmit={createNewGameHandler}>
      <div className="container">
        <h1>Create Game</h1>
        <label htmlFor="leg-title">Legendary title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter game title..."
          onChange={onChange}
          value = {newGame.title}
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter game category..."
          onChange={onChange}
          value = {newGame.category}
        />
        <label htmlFor="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min={1}
          placeholder={1}
          onChange={onChange}
          value = {newGame.maxLevel}
        />
        <label htmlFor="game-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Upload a photo..."
          onChange={onChange}
          value = {newGame.imageUrl}
        />
        <label htmlFor="summary">Summary:</label>
        <textarea name="summary" id="summary" onChange={onChange} value = {newGame.summary}/>
        <input
          className="btn submit"
          type="submit"
          value="Create Game"

        />
      </div>
    </form>
  </section>

  )
}