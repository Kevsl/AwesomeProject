import axios from 'axios'

import { REACT_APP_API_KEY } from '@env'

export async function getMovies(input) {
    const url = ` http://www.omdbapi.com/?i=tt3894198&apikey=${REACT_APP_API_KEY}&s=${input}`

    return axios
        .get(url)

        .then((res) => {
            return res.data.Search
        })
}
