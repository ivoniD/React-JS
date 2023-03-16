const url =  'http://localhost:3030'

export const getAll = () => {

  let result = fetch(`${url}/data/games`)
    .then(res => res.json())

  return result
}

