import { useEffect, useState } from "react"


export const CaracresList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then (data => {
      setCharacters(data.results)
    })
  }, [])

  return(
    <ul>
      {characters.length === 0 && 'Loading...'}
      {characters.map(x => (<li key={x.name}>{x.name}</li>))}
    </ul>
  )
}