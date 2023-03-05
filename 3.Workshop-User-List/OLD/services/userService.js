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

// export const editOne = async (id) => {

// }
// async put(url,data){
//     const response = await fetch(url, {
//       method: 'PUT',
//       body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     } );
    
//     const data = await response.json();
//     return data;
// 	}

export const create = async (userData) => {

    const responce = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    // console.log(responce)
    if(responce.ok){
        const result = await responce.json()
        // console.log(`id ${result.user._id}`)
        return result.user

    }else {
        throw {message: 'Unable to create user'}
    }


}


export const deleteOne = async (id) => {

    const responce = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    });

}


