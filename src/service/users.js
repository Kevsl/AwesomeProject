import axios from 'axios'

export async function getUsers() {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.data
        })
}
