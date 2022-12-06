import axios from 'axios'

export async function getUsers() {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (response.status === 200) {
                console.log(response)
                return response.data
            } else {
            }
        })
}
