const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {

    const responce = await fetch(baseUrl)
    const result = await responce.json()

    return result.users;
}

export const getOne = async (id) => {

    const responce = await fetch(baseUrl + '/' + id)
    const result = await responce.json()

    return result.user;

    // console.log(result.user)
}

